

export interface ISoundData {
    id: string;
    buffer: ArrayBuffer | AudioBuffer;
    loop?: number;
    group?: string;
    url?: string;
    extension?: string;
}

export interface IBuffers {
    [id: string]: ISoundData;
}

//a manager for playing web audio sounds
export class Sound {
    private context: AudioContext;

    private globalGain: GainNode;
    private sfxGain: GainNode;
    private musicGain: GainNode;
    private envGain: GainNode;

    private _enabled = false;
    private _scratchBuffer: AudioBuffer;

    private _buffers: IBuffers;

    //probably make this a singleton
    constructor() {
        if (Sound._instance) {
            throw(new Error("Sound singleton already exists"))
        }
        try {
            this.context = new AudioContext();
        } catch (error) {
            this._enabled = false;
            return this;
        }
        //buffer to fix ios bugs
        this._scratchBuffer = this.context.createBuffer(1, 1, 22050)
        //
        this._createRouting();

        this._buffers = {};
    }

    private _createRouting(): void {
        //main output > global mute > context mutes
        this.globalGain = this.context.createGain();
        this.globalGain.connect(this.context.destination)
        //create sfx, music and env
        this.sfxGain = this.addGain();
        this.musicGain = this.addGain();
        this.envGain = this.addGain();
    }

    private addGain(): GainNode {
        const gain = this.context.createGain();
        gain.connect(this.globalGain)
        return gain;
    }

    public play(id: string, volume: number = 1, loop: number = -1):void {
        const soundData = this._buffers[id];
        const soundPlay = new SoundPlay(soundData, this.context)
        //for now just connect it to the sfx gain
        soundPlay.output.connect(this.sfxGain)
        //play it
        soundPlay.play();
    }

    public stop(id: string): void {
        //TODO
    }

    public addSounds(sounds: ISoundData[]): void {
        sounds.forEach(this.add)
        //TODO - monitor when decoding is completed
    }

    public add = (sound: ISoundData): void => {
        this._buffers[sound.id] = sound;
        this.context.decodeAudioData(<ArrayBuffer>sound.buffer).then((decoded:AudioBuffer) => {
            sound.buffer = decoded;
        })
    }

    public get scratchBuffer(): AudioBuffer {
        return this._scratchBuffer;
    }

    //singleton
    private static _instance: Sound
    public static get instance(): Sound {
        if (!Sound._instance) {
            Sound._instance = new Sound();
        }
        return Sound._instance;
    }
}

//struggling to name this appropriately
export class SoundPlay {

    public source: AudioBufferSourceNode;
    public output: GainNode;

    private startTime: number = 0;//for pause handling

    constructor(public soundData: ISoundData, private context: AudioContext) {
        // - create an audiobuffersource node
        this.source = this.context.createBufferSource();
        this.source.buffer = <AudioBuffer>this.soundData.buffer;
        //volume controller
        this.output = this.context.createGain();
        this.source.connect(this.output);//this step is important ;)
    }

    public play(): void {
        //TODO - loop, start time, duration, etc
        this.source.start()
    }

    public stop(): void {
        if (this.source) {
            this.dispose();
        }
    }

    public get volume(): number {
        return this.output.gain.value
    }

    public set volume(value: number) {
        this.output.gain.setValueAtTime(value, this.context.currentTime);
    }

    public get time(): number {
        if (this.source) {
            this.context.currentTime - this.startTime;
        }
        return 0;
    }

    public dispose(): void {
        this.source.stop(0);
        this.source.disconnect(0)
        this.output.disconnect(0)
        //this has to be independently try catched as throws on platforms other than ios
        try {
            this.source.buffer = Sound.instance.scratchBuffer;
        } catch (e) {
            //console.log('scratch buffer error! ', e);
        }
        this.source = null;
        this.output = null;
    }
}


export interface ISoundData {
    id: string;
    buffer: ArrayBuffer | AudioBuffer;
    loop?: number;
    group?: string;
    url?: string;
    extension?: string;
    sprites?: ISpriteInfo[];
    start?: number;
    duration?: number;
}

export interface ISpriteData {
    id: string;
    src: string;
    sprites: ISpriteInfo[];
}

export interface ISpriteInfo {
    id: string;
    start: number;
    duration: number;
}

export interface IBuffers {
    [id: string]: ISoundData;
}

interface IChannels {
    [id: string]: SoundChannel;
}

//a manager for playing web audio sounds
export class Sound {
    private context: AudioContext;

    private globalGain: SoundChannel;
    
    private channels: IChannels;//sfx, music, env

    private _enabled = false;//TODO - check for this
    private _scratchBuffer: AudioBuffer;

    private _buffers: IBuffers;

    //TODO - have an internal event dispatcher

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
        this._enabled = true;
        //buffer to fix ios bugs
        this._scratchBuffer = this.context.createBuffer(1, 1, 22050)
        //
        this._createRouting();

        this._buffers = {};
    }

    private _createRouting(): void {
        //main output > global mute > context mutes
        this.globalGain = new SoundChannel(this.context, this.context.destination);
        
        //create sfx, music and env
        this.channels = {
            sfx: new SoundChannel(this.context, this.globalGain.output),
            music: new SoundChannel(this.context, this.globalGain.output),
            env: new SoundChannel(this.context, this.globalGain.output)
        }
    }

    public play(id: string, volume: number = 1, loop: number = -1): void {
        if (this._enabled) {
            const soundData: ISoundData = this._buffers[id];
            const soundPlay = new SoundPlay(soundData, this.context)
            //choose channel according to data -> ISoundData.group
            const channel: SoundChannel = this.getChannel(soundData)
            channel.add(soundPlay)
            //play it
            soundPlay.play();
            //TODO - need to store the sound so it can be stopped if needed
        }
        
    }

    private getChannel(soundData: ISoundData): SoundChannel {
        switch (soundData.group) {
            case 'music': return this.channels.music;
            case 'env': return this.channels.env;
            default: return this.channels.sfx;
        }
    }

    public stop(id: string): void {
        //TODO
    }

    public addSounds(sounds: ISoundData[]): void {
        sounds.forEach(this.add)
        //TODO - monitor when decoding is completed
    }

    public add = (soundData: ISoundData): void => {
        this.context.decodeAudioData(<ArrayBuffer>soundData.buffer).then((decoded:AudioBuffer) => {
            soundData.buffer = decoded;
            // - handle sound sprites correctly
            //need a different sound data for each one
            if (soundData.sprites) {
                soundData.sprites.forEach((info: ISpriteInfo) => {
                    const data = this._cloneData(soundData)
                    data.id = info.id;
                    data.start = info.start;
                    data.duration = info.duration;
                    this._buffers[info.id] = data;
                })
            } else {
                this._buffers[soundData.id] = soundData;
            }
            
        })
    }

    //unload sound
    public remove(id: string): void {
        //find the main sound then remove all that reference that buffer
        const mainData = this._buffers[id];
        if (!mainData) {
            console.error('Sound.remove - no sound found with id', id)
        } else {
            const buffer = mainData.buffer;
            Object.keys(this._buffers).forEach(key => {
                const soundData = this._buffers[key];
                if (soundData.buffer === buffer) {
                    delete this._buffers[key]
                }
            })
        }
        
    }

    private _cloneData(soundData: ISoundData): ISoundData {
        const { id, buffer, group, extension, url } = soundData;
        return { id, buffer, group, extension, url }
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

//like a channel on a mixer - volume control
//just a wrapper for a gain node
export class SoundChannel {
    public output: GainNode;
    constructor(private context: AudioContext, target: AudioNode) {
        this.output = this.context.createGain()
        this.output.connect(target)
    }

    public get volume(): number {
        return this.output.gain.value
    }

    public set volume(value: number) {
        this.output.gain.setValueAtTime(value, this.context.currentTime);
    }

    public add(sound: SoundPlay): void {
        sound.output.connect(this.output);
    }

    public connect(node: AudioNode): void {
        this.output.connect(node)
    }

    public disconnect(node: AudioNode): void {
        this.output.disconnect(node)
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
        //TODO - set the volume
        this.source.connect(this.output);//this step is important ;)
    }

    public play(): void {
        // - loop, start time, duration, etc
        // this.source.start()
        if (this.duration > -1) {
            this.source.start(0, this.start, this.duration);
        } else {
            this.source.start(0, this.start);
        }
    }

    public get start(): number {
        return this.soundData.start || 0;
    }

    public get duration(): number {
        if (this.soundData.loop) {
            //TODO
        } else {
            return this.soundData.duration || -1;
        }
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
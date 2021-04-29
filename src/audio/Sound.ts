
interface ISoundInfo {
    id: string;
    volume: number;
    loop: number;
    group?: string;
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
        //TODO - need access to sound data here
    }

    public stop(id: string): void {
        //TODO
    }

    public add(id: string): void {
        //need to add the buffer and any relevant info
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
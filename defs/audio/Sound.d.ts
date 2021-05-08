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
export declare class Sound {
    private context;
    private globalGain;
    private sfxGain;
    private musicGain;
    private envGain;
    private _enabled;
    private _scratchBuffer;
    private _buffers;
    constructor();
    private _createRouting;
    private addGain;
    play(id: string, volume?: number, loop?: number): void;
    stop(id: string): void;
    addSounds(sounds: ISoundData[]): void;
    add: (sound: ISoundData) => void;
    private static _instance;
    static get instance(): Sound;
}
export declare class SoundPlay {
    soundData: ISoundData;
    private context;
    source: AudioBufferSourceNode;
    output: GainNode;
    constructor(soundData: ISoundData, context: AudioContext);
    play(): void;
    dispose(): void;
}

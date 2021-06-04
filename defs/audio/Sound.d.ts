export interface ISoundData {
    id: string;
    buffer: ArrayBuffer | AudioBuffer;
    loop?: number;
    group?: string;
    url?: string;
    extension?: string;
    sprites?: ISpriteInfo[];
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
export declare class Sound {
    private context;
    private globalGain;
    private channels;
    private _enabled;
    private _scratchBuffer;
    private _buffers;
    constructor();
    private _createRouting;
    play(id: string, volume?: number, loop?: number): void;
    private getChannel;
    stop(id: string): void;
    addSounds(sounds: ISoundData[]): void;
    add: (sound: ISoundData) => void;
    get scratchBuffer(): AudioBuffer;
    private static _instance;
    static get instance(): Sound;
}
export declare class SoundChannel {
    private context;
    output: GainNode;
    constructor(context: AudioContext, target: AudioNode);
    get volume(): number;
    set volume(value: number);
    add(sound: SoundPlay): void;
    connect(node: AudioNode): void;
    disconnect(node: AudioNode): void;
}
export declare class SoundPlay {
    soundData: ISoundData;
    private context;
    source: AudioBufferSourceNode;
    output: GainNode;
    private startTime;
    constructor(soundData: ISoundData, context: AudioContext);
    play(): void;
    stop(): void;
    get volume(): number;
    set volume(value: number);
    get time(): number;
    dispose(): void;
}

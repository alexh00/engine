import { ISoundData } from "../core";
export declare class Sound {
    private context;
    private globalGain;
    private sfxGain;
    private musicGain;
    private envGain;
    private _enabled;
    private _scratchBuffer;
    constructor();
    private _createRouting;
    private addGain;
    play(id: string, volume?: number, loop?: number): void;
    stop(id: string): void;
    addSounds(sounds: ISoundData[]): void;
    private static _instance;
    static get instance(): Sound;
}

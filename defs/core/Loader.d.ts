import { IAsset, Settings } from "./Settings";
import { ISoundData, ISpriteData } from "../audio/Sound";
export declare class Loader {
    private _loader;
    private _events;
    private _settings;
    static GLOBAL_ASSETS_LOADED: string;
    private _supportedTypes;
    audioFormat: string;
    private _assetData;
    constructor(_loader: PIXI.Loader, _events: PIXI.utils.EventEmitter, _settings: Settings);
    private _setResourceTypes;
    private _setAudioFormat;
    private setXhr;
    loadGlobal(): void;
    fetchSounds(): ISoundData[];
    getAudioSpriteData(assetData: IAsset): ISpriteData;
    loadAssets(assets: IAsset[], load?: boolean): Promise<void>;
    loadScreen(screenId: string): void;
}

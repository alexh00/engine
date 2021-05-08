import { IAsset, Settings } from "./Settings";
import { ISoundData } from "../audio/Sound";
export declare class Loader {
    private _loader;
    private _events;
    private _settings;
    static GLOBAL_ASSETS_LOADED: string;
    private _supportedTypes;
    constructor(_loader: PIXI.Loader, _events: PIXI.utils.EventEmitter, _settings: Settings);
    private _setResourceTypes;
    private setXhr;
    loadGlobal(): void;
    fetchSounds(): ISoundData[];
    loadAssets(assets: IAsset[], load?: boolean): void;
    loadScreen(screenId: string): void;
}

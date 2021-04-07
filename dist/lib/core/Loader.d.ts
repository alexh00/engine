import { IAsset, Settings } from "./Settings";
export declare class Loader {
    private _loader;
    private _events;
    private _settings;
    static GLOBAL_ASSETS_LOADED: string;
    constructor(_loader: PIXI.Loader, _events: PIXI.utils.EventEmitter, _settings: Settings);
    loadGlobal(): void;
    loadAssets(assets: IAsset[], load?: boolean): void;
    loadScreen(screenId: string): void;
}

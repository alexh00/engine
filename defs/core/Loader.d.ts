import { IAsset } from "./Settings";
import { ISoundData, ISpriteData } from "../audio/Sound";
export declare class Loader {
    private _loader;
    static GLOBAL_ASSETS_LOADED: string;
    private _supportedTypes;
    audioFormat: string;
    private _assetData;
    constructor(_loader: PIXI.Loader);
    private _setResourceTypes;
    private _setAudioFormat;
    private setXhr;
    fetchSounds(): ISoundData[];
    getAudioSpriteData(assetData: IAsset): ISpriteData;
    loadAssets(assets: IAsset[], load?: boolean): Promise<void>;
    unload(asset: IAsset): void;
}

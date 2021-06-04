export interface IAsset {
    id: string;
    src: string;
    audio?: boolean;
    loop?: number;
    group?: string;
}
export interface ISize {
    width: number;
    height: number;
}
export interface IAssets {
    global: IAsset[];
    scene: {
        [sceneId: string]: IAsset[];
    };
}
export interface IConfig {
    assets: IAssets;
    size: ISize;
}
export declare class Settings implements IConfig {
    private _loader;
    private _events;
    static CONFIG_LOADED: string;
    configPath: string;
    assets: IAssets;
    size: ISize;
    constructor(_loader: PIXI.Loader, _events: PIXI.utils.EventEmitter);
    load(): Settings;
    private _configLoaded;
}

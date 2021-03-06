//interface for the config

export interface IAsset {
    id: string;
    src: string;
    audio?: boolean;//if true then it will tag on audio format extension
    loop?: number;//for sounds
    group?: string;//for sounds
}

export interface ISize {
    width: number;
    height: number;
}

export interface IAssets {
    [id: string]: IAsset[];
}

export interface IConfig {
    assets: IAssets;
    size: ISize;
}

export class Settings implements IConfig {

    public static CONFIG_LOADED: string = 'config-loaded';

    public configPath: string = 'json/config.json'

    public assets: IAssets;
    public size: ISize = {width: 1334, height: 750};

    constructor(private _loader: PIXI.Loader, private _events: PIXI.utils.EventEmitter) {
        this.load();
    }

    public getManifest(key?: string): IAsset[] {
        if (!key) {
            key = 'global'
        }
        return this.assets[key];
    }

    public load(): Settings {
        this._loader.add('config', this.configPath);
        this._loader.onComplete.once(this._configLoaded)
        this._loader.load();
        return this;
    }

    private _configLoaded = (): void => {
        const config: IConfig = <IConfig>this._loader.resources.config.data;
        Object.assign(this, config)
        this._events.emit(Settings.CONFIG_LOADED)
    }

}
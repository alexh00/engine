

import { IAsset, IAssets, Settings } from "./Settings";
//asset loader
export class Loader {

    public static GLOBAL_ASSETS_LOADED: string = 'global-assets-loaded';


    constructor(
        private _loader: PIXI.Loader,
        private _events: PIXI.utils.EventEmitter,
        private _settings: Settings
    ) {

    }

    public loadGlobal(): void {
        //load items from the global list
        this.loadAssets(this._settings.assets.global)
        this._loader.onComplete.once(() => {
            console.log('global assets loaded')
            this._events.emit(Loader.GLOBAL_ASSETS_LOADED)
        })
    }

    public loadAssets(assets: IAsset[], load = true): void {
        assets.forEach(asset => {
            this._loader.add(asset.id, asset.src)
        })
        if (load) {
            this._loader.load();
        }
    }

    public loadScreen(screenId: string): void {
        //TODO
    }
}
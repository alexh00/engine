

import { IAsset, IAssets, Settings } from "./Settings";
import { LoaderResource } from 'pixi.js'
//asset loader
export class Loader {

    public static GLOBAL_ASSETS_LOADED: string = 'global-assets-loaded';


    constructor(
        private _loader: PIXI.Loader,
        private _events: PIXI.utils.EventEmitter,
        private _settings: Settings
    ) {
        this._setResourceTypes();
    }

    private _setResourceTypes(): void {
        //set it to use xhr for sounds
        LoaderResource.setExtensionLoadType('ogg', LoaderResource.LOAD_TYPE.XHR)
        LoaderResource.setExtensionLoadType('m4a', LoaderResource.LOAD_TYPE.XHR)
    }

    public loadGlobal(): void {
        //load items from the global list
        this.loadAssets(this._settings.assets.global)
        this._loader.onComplete.once(() => {
            console.log('global assets loaded')
            this._events.emit(Loader.GLOBAL_ASSETS_LOADED)
        })
    }

    public fetchSounds() {
        const resources = this._loader.resources;
        Object.keys(resources).forEach((id: string) => {
            const data = resources[id];
            console.log(id, data)
            if (data.type === LoaderResource.TYPE.AUDIO) {
                console.log('its audio')
            }
        })
    }

    public loadAssets(assets: IAsset[], load = true): void {
        //TODO - handle setting audio type here
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


import { IAsset, IAssets, Settings } from "./Settings";
import { LoaderResource } from 'pixi.js'

export interface ISoundData {
    id: string;
    buffer: ArrayBuffer;
    url?: string;
    extension?: string;
}

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
        this.setXhr('ogg')
        this.setXhr('m4a')
        this.setXhr('mp3')
    }

    private setXhr(extension: string): void {
        LoaderResource.setExtensionLoadType(extension, LoaderResource.LOAD_TYPE.XHR)
        LoaderResource.setExtensionXhrType(extension, LoaderResource.XHR_RESPONSE_TYPE.BUFFER)
    }

    public loadGlobal(): void {
        //load items from the global list
        this.loadAssets(this._settings.assets.global)
        this._loader.onComplete.once(() => {
            console.log('global assets loaded')
            this._events.emit(Loader.GLOBAL_ASSETS_LOADED)
        })
    }

    public fetchSounds(): ISoundData[] {
        const resources = this._loader.resources;
        return Object.keys(resources).filter((id: string) => {
            const resource = resources[id];
            return !!resource.xhr
        }).map((id: string) => {
            const resource = resources[id];
            return {
                id, buffer: resource.data, extension: resource.extension, url: resource.url
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
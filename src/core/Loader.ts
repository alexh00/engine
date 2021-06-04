

import { IAsset, IAssets, Settings } from "./Settings";
import { LoaderResource } from 'pixi.js'
import { ISoundData, ISpriteData, ISpriteInfo } from "../audio/Sound";

interface IAssetDataMap {
    [id: string]: IAsset;
}

//asset loader
export class Loader {

    public static GLOBAL_ASSETS_LOADED: string = 'global-assets-loaded';

    private _supportedTypes = ['ogg', 'm4a', 'mp3']

    public audioFormat: string;

    private _assetData: IAssetDataMap = {};

    constructor(
        private _loader: PIXI.Loader,
        private _events: PIXI.utils.EventEmitter,
        private _settings: Settings
    ) {
        this._setResourceTypes();
    }

    private _setResourceTypes(): void {
        //set it to use xhr for sounds
        this._supportedTypes.forEach(type => this.setXhr(type))
        //choose which audio format
        this.audioFormat = this._setAudioFormat();
    }

    private _setAudioFormat(): string {
        const a = document.createElement('audio');
        const ogg = !!(a.canPlayType && a.canPlayType('audio/ogg; codecs="vorbis"').replace(/no/, ''));
        return ogg ? '.ogg' : '.m4a';
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
            return !!resource.xhr && this._supportedTypes.includes(resource.extension)
        }).map((id: string) => {
            const resource = resources[id];
            //also sound group? loop? 
            //TODO - storing by id is going to be problematic - need to change this
            //should use file name or path
            const assetData: IAsset = this._assetData[id]
            // - also sound sprites...
            const spriteData: ISpriteData = this.getAudioSpriteData(assetData);
            const sprites: ISpriteInfo[] = spriteData && spriteData.sprites;
            return {
                id,
                buffer: resource.data,
                extension: resource.extension,
                group: assetData.group,
                loop: assetData.loop,
                url: resource.url,
                sprites
            }
        })
    }

    public getAudioSpriteData(assetData: IAsset): ISpriteData {
        // - find the resource that is the corresponding json...
        const resources = this._loader.resources;

        const audioSrc = assetData.src;
        const slashIndex = audioSrc.lastIndexOf('/') + 1;
        const fname = audioSrc.substring(slashIndex)

        const path = audioSrc.substring(0, slashIndex)

        const dotIndex = fname.lastIndexOf('.')

        //whats the file name we are looking for?
        const jsonName = dotIndex > -1? fname.substring(0, dotIndex) + '.json' : fname + '.json'

        //whats the url we are looking for?
        const jsonURL = path + jsonName;

        const resourceKey = Object.keys(resources).find(key => {
            const resource: LoaderResource = resources[key]
            //don't check the name - the name is the id so can be different to file name
            return resource.url === jsonURL;
        })
        if (resourceKey) {
            const resource: LoaderResource = resources[resourceKey];
            return <ISpriteData>resource.data;
        }
        return null;
    }

    public loadAssets(assets: IAsset[], load = true): void {
        assets.forEach(asset => {
            //TODO - pass through more information eg sound groups?

            //store the data by id for later lookup after loading
            //wait this won't work, what if file and json have the same id...
            this._assetData[asset.id] = asset;

            const src = asset.audio ? asset.src + this.audioFormat : asset.src;
            this._loader.add(asset.id, src)
        })
        if (load) {
            this._loader.load();
        }
    }

    public loadScreen(screenId: string): void {
        //TODO
    }
}
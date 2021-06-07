
import { Sound } from "../audio";
import { Loader } from "./Loader";
import { IAsset, IAssets } from "./Settings";

export class Unloader {

    constructor(private _loader: Loader) {

    }

    public unload(assets: IAsset[]) {

        assets && assets.forEach((asset: IAsset) => {
            // - remove from loader
            this._loader.unload(asset)
            // - remove from texture cache
            delete PIXI.utils.TextureCache[asset.id]
            // - remove from BaseTextureCache
            delete PIXI.utils.BaseTextureCache[asset.id]
            // - remove from sound engine
            Sound.instance.remove(asset.id)
        })

        
    }
}
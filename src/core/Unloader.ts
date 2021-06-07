
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
            const tx = PIXI.utils.TextureCache[asset.id];
            if (tx) {
                const baseTexture = tx.baseTexture;
                PIXI.utils.TextureCache.removeFromCache(tx)
                PIXI.utils.BaseTextureCache.removeFromCache(baseTexture)   
            }
            
            // - remove from sound engine
            Sound.instance.remove(asset.id)
        })

        
    }
}
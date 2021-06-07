import { Loader } from "./Loader";
import { IAsset } from "./Settings";
export declare class Unloader {
    private _loader;
    constructor(_loader: Loader);
    unload(assets: IAsset[]): void;
}

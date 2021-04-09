import { Timeout } from "../utils/Timeout";
import { UpdateList } from "../utils/UpdateList";
export interface IScreenConfig {
    screenWidth: number;
    screenHeight: number;
}
export declare class Screen extends PIXI.Container {
    updateList: UpdateList;
    timeout: Timeout;
    protected screenWidth: number;
    protected screenHeight: number;
    constructor(config: IScreenConfig);
    update(delta: number): void;
    dispose(): void;
}

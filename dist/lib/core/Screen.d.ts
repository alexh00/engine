import { Timeout } from "../utils/Timeout";
import { UpdateList } from "../utils/UpdateList";
export declare class Screen extends PIXI.Container {
    updateList: UpdateList;
    timeout: Timeout;
    constructor();
    update(delta: number): void;
    dispose(): void;
}

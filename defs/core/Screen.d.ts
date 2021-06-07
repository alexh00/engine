import { EventQueue } from "../utils";
import { Timeout } from "../utils/Timeout";
import { UpdateList } from "../utils/UpdateList";
export interface IScreenConfig {
    screenWidth: number;
    screenHeight: number;
    screenEvents: EventQueue;
    id?: string;
}
export declare class Screen extends PIXI.Container {
    updateList: UpdateList;
    timeout: Timeout;
    id: string;
    protected screenWidth: number;
    protected screenHeight: number;
    constructor(config: IScreenConfig);
    update(delta: number): void;
    dispose(): void;
}

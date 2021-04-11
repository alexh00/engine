import { EventQueue } from "./EventQueue";
import { UpdateList } from "./UpdateList";
export declare class UpdateLoop extends UpdateList {
    private _eventQueue;
    private accumulator;
    private currentTime;
    private interval;
    fps: number;
    private gameLoopId;
    constructor(_eventQueue: EventQueue);
    start(): UpdateLoop;
    stop(): void;
    update(_delta: number): void;
}

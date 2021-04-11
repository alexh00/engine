export declare class EventQueue extends PIXI.utils.EventEmitter {
    private _queue;
    add(eventId: string, ...args: unknown[]): void;
    update(_delta: number): void;
}

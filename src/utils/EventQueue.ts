interface IQueueItem {
    eventId: string;
    args: unknown[];
}

export class EventQueue extends PIXI.utils.EventEmitter {

    private _queue: IQueueItem[] = [];

    public add(eventId: string, ...args: unknown[]): void {
        this._queue.push({
            eventId, args
        })
    }

    public update(_delta: number): void {
        while (this._queue.length > 0) {
            const item: IQueueItem = this._queue.shift();
            this.emit(item.eventId, ...item.args)
        }
    }
}
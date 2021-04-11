import { EventQueue } from "./EventQueue";
import { UpdateList } from "./UpdateList";


export class UpdateLoop extends UpdateList{
    private accumulator: number = 0;
    private currentTime: number = 0;
    private interval: number;
    public fps: number = 60;
    private gameLoopId;

    constructor(private _eventQueue: EventQueue) {
        super();
        this.update = this.update.bind(this);
        this.interval = 1000 / this.fps;
    }

    public start(): UpdateLoop {
        clearInterval(this.gameLoopId);
        this.currentTime = Date.now();
        this.gameLoopId = setInterval(this.update, this.interval);
        return this;
    }

    public stop(): void {
        clearInterval(this.gameLoopId);
    }

    public update(_delta: number): void {
        const newTime = Date.now();
        const elapsed = newTime - this.currentTime;
        this.currentTime = newTime;
        this.accumulator += elapsed;
        //use accumulator system for processing time with fixed time step
        const chunk = this.interval;
        while(this.accumulator > chunk){
            this.accumulator -= chunk;
            super.update(chunk);
            //now process the event queue
            this._eventQueue.update(chunk)
        }
    }
}
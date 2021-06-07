import { EventQueue } from "../utils";
import { Timeout } from "../utils/Timeout";
import { UpdateList } from "../utils/UpdateList";

export interface IScreenConfig {
    screenWidth: number,
    screenHeight: number,
    screenEvents: EventQueue,//for changing screens
    id?:string
}

export class Screen extends PIXI.Container {

    public updateList: UpdateList;
    public timeout: Timeout;

    public id: string;

    protected screenWidth:number;
    protected screenHeight: number;
    protected screenEvents: EventQueue;

    constructor(config: IScreenConfig) {
        super();
        Object.assign(this, config)

        this.updateList = new UpdateList();
        this.timeout = <Timeout>this.updateList.add(new Timeout());
    }

    public update(delta: number): void {
        this.updateList.update(delta);
    }

    public dispose(): void {
        this.updateList.removeAll();
        if (this.parent) {
            this.parent.removeChild(this)
            this.destroy();
        }
    }

}
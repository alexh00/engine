import { Timeout } from "../utils/Timeout";
import { UpdateList } from "../utils/UpdateList";

export interface IScreenConfig {
    screenWidth: number,
    screenHeight: number
}

export class Screen extends PIXI.Container {

    public updateList: UpdateList;
    public timeout: Timeout;

    protected screenWidth:number;
    protected screenHeight: number;

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
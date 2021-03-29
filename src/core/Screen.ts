import { Timeout } from "../utils/Timeout";
import { UpdateList } from "../utils/UpdateList";
import * as PIXI from 'pixi.js'

export class Screen extends PIXI.Container {

    public updateList: UpdateList;
    public timeout: Timeout;

    constructor() {
        super();

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
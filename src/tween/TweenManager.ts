import { IUpdate, UpdateList } from '../utils/UpdateList';
import { Tween } from './Tween';
export { Easing } from './Easing';

export class TweenManager extends UpdateList {
    public passedTime: number;

    constructor() {
        super();
        this.passedTime = Date.now();
    }

    public update(delta: number): void {
        this.passedTime += delta;

        if (!this.isPaused) {
            let n = this.updateItems.length;
            let item: IUpdate;
            for (let i = n - 1; i > -1; i--) {
                item = this.updateItems[i];
                if (!item.update(this.passedTime)) {
                    this.removeItems[this.removeItems.length] = item;
                }
            }
            // now remove items
            n = this.removeItems.length;
            if (n > 0) {
                for (let i = 0; i < n; i++) {
                    item = this.removeItems[i];
                    this._remove(item);
                }
                this.removeItems.length = 0;
            }
        }
    }

    public create(target: unknown): Tween {
        const tw = new Tween(target);
        tw.tweenManager = this;
        return tw;
    }

    public static create(target: unknown, tweenManager: TweenManager = null): Tween {
        const tw = new Tween(target);
        tw.tweenManager = tweenManager || TweenManager.instance;
        return tw;
    }

    public killTweensOf(target: unknown) {
        if (this.updateItems.length > 0) {
            let i = this.updateItems.length - 1,
                tween;
            for (; i > -1; i--) {
                tween = this.updateItems[i];
                if (tween.isTweenOf(target)) {
                    this.updateItems.splice(i, 1);
                }
            }
        }
    }

    public static killTweensOf(target: any) {
        TweenManager.instance.killTweensOf(target);
    }

    //singleton
    private static _instance: TweenManager
    public static get instance(): TweenManager {
        if (!TweenManager._instance) {
            TweenManager._instance = new TweenManager();
        }
        return TweenManager._instance;
    }
}
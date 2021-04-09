import { UpdateList } from '../utils/UpdateList';
import { Tween } from './Tween';
export { Easing } from './Easing';
export declare class TweenManager extends UpdateList {
    passedTime: number;
    constructor();
    update(delta: number): void;
    create(target: unknown): Tween;
    static create(target: unknown, tweenManager?: TweenManager): Tween;
    killTweensOf(target: unknown): void;
    static killTweensOf(target: any): void;
    private static _instance;
    static get instance(): TweenManager;
}

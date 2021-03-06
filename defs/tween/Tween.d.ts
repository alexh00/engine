import { TweenManager } from './TweenManager';
export declare class Tween {
    tweenManager: TweenManager;
    protected _object: unknown;
    protected _valuesStart: object;
    protected _valuesEnd: object;
    protected _valuesStartRepeat: object;
    protected _duration: number;
    protected _repeat: number;
    protected _yoyo: boolean;
    protected _isPlaying: boolean;
    protected _reversed: boolean;
    protected _delayTime: number;
    protected _startTime: number;
    protected _easingFunction: (k: number) => number;
    protected _interpolationFunction: (v: any, k: any) => any;
    protected _chainedTweens: Tween[];
    protected _onStartCallback: () => void;
    protected _onStartCallbackFired: boolean;
    protected _onUpdateCallback: () => void;
    protected _onCompleteCallback: () => void;
    protected _onStopCallback: () => void;
    constructor(object: unknown);
    update(time: number): boolean;
    to(properties: object, duration: number): Tween;
    from(properties: object, duration: number): Tween;
    fromTo(from: object, to: object, duration: number): Tween;
    isTweenOf(target: any): boolean;
    start(time?: number): Tween;
    private _start;
    stop(): Tween;
    stopChainedTweens(): void;
    delay(amount: number): Tween;
    repeat(times: number): Tween;
    yoyo(yoyo: boolean): Tween;
    easing(easing: (k: number) => number): Tween;
    interpolation(interpolation: any): Tween;
    chain(...tweens: Tween[]): Tween;
    onStart(callback: () => void): Tween;
    onUpdate(callback: () => void): Tween;
    onComplete(callback: () => void): Tween;
    onStop(callback: () => void): Tween;
    restart(pause_duration: number): void;
    changeDuration(new_duration: number): void;
}

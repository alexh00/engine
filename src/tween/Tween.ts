import { Easing, Interpolation } from './Easing';
import { TweenManager } from './TweenManager';

export class Tween {
    public tweenManager: TweenManager;
    protected _object: unknown; //tween target
    protected _valuesStart: object = {};
    protected _valuesEnd: object = {};
    protected _valuesStartRepeat: object = {};
    protected _duration: number = 1000;
    protected _repeat: number = 0;
    protected _yoyo: boolean = false;
    protected _isPlaying: boolean = false;
    protected _reversed: boolean = false;
    protected _delayTime: number = 0;
    protected _startTime: number = null;
    protected _easingFunction: (k: number) => number = Easing.Linear.None;
    protected _interpolationFunction: (v: any, k: any) => any = Interpolation.Linear;
    protected _chainedTweens: Tween[] = [];
    protected _onStartCallback: () => void = null;
    protected _onStartCallbackFired: boolean = false;
    protected _onUpdateCallback: () => void = null;
    protected _onCompleteCallback: () => void = null;
    protected _onStopCallback: () => void = null;

    constructor(object: unknown) {
        this._object = object;
    }

    //returns false if completed
    public update(time: number): boolean {
        let property;
        if (time < this._startTime) {
            return true;
        }
        if (this._onStartCallbackFired === false) {
            if (this._onStartCallback !== null) {
                this._onStartCallback.call(this._object);
            }
            this._onStartCallbackFired = true;
        }
        let elapsed = (time - this._startTime) / this._duration;
        elapsed = elapsed > 1 ? 1 : elapsed;
        const value = this._easingFunction(elapsed);
        for (property in this._valuesEnd) {
            const start = this._valuesStart[property] || 0;
            let end = this._valuesEnd[property];
            if (end instanceof Array) {
                this._object[property] = this._interpolationFunction(end, value);
            } else {
                // Parses relative end values with start as base (e.g.: +10, -3)
                if (typeof end === 'string') {
                    end = start + parseFloat(end); //, 10);
                }
                // protect against non numeric properties.
                if (typeof end === 'number') {
                    this._object[property] = start + (end - start) * value;
                }
            }
        }
        if (this._onUpdateCallback !== null) {
            this._onUpdateCallback.call(this._object, value, elapsed);
        }
        if (elapsed === 1) {
            if (this._repeat > 0) {
                if (isFinite(this._repeat)) {
                    this._repeat--;
                }
                // reassign starting values, restart by making startTime = now
                for (property in this._valuesStartRepeat) {
                    if (typeof this._valuesEnd[property] === 'string') {
                        this._valuesStartRepeat[property] = this._valuesStartRepeat[property] + parseFloat(this._valuesEnd[property]);
                    }
                    if (this._yoyo) {
                        const tmp = this._valuesStartRepeat[property];
                        this._valuesStartRepeat[property] = this._valuesEnd[property];
                        this._valuesEnd[property] = tmp;
                    }
                    this._valuesStart[property] = this._valuesStartRepeat[property];
                }
                if (this._yoyo) {
                    this._reversed = !this._reversed;
                }
                this._startTime = time + this._delayTime;
                return true;
            } else {
                if (this._onCompleteCallback !== null) {
                    this._onCompleteCallback.call(this._object);
                }
                for (let i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) {
                    this._chainedTweens[i].start(time);
                }
                return false;
            }
        }
        return true;
    }

    public to(properties: object, duration: number): Tween {
        const keys = Object.keys(properties);
        keys.forEach((key) => {
            this._valuesStart[key] = parseFloat(this._object[key]);
            this._valuesEnd[key] = parseFloat(properties[key]);
        });
        if (duration !== undefined) {
            this._duration = duration;
        }
        this._valuesEnd = properties;

        return this;
    }

    public from(properties: object, duration: number): Tween {
        const keys = Object.keys(properties);
        keys.forEach((key) => {
            this._valuesStart[key] = parseFloat(properties[key]);
            this._valuesEnd[key] = parseFloat(this._object[key]);
        });
        if (duration !== undefined) {
            this._duration = duration;
        }
        return this;
    }

    public fromTo(from: object, to: object, duration: number): Tween {
        const keys = Object.keys(from);
        keys.forEach((key) => {
            this._valuesStart[key] = parseFloat(from[key]);
            this._valuesEnd[key] = parseFloat(to[key]);
        });
        if (duration !== undefined) {
            this._duration = duration;
        }
        return this;
    }

    public isTweenOf(target: any): boolean {
        return target === this._object;
    }

    public start(time?: number): Tween {
        if (this.tweenManager) this.tweenManager.add(this);
        this._start(time);
        return this;
    }

    private _start(time: number): Tween {
        this._isPlaying = true;
        this._onStartCallbackFired = false;
        this._startTime = time !== undefined ? time : this.tweenManager.passedTime; //Date.now();
        this._startTime += this._delayTime;
        for (const property in this._valuesEnd) {
            // check if an Array was provided as property value
            if (this._valuesEnd[property] instanceof Array) {
                if (this._valuesEnd[property].length === 0) {
                    continue;
                }
                // create a local copy of the Array with the start value at the front
                this._valuesEnd[property] = [this._object[property]].concat(this._valuesEnd[property]);
            }
            this._valuesStart[property] = this._object[property];
            if (this._valuesStart[property] instanceof Array === false) {
                this._valuesStart[property] *= 1.0; // Ensures we're using numbers, not strings
            }
            this._valuesStartRepeat[property] = this._valuesStart[property] || 0;
        }
        return this;
    }

    public stop(): Tween {
        if (!this._isPlaying) {
            return this;
        }
        this.tweenManager.remove(this);
        this._isPlaying = false;
        if (this._onStopCallback !== null) {
            this._onStopCallback.call(this._object);
        }
        this.stopChainedTweens();
        return this;
    }

    public stopChainedTweens(): void {
        for (let i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) {
            this._chainedTweens[i].stop();
        }
    }

    public delay(amount: number): Tween {
        this._delayTime = amount;
        return this;
    }

    public repeat(times: number): Tween {
        this._repeat = times;
        return this;
    }

    public yoyo(yoyo: boolean): Tween {
        this._yoyo = yoyo;
        return this;
    }

    public easing(easing: (k: number) => number): Tween {
        this._easingFunction = easing;
        return this;
    }

    public interpolation(interpolation): Tween {
        this._interpolationFunction = interpolation;
        return this;
    }

    public chain(...tweens: Tween[]): Tween {
        this._chainedTweens = tweens;
        return this;
    }

    public onStart(callback: () => void): Tween {
        this._onStartCallback = callback;
        return this;
    }

    public onUpdate(callback: () => void): Tween {
        this._onUpdateCallback = callback;
        return this;
    }

    public onComplete(callback: () => void): Tween {
        this._onCompleteCallback = callback;
        return this;
    }

    public onStop(callback: () => void): Tween {
        this._onStopCallback = callback;
        return this;
    }

    public restart(pause_duration: number): void {
        this._startTime += pause_duration;
    }

    public changeDuration(new_duration: number): void {
        this._duration = new_duration;
    }
}

import { IUpdate } from './UpdateList';

interface IAction {
    _targetTime: number;
    _callback: () => void;
}

export class Timeout implements IUpdate {
    private _pool: IAction[];
    private _actions: IAction[] = [];
    private _cancelledActions: IAction[] = [];

    constructor(poolSize: number = 50) {
        this._pool = this._createPool(poolSize);
    }
    
    private _createPool(size: number): IAction[] {
        const pool = [];
        while (size > 0) {
            pool.push({ _targetTime: -1, _callback: null });
            size--;
        }
        return pool;
    }
    
    private _next(): IAction {
        const item = this._pool.shift();
        this._pool[this._pool.length] = item;
        return item;
    }

    public delay(callback: () => void, ms: number): IAction {
        const action = this._next();
        action._targetTime = ms || -1;
        action._callback = callback || null;
        this._actions[this._actions.length] = action;
        return action;
    }

    public update(elapsedTime: number): void {
        const n = this._actions.length;
        if (n > 0) {
            let i, action;
            for (i = n - 1; i > -1; i--) {
                action = this._actions[i];
                // check for ones that were already cancelled or fired
                if (action._targetTime === -1 || !action._callback) {
                    this._cancelledActions[this._cancelledActions.length] = action;
                } else if (action._targetTime > 0 && action._callback) {
                    action._targetTime -= elapsedTime;
                    if (action._targetTime <= 0) {
                        const callback = action._callback;
                        action._callback = null;
                        action._targetTime = -1;
                        callback();
                    }
                }
            }
            // now remove any cancelled ones
            while (this._cancelledActions.length > 0) {
                action = this._cancelledActions.pop();
                i = this._actions.indexOf(action);
                if (i > -1) {
                    this._actions.splice(i, 1);
                }
            }
        }
    }

    public cancel(action: IAction): void {
        action._targetTime = -1;
    }

    public clear(): void  {
        const n = this._actions.length;
        if (n > 0) {
            let i, action;
            for (i = n - 1; i > -1; i--) {
                action = this._actions[i];
                action._callback = null;
                action._targetTime = -1;
            }
        }
        this._actions.length = 0;
    }

    public dispose(): void  {
        this.clear();
        this._pool = null;
    }
}

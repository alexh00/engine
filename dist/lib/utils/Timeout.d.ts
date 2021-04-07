import { IUpdate } from './UpdateList';
interface IAction {
    _targetTime: number;
    _callback: () => void;
}
export declare class Timeout implements IUpdate {
    private _pool;
    private _actions;
    private _cancelledActions;
    constructor(poolSize?: number);
    private _createPool;
    private _next;
    delay(callback: () => void, ms: number): IAction;
    update(elapsedTime: number): void;
    cancel(action: IAction): void;
    clear(): void;
    dispose(): void;
}
export {};

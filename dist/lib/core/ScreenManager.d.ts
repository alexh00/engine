import { Screen } from "./Screen";
import { ISize } from "./Settings";
export declare class ScreenManager {
    private _events;
    private _size;
    root: PIXI.Container;
    currentScreen: Screen;
    constructor(_events: PIXI.utils.EventEmitter, _size: ISize);
    showScreen: (ScreenType: any) => void;
    private _createScreen;
    resize(): void;
    disposeScreen(): void;
}

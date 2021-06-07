import { EventQueue } from "../utils";
import { Screen } from "./Screen";
import { Settings } from "./Settings";
import { Loader } from "./Loader";
export interface IScreenMap {
    [id: string]: typeof Screen;
}
export declare class ScreenManager {
    private _events;
    private _settings;
    private _loader;
    root: PIXI.Container;
    private _size;
    currentScreen: Screen;
    private _screenMap;
    constructor(_events: EventQueue, _settings: Settings, _loader: Loader);
    set screenMap(map: IScreenMap);
    update(delta: number): void;
    showScreen: (id: string) => void;
    private _createScreen;
    resize(): void;
    disposeScreen(): void;
}

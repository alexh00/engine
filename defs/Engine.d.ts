import * as PIXI from 'pixi.js';
import { Loader } from './core/Loader';
import { IScreenMap, ScreenManager } from './core/ScreenManager';
import { Settings } from './core/Settings';
import { Unloader } from './core/Unloader';
import { EventQueue, UpdateLoop } from './utils';
export declare class Engine {
    app: PIXI.Application;
    settings: Settings;
    events: EventQueue;
    updateLoop: UpdateLoop;
    loader: Loader;
    unloader: Unloader;
    screenManager: ScreenManager;
    constructor();
    start(screenMap: IScreenMap): Engine;
    getResource(id: string): unknown;
    private build;
    private _createUpdateLoop;
    private _createScreenManager;
    private _createEvents;
    private _createPixiApp;
}
export * from './core';
export * from './utils';
export * from './tween';
export * from './audio';

import * as PIXI from 'pixi.js';
import { Loader } from './core/Loader';
import { ScreenManager } from './core/ScreenManager';
import { Settings } from './core/Settings';
export declare class Engine {
    app: PIXI.Application;
    settings: Settings;
    events: PIXI.utils.EventEmitter;
    loader: Loader;
    screenManager: ScreenManager;
    constructor();
    start(): Engine;
    getResource(id: string): unknown;
    private build;
    private _createScreenManager;
    private _createEvents;
    private _createPixiApp;
}
export * from './core';
export * from './utils';

import * as PIXI from 'pixi.js';
import { Loader } from './core/Loader';
import { ScreenManager } from './core/ScreenManager';
import { Settings } from './core/Settings';
import { EventQueue, UpdateLoop } from './utils';
export declare class Engine {
    app: PIXI.Application;
    settings: Settings;
    events: EventQueue;
    updateLoop: UpdateLoop;
    loader: Loader;
    screenManager: ScreenManager;
    constructor();
    start(): Engine;
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

import * as PIXI from 'pixi.js'
import { Sound } from './audio/Sound';
import { EngineEvents } from './core/EngineEvents';
import { Loader } from './core/Loader';
import { IScreenMap, ScreenManager } from './core/ScreenManager';
import { Settings } from './core/Settings'
import { Unloader } from './core/Unloader';
import { version } from './core/version';
import { TweenManager } from './tween';
import { EventQueue, UpdateLoop } from './utils';
/// <reference path="typings/pixi.js.d.ts" />
export class Engine {

    public app: PIXI.Application;

    public settings: Settings;

    public events: EventQueue;

    public updateLoop: UpdateLoop;

    public loader: Loader;

    public unloader: Unloader;

    public screenManager: ScreenManager;

    public constructor() {
        console.log('Engine version', version.code)
    }

    public start(screenMap: IScreenMap): Engine {
        //probably want to use the pixi loader for everything...
        //so create the app straight away
        this.app = this._createPixiApp()

        this.events = this._createEvents(screenMap);
        //load the config
        this.settings = new Settings(this.app.loader, this.events);
        return this;
    }

    public getResource(id: string): unknown {
        return this.app.loader.resources[id].data;
    }

    //config has now loaded
    private build(): void {
        //update the app with the loaded settings
        this.app.renderer.resize(this.settings.size.width, this.settings.size.height)

        //create the loader
        this.loader = new Loader(this.app.loader)

        this.unloader = new Unloader(this.loader)

        //create update loop
        this.updateLoop = this._createUpdateLoop()

        //create tween manager, add to update loop
        this.updateLoop.add(TweenManager.instance);

        //create screen manager
        this.screenManager = this._createScreenManager();

    }

    private _createUpdateLoop(): UpdateLoop {
        const updateLoop = new UpdateLoop(this.events)
        updateLoop.start();
        return updateLoop;
    }

    private _createScreenManager(): ScreenManager {
        const screenManager = new ScreenManager(this.events, this.settings, this.loader, this.unloader)
        this.app.stage.addChild(screenManager.root)
        this.updateLoop.add(screenManager)
        return screenManager;
    }   

    private _createEvents(screenMap: IScreenMap): EventQueue {
        const events = new EventQueue();

        events.on(Settings.CONFIG_LOADED, () => {
            //config is loaded - now build the engine
            this.build();
            //set screenmap
            this.screenManager.screenMap = screenMap;
            //load global assets
            this.loader.loadAssets(this.settings.getManifest())
                .then(() => {
                    Sound.instance.addSounds(this.loader.fetchSounds())
                    //now show first screen
                    events.emit(EngineEvents.APP_READY)
                })
        })

        return events;
    }

    private _createPixiApp(): PIXI.Application {
        const view = document.body.querySelector('canvas');
        return new PIXI.Application({
            height: 768, width: 1024,
            transparent: true,
            view,
            forceCanvas: false,
            antialias: true,
            resolution: 1
        });
    }

}

export * from './core'
export * from './utils'
export * from './tween'
export * from './audio'

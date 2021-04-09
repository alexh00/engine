import * as PIXI from 'pixi.js'
import { Loader } from './core/Loader';
import { ScreenManager } from './core/ScreenManager';
import { Settings } from './core/Settings'
/// <reference path="typings/pixi.js.d.ts" />
export class Engine {

    public app: PIXI.Application;

    public settings: Settings;

    public events: PIXI.utils.EventEmitter;

    public loader: Loader;

    public screenManager: ScreenManager;

    public constructor() {
        
    }

    public start(): Engine {
        //probably want to use the pixi loader for everything...
        //so create the app straight away
        this.app = this._createPixiApp()

        this.events = this._createEvents();
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
        this.loader = new Loader(this.app.loader, this.events, this.settings)

        //create update loop

        //create screen manager
        this.screenManager = this._createScreenManager();

        //create tween manager

        //create sound manager (rewrite it)
    }

    private _createScreenManager(): ScreenManager {
        const screenManager = new ScreenManager(this.events, this.settings.size)
        this.app.stage.addChild(screenManager.root)
        return screenManager;
    }   

    private _createEvents(): PIXI.utils.EventEmitter {
        const events = new PIXI.utils.EventEmitter();

        events.on(Settings.CONFIG_LOADED, () => {
            //config is loaded - now build the engine
            this.build();
            //load global assets
            this.loader.loadGlobal();
        })

        events.on(Loader.GLOBAL_ASSETS_LOADED, () => {
            //now show first screen
            events.emit('app-ready')
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

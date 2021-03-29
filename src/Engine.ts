import * as PIXI from 'pixi.js'
import { Loader } from './core/Loader';
import { Settings } from './core/Settings'
//this could be a singleton
class Engine {

    public app: PIXI.Application;

    public settings: Settings;

    public events: PIXI.utils.EventEmitter;

    public loader: Loader;

    public constructor() {
        
    }

    public start(): void {
        //probably want to use the pixi loader for everything...
        //so create the app straight away
        this.app = this._createPixiApp()

        this.events = this._createEvents();
        //load the config
        this.settings = new Settings(this.app.loader, this.events);
    }

    public getResource(id: string): unknown {
        return this.app.loader.resources[id].data;
    }

    private build(): void {
        //create the loader
        this.loader = new Loader(this.app.loader, this.events, this.settings)

        //create update loop

        //create screen manager

        //create tween manager

        //create sound manager (rewrite it)
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
        })
        return events;
    }

    private _createPixiApp(): PIXI.Application {
        // - only set resolution to 0.5 if screen width < 500
        const resolution = 1;

        //TODO - where to get the dimensions from?
        const width = 1024;
        const height = 768;
        const view = document.body.querySelector('canvas');

        return new PIXI.Application({
            height, width,
            transparent: true,
            view,
            forceCanvas: false,
            antialias: true,
            resolution, // get smoother text
        });
    }

}
//kick start
document.addEventListener('DOMContentLoaded', (event) => {
    new Engine().start();
});
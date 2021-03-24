import * as PIXI from 'pixi.js'
//this could be a singleton
class Engine {

    public configPath: string = 'json/config.json'

    public app: PIXI.Application;

    public constructor() {
        
    }

    public start(): void {
        //probably want to use the pixi loader for everything...
        //so create the app straight away
        this.app = this._createPixiApp()
        //load the config
        this._loadConfig();
    }

    private _loadConfig() {
        const loader = this.app.loader;
        loader.add('config', this.configPath);
        loader.onComplete.once(() => {
            //TODO - parse into settings
            console.log('config loaded', this.getResource('config'))
        })
        loader.load();
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

    public getResource(id: string): unknown {
        return this.app.loader.resources[id].data;
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    new Engine().start();
});
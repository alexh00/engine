import { EngineEvents } from "./EngineEvents";
import { EventQueue } from "../utils";
import { Screen } from "./Screen";
import { ISize, Settings } from "./Settings";
import { Loader } from "./Loader";

export interface IScreenMap {
    [id: string]: typeof Screen
}


export class ScreenManager {

    public root: PIXI.Container;

    private _size: ISize;

    public currentScreen: Screen;

    private _screenMap: IScreenMap

    constructor(
        private _events: EventQueue,
        private _settings: Settings,
        private _loader: Loader
    ) {
        
        this._size = this._settings.size;
        
        this.root = new PIXI.Container();

        this.root.position.set(
            this._size.width / 2,
            this._size.height / 2
        )

        this._events.on(EngineEvents.SHOW_SCREEN, this.showScreen)
    }

    public set screenMap(map: IScreenMap) {
        this._screenMap = map;
    }


    public update(delta: number): void {
        if (this.currentScreen) {
            this.currentScreen.update(delta);
        }
    }

    public showScreen = (id: string): void => {
        // - validate id
        if (!this._screenMap.hasOwnProperty(id)) {
            console.error('Screen type not found', id)
        }
        const ScreenType = this._screenMap[id];

        //TODO - UNload first if necessary too
        //would be nice to use async await here...



        // - preload first if necessary
        const assetsToLoad = this._settings.assets[id];
        if (assetsToLoad) {
            this._loader.loadAssets(assetsToLoad).then(() => {
                this.disposeScreen();   
                this.currentScreen = this._createScreen(ScreenType, id)
            })
        } else {
            this.disposeScreen();   
            this.currentScreen = this._createScreen(ScreenType, id)
        }
        
    }

    private _createScreen(ScreenType: typeof Screen, id: string): Screen {
        const screen = <Screen>new ScreenType({
            screenWidth: this._size.width,
            screenHeight: this._size.height,
            id
        });
        this.root.addChild(screen);
        return screen;
    }

    public resize(): void {
        //TODO - keep root centered? Or maybe not needed...
    }

    public disposeScreen(): void {
        if (this.currentScreen) {
            this.currentScreen.dispose();
            this.currentScreen = null;
        }
    }
}
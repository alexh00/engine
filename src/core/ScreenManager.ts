import { Screen } from "./Screen";
import { ISize } from "./Settings";
import * as PIXI from 'pixi.js'

export class ScreenManager {

    public root: PIXI.Container;

    public currentScreen: Screen;

    constructor(private _events: PIXI.utils.EventEmitter, private _size: ISize) {
        this.root = new PIXI.Container();

        this.root.position.set(
            this._size.width / 2,
            this._size.height / 2
        )

        this._events.on('screen', this.showScreen)
    }

    public showScreen = (ScreenType): void => {
        this.disposeScreen();
        
        this.currentScreen = this._createScreen(ScreenType)
    }

    private _createScreen(ScreenType): Screen {
        const screen = <Screen>new ScreenType();
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
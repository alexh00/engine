import { Screen } from "./Screen";
import { ISize } from "./Settings";

export class ScreenManager {

    public root: PIXI.Container;

    public currentScreen: Screen;

    constructor(private _events: PIXI.utils.EventEmitter, private _size: ISize) {
        this.root = new PIXI.Container();

        this.root.position.set(
            this._size.width / 2,
            this._size.height / 2
        )

        //TODO - make this work via queued events actually
        this._events.on('screen', this.showScreen)
    }

    public update(delta: number): void {
        if (this.currentScreen) {
            this.currentScreen.update(delta);
        }
    }

    public showScreen = (ScreenType): void => {
        this.disposeScreen();
        
        this.currentScreen = this._createScreen(ScreenType)
    }

    private _createScreen(ScreenType): Screen {
        const screen = <Screen>new ScreenType({
            screenWidth: this._size.width,
            screenHeight: this._size.height
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
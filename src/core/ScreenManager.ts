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

        this._events.on('screen', this.showScreen)
    }

    // public test(): void {
    //     this.showScreen(Screen);
    //     //test by adding a sprite
    //     const sprite = new PIXI.Sprite(PIXI.utils.TextureCache['snoopy'])
    //     sprite.anchor.set(0.5);
    //     sprite.width = this._size.width;
    //     sprite.height = this._size.height;
    //     this.currentScreen.addChild(sprite)
    // }

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
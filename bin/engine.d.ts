// Generated by dts-bundle v0.7.3
// Dependencies for this module:
//   ../pixi.js

declare module 'engine' {
    import * as PIXI from 'pixi.js';
    import { Loader } from 'engine/core/Loader';
    import { IScreenMap, ScreenManager } from 'engine/core/ScreenManager';
    import { Settings } from 'engine/core/Settings';
    import { Unloader } from 'engine/core/Unloader';
    import { EventQueue, UpdateLoop } from 'engine/utils';
    export class Engine {
        app: PIXI.Application;
        settings: Settings;
        events: EventQueue;
        updateLoop: UpdateLoop;
        loader: Loader;
        unloader: Unloader;
        screenManager: ScreenManager;
        constructor();
        start(screenMap: IScreenMap): Engine;
        getResource(id: string): unknown;
    }
    export * from 'engine/core';
    export * from 'engine/utils';
    export * from 'engine/tween';
    export * from 'engine/audio';
}

declare module 'engine/core/Loader' {
    import { IAsset } from "engine/core/Settings";
    import { ISoundData, ISpriteData } from "engine/audio/Sound";
    export class Loader {
        static GLOBAL_ASSETS_LOADED: string;
        audioFormat: string;
        constructor(_loader: PIXI.Loader);
        fetchSounds(): ISoundData[];
        getAudioSpriteData(assetData: IAsset): ISpriteData;
        loadAssets(assets: IAsset[], load?: boolean): Promise<void>;
        unload(asset: IAsset): void;
    }
}

declare module 'engine/core/ScreenManager' {
    import { EventQueue } from "engine/utils";
    import { Screen } from "engine/core/Screen";
    import { Settings } from "engine/core/Settings";
    import { Loader } from "engine/core/Loader";
    import { Unloader } from "engine/core/Unloader";
    export interface IScreenMap {
        [id: string]: typeof Screen;
    }
    export class ScreenManager {
        root: PIXI.Container;
        currentScreen: Screen;
        constructor(_events: EventQueue, _settings: Settings, _loader: Loader, _unloader: Unloader);
        set screenMap(map: IScreenMap);
        update(delta: number): void;
        showScreen: (id: string) => void;
        resize(): void;
        disposeScreen(): void;
    }
}

declare module 'engine/core/Settings' {
    export interface IAsset {
        id: string;
        src: string;
        audio?: boolean;
        loop?: number;
        group?: string;
    }
    export interface ISize {
        width: number;
        height: number;
    }
    export interface IAssets {
        [id: string]: IAsset[];
    }
    export interface IConfig {
        assets: IAssets;
        size: ISize;
    }
    export class Settings implements IConfig {
        static CONFIG_LOADED: string;
        configPath: string;
        assets: IAssets;
        size: ISize;
        constructor(_loader: PIXI.Loader, _events: PIXI.utils.EventEmitter);
        getManifest(key?: string): IAsset[];
        load(): Settings;
    }
}

declare module 'engine/core/Unloader' {
    import { Loader } from "engine/core/Loader";
    import { IAsset } from "engine/core/Settings";
    export class Unloader {
        constructor(_loader: Loader);
        unload(assets: IAsset[]): void;
    }
}

declare module 'engine/utils' {
    export * from 'engine/utils/Timeout';
    export * from 'engine/utils/UpdateList';
    export * from 'engine/utils/Sequence';
    export * from 'engine/utils/EventQueue';
    export * from 'engine/utils/UpdateLoop';
}

declare module 'engine/core' {
    export * from 'engine/core/Loader';
    export * from 'engine/core/Screen';
    export * from 'engine/core/ScreenManager';
    export * from 'engine/core/Settings';
    export * from 'engine/core/version';
    export * from 'engine/core/EngineEvents';
}

declare module 'engine/tween' {
    export * from 'engine/tween/Easing';
    export * from 'engine/tween/Tween';
    export * from 'engine/tween/TweenManager';
}

declare module 'engine/audio' {
    export * from 'engine/audio/Sound';
}

declare module 'engine/audio/Sound' {
    export interface ISoundData {
        id: string;
        buffer: ArrayBuffer | AudioBuffer;
        loop?: number;
        group?: string;
        url?: string;
        extension?: string;
        sprites?: ISpriteInfo[];
        start?: number;
        duration?: number;
    }
    export interface ISpriteData {
        id: string;
        src: string;
        sprites: ISpriteInfo[];
    }
    export interface ISpriteInfo {
        id: string;
        start: number;
        duration: number;
    }
    export interface IBuffers {
        [id: string]: ISoundData;
    }
    export class Sound {
        constructor();
        play(id: string, volume?: number, loop?: number): void;
        stop(id: string): void;
        addSounds(sounds: ISoundData[]): void;
        add: (soundData: ISoundData) => void;
        remove(id: string): void;
        get scratchBuffer(): AudioBuffer;
        static get instance(): Sound;
    }
    export class SoundChannel {
        output: GainNode;
        constructor(context: AudioContext, target: AudioNode);
        get volume(): number;
        set volume(value: number);
        add(sound: SoundPlay): void;
        connect(node: AudioNode): void;
        disconnect(node: AudioNode): void;
    }
    export class SoundPlay {
        soundData: ISoundData;
        source: AudioBufferSourceNode;
        output: GainNode;
        constructor(soundData: ISoundData, context: AudioContext);
        play(): void;
        get start(): number;
        get duration(): number;
        stop(): void;
        get volume(): number;
        set volume(value: number);
        get time(): number;
        dispose(): void;
    }
}

declare module 'engine/core/Screen' {
    import { EventQueue } from "engine/utils";
    import { Timeout } from "engine/utils/Timeout";
    import { UpdateList } from "engine/utils/UpdateList";
    export interface IScreenConfig {
        screenWidth: number;
        screenHeight: number;
        screenEvents: EventQueue;
        id?: string;
    }
    export class Screen extends PIXI.Container {
        updateList: UpdateList;
        timeout: Timeout;
        id: string;
        protected screenWidth: number;
        protected screenHeight: number;
        protected screenEvents: EventQueue;
        constructor(config: IScreenConfig);
        update(delta: number): void;
        dispose(): void;
    }
}

declare module 'engine/utils/Timeout' {
    import { IUpdate } from 'engine/utils/UpdateList';
    interface IAction {
        _targetTime: number;
        _callback: () => void;
    }
    export class Timeout implements IUpdate {
        constructor(poolSize?: number);
        delay(callback: () => void, ms: number): IAction;
        update(elapsedTime: number): void;
        cancel(action: IAction): void;
        clear(): void;
        dispose(): void;
    }
    export {};
}

declare module 'engine/utils/UpdateList' {
    export interface IUpdate {
        update: (delta: number) => void | boolean;
    }
    export class UpdateList {
        updateItems: IUpdate[];
        removeItems: IUpdate[];
        isPaused: boolean;
        update(delta: number): void;
        purge(): void;
        removeAll(): void;
        add(item: IUpdate): IUpdate;
        remove(item: IUpdate): IUpdate;
        _remove(item: IUpdate): void;
        get length(): number;
    }
}

declare module 'engine/utils/Sequence' {
    export class Sequence {
        list: unknown[];
        constructor(stuff?: unknown[], randomise?: boolean);
        add(stuff: unknown, randomise?: boolean): Sequence;
        remove(stuff: unknown): Sequence;
        randomise(): Sequence;
        next(): unknown;
        previous(): unknown;
        get length(): number;
        static randomiseList: (list: unknown[]) => unknown[];
    }
}

declare module 'engine/utils/EventQueue' {
    export class EventQueue extends PIXI.utils.EventEmitter {
        add(eventId: string, ...args: unknown[]): void;
        update(_delta: number): void;
    }
}

declare module 'engine/utils/UpdateLoop' {
    import { EventQueue } from "engine/utils/EventQueue";
    import { UpdateList } from "engine/utils/UpdateList";
    export class UpdateLoop extends UpdateList {
        fps: number;
        constructor(_eventQueue: EventQueue);
        start(): UpdateLoop;
        stop(): void;
        update(_delta: number): void;
    }
}

declare module 'engine/core/version' {
    const version: {
        code: string;
    };
    export { version };
}

declare module 'engine/core/EngineEvents' {
    export enum EngineEvents {
        APP_READY = "app-ready",
        SHOW_SCREEN = "screen"
    }
}

declare module 'engine/tween/Easing' {
    const Easing: {
        Linear: {
            None(k: any): any;
        };
        Quadratic: {
            In(k: any): number;
            Out(k: any): number;
            InOut(k: any): number;
        };
        Cubic: {
            In(k: any): number;
            Out(k: any): number;
            InOut(k: any): number;
        };
        Quartic: {
            In(k: any): number;
            Out(k: any): number;
            InOut(k: any): number;
        };
        Quintic: {
            In(k: any): number;
            Out(k: any): number;
            InOut(k: any): number;
        };
        Sinusoidal: {
            In(k: any): number;
            Out(k: any): number;
            InOut(k: any): number;
        };
        Exponential: {
            In(k: any): number;
            Out(k: any): number;
            InOut(k: any): number;
        };
        Circular: {
            In(k: any): number;
            Out(k: any): number;
            InOut(k: any): number;
        };
        Elastic: {
            In(k: any): number;
            Out(k: any): number;
            InOut(k: any): number;
        };
        Back: {
            In(k: any): number;
            Out(k: any): number;
            InOut(k: any): number;
        };
        Bounce: {
            In(k: any): number;
            Out(k: any): number;
            InOut(k: any): number;
        };
    };
    const Interpolation: {
        Linear(v: any, k: any): any;
        Bezier(v: any, k: any): number;
        CatmullRom(v: any, k: any): any;
        Utils: {
            Linear(p0: any, p1: any, t: any): any;
            Bernstein(n: any, i: any): number;
            Factorial: (n: any) => number;
            CatmullRom(p0: any, p1: any, p2: any, p3: any, t: any): any;
        };
    };
    export { Easing, Interpolation };
}

declare module 'engine/tween/Tween' {
    import { TweenManager } from 'engine/tween/TweenManager';
    export class Tween {
        tweenManager: TweenManager;
        protected _object: unknown;
        protected _valuesStart: object;
        protected _valuesEnd: object;
        protected _valuesStartRepeat: object;
        protected _duration: number;
        protected _repeat: number;
        protected _yoyo: boolean;
        protected _isPlaying: boolean;
        protected _reversed: boolean;
        protected _delayTime: number;
        protected _startTime: number;
        protected _easingFunction: (k: number) => number;
        protected _interpolationFunction: (v: any, k: any) => any;
        protected _chainedTweens: Tween[];
        protected _onStartCallback: () => void;
        protected _onStartCallbackFired: boolean;
        protected _onUpdateCallback: () => void;
        protected _onCompleteCallback: () => void;
        protected _onStopCallback: () => void;
        constructor(object: unknown);
        update(time: number): boolean;
        to(properties: object, duration: number): Tween;
        from(properties: object, duration: number): Tween;
        fromTo(from: object, to: object, duration: number): Tween;
        isTweenOf(target: any): boolean;
        start(time?: number): Tween;
        stop(): Tween;
        stopChainedTweens(): void;
        delay(amount: number): Tween;
        repeat(times: number): Tween;
        yoyo(yoyo: boolean): Tween;
        easing(easing: (k: number) => number): Tween;
        interpolation(interpolation: any): Tween;
        chain(...tweens: Tween[]): Tween;
        onStart(callback: () => void): Tween;
        onUpdate(callback: () => void): Tween;
        onComplete(callback: () => void): Tween;
        onStop(callback: () => void): Tween;
        restart(pause_duration: number): void;
        changeDuration(new_duration: number): void;
    }
}

declare module 'engine/tween/TweenManager' {
    import { UpdateList } from 'engine/utils/UpdateList';
    import { Tween } from 'engine/tween/Tween';
    export { Easing } from 'engine/tween/Easing';
    export class TweenManager extends UpdateList {
        passedTime: number;
        constructor();
        update(delta: number): void;
        create(target: unknown): Tween;
        static create(target: unknown, tweenManager?: TweenManager): Tween;
        killTweensOf(target: unknown): void;
        static killTweensOf(target: any): void;
        static get instance(): TweenManager;
    }
}


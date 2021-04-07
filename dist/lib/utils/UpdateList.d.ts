export interface IUpdate {
    update: (delta: number) => void;
}
export declare class UpdateList {
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

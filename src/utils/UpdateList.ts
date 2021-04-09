export interface IUpdate {
    update: (delta: number) => void | boolean;
}

export class UpdateList {
    public updateItems: IUpdate[] = [];
    public removeItems: IUpdate[] = [];
    public isPaused: boolean = false;

    public update(delta: number): void {
        if (!this.isPaused) {
            let item,
                i,
                n = this.updateItems.length;
            for (i = n - 1; i > -1; i--) {
                item = this.updateItems[i];
                item.update(delta);
            }
            //now remove items
            n = this.removeItems.length;
            if (n > 0) {
                for (i = 0; i < n; i++) {
                    item = this.removeItems[i];
                    this._remove(item);
                }
                this.removeItems.length = 0;
            }
        }
    }

    public purge(): void {
        this.updateItems.length = 0;
        this.removeItems.length = 0;
    }

    public removeAll(): void {
        let item,
            i,
            n = this.updateItems.length;
        for (i = n - 1; i > -1; i--) {
            this.removeItems[i] = this.updateItems[i];
        }
    }

    public add(item: IUpdate): IUpdate {
        //don't allow adding more than once!
        if (this.updateItems.indexOf(item) === -1) {
            this.updateItems[this.updateItems.length] = item;
        }
        return item;
    }

    public remove(item: IUpdate): IUpdate {
        this.removeItems[this.removeItems.length] = item;
        return item;
    }

    public _remove(item: IUpdate): void {
        const index = this.updateItems.indexOf(item);
        if (index > -1) this.updateItems.splice(index, 1);
    }

    public get length(): number {
        return this.updateItems.length;
    }
}

export class Sequence {
    public list: unknown[] = [];
    
    public constructor(stuff?: unknown[], randomise: boolean = false) {
        if (stuff) {
            this.add(stuff, randomise);
        }
    }

    public add(stuff: unknown, randomise: boolean = false): Sequence {
        if (Array.isArray(stuff)) {
            const items = <unknown[]>stuff;
            this.list.push(...items);
        } else {
            this.list[this.list.length] = stuff;
        }
        if (randomise) this.randomise();
        return this;
    }

    public remove(stuff: unknown): Sequence {
        if (Array.isArray(stuff)) {
            const items = <unknown[]>stuff;
            const n = items.length;
            for (let i = 0; i < n; i++) {
                const item = items[i];
                const index = this.list.indexOf(item);
                if (index > -1) this.list.splice(index, 1);
            }
        } else {
            const index = this.list.indexOf(stuff);
            if (index > -1) this.list.splice(index, 1);
        }
        return this;
    }

    public randomise(): Sequence {
        Sequence.randomiseList(this.list);
        return this;
    }

    public next(): unknown {
        let item = null;
        if (this.list.length > 0) {
            item = this.list.shift();
            this.list[this.list.length] = item;
        }
        return item;
    }

    public previous(): unknown {
        let item = null;
        if (this.list.length > 0) {
            item = this.list.pop();
            this.list.unshift(item);
        }
        return item;
    }

    public get length(): number {
        return this.list.length;
    }

    private static HOLDER = [];

    public static randomiseList = (list: unknown[]): unknown[] => {
        Sequence.HOLDER.push(...list);
        list.length = 0;
        while (Sequence.HOLDER.length > 0) {
            const index = Math.floor(Math.random() * Sequence.HOLDER.length);
            list[list.length] = Sequence.HOLDER.splice(index, 1)[0];
        }
        return list;
    };
}

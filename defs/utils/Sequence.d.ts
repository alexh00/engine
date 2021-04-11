export declare class Sequence {
    list: unknown[];
    constructor(stuff?: unknown[], randomise?: boolean);
    add(stuff: unknown, randomise?: boolean): Sequence;
    remove(stuff: unknown): Sequence;
    randomise(): Sequence;
    next(): unknown;
    previous(): unknown;
    get length(): number;
    private static HOLDER;
    static randomiseList: (list: unknown[]) => unknown[];
}

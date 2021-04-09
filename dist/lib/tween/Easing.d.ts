declare const Easing: {
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
declare const Interpolation: {
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

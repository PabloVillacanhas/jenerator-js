declare type Generable<_T> = {
    [key: string]: GeneratorFunction | string | number | object | null;
};
export declare const MockBuilder: <T>(numInstances: number, objectGen: Generable<T>) => Array<T> & T;
export {};

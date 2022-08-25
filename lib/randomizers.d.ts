export declare function randomNumber(min: number, max: number): Generator<number, void, unknown>;
export declare function randomString(length?: number): Generator<string, void, unknown>;
export declare function randomFrom(items: Array<string | number | boolean>): Generator<string | number, void, unknown>;
export declare function id(): Generator<number, void, unknown>;
export declare const randomizers: {
    randomNumber: typeof randomNumber;
    randomString: typeof randomString;
    randomFrom: typeof randomFrom;
    id: typeof id;
};

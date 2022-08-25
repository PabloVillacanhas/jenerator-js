(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MockBuilder = void 0;
    const MockBuilder = (numInstances, objectGen) => {
        const mocks = [];
        for (let i = 0; i < numInstances; i++) {
            let mock = {};
            for (const field in objectGen) {
                let value;
                if (objectGen[field] === null) {
                    value = null;
                }
                else if (objectGen[field].constructor.constructor.name === 'GeneratorFunction') {
                    value = objectGen[field].next().value;
                }
                else if (objectGen[field] instanceof Object) {
                    value = (0, exports.MockBuilder)(1, objectGen[field])[0];
                }
                else {
                    value = objectGen[field];
                }
                mock = {
                    ...mock,
                    [field]: value,
                };
            }
            mocks.push(mock);
        }
        return mocks;
    };
    exports.MockBuilder = MockBuilder;
});

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
    exports.randomizers = exports.id = exports.randomFrom = exports.randomString = exports.randomNumber = void 0;
    function* randomNumber(min, max) {
        while (true) {
            yield min + Math.random() * max;
        }
    }
    exports.randomNumber = randomNumber;
    function* randomString(length = 10) {
        while (true) {
            yield Math.random().toString(36).slice(length);
        }
    }
    exports.randomString = randomString;
    function* randomFrom(items) {
        while (true) {
            yield items[Math.floor(Math.random() * items.length)];
        }
    }
    exports.randomFrom = randomFrom;
    function* id() {
        let id = 1;
        while (true) {
            yield id++;
        }
    }
    exports.id = id;
    exports.randomizers = {
        randomNumber, randomString, randomFrom, id
    };
});

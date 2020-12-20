"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterCollection = void 0;
var CharacterCollection = /** @class */ (function () {
    function CharacterCollection(data) {
        this.data = data;
    }
    ;
    Object.defineProperty(CharacterCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    CharacterCollection.prototype.compare = function (left, right) {
        return this.data[left].toLowerCase() > this.data[right].toLowerCase();
    };
    CharacterCollection.prototype.swap = function (left, right) {
        var characters = this.data.split('');
        var temp = characters[left];
        characters[left] = characters[right];
        characters[right] = temp;
        this.data = characters.join('');
    };
    return CharacterCollection;
}());
exports.CharacterCollection = CharacterCollection;

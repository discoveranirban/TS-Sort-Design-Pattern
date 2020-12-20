"use strict";
// // way 4
// export class NumbersCollection {
//     constructor(public data: number[]){};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
//     get length():number {
//         return this.data.length;
//     }  
//     compare(left:number , right:number): boolean {
//         return this.data[left] > this.data[right]
//     }
//     swap(left:number , right:number): void {
//         const temp = this.data[left];
//         this.data[left] = this.data[right];
//         this.data[right] = temp;
//     }
// }
// way 5
var Sorter_1 = require("./Sorter");
var NumbersCollection = /** @class */ (function (_super) {
    __extends(NumbersCollection, _super);
    function NumbersCollection(data) {
        var _this = _super.call(this) || this;
        _this.data = data;
        return _this;
    }
    ;
    Object.defineProperty(NumbersCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    NumbersCollection.prototype.compare = function (left, right) {
        return this.data[left] > this.data[right];
    };
    NumbersCollection.prototype.swap = function (left, right) {
        var temp = this.data[left];
        this.data[left] = this.data[right];
        this.data[right] = temp;
    };
    return NumbersCollection;
}(Sorter_1.Sorter));
exports.NumbersCollection = NumbersCollection;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
// // way 1
// class Sorter {
//     constructor(public collection: number[]) {}
//     sort(): void {
//         const {length} = this.collection; 
//         for(let i=0;i<length;i++){
//             for(let j=0;j<length-i-1;j++){
//                 if(this.collection[j]>this.collection[j+1]) {
//                     const temp = this.collection[j];
//                     this.collection[j]=this.collection[j+1];
//                     this.collection[j+1]=temp;
//                 }
//             }
//         }
//     }
// }
// // way 2
// class Sorter2 {
//     constructor(public collection: number[] | string) {}
//     sort(): void {
//         const {length} = this.collection; 
//         for(let i=0;i<length;i++){
//             for(let j=0;j<length-i-1;j++){
//                 if(this.collection instanceof Array) {                     //TypeGuard for everything other than primitive values(string, boolean, number), referrecne to the constructor function
//                     if(this.collection[j]>this.collection[j+1]) {
//                         const temp = this.collection[j];
//                         this.collection[j]=this.collection[j+1];
//                         this.collection[j+1]=temp;
//                     }
//                 }
//                 if(typeof this.collection === 'string'){                   //TypeGuard for primitive value
//                 }
//             }
//         }
//     }
// }
// way 1 & 2
// const sorter = new Sorter([10,3,-5,0]);
// sorter.sort();
// console.log(sorter.collection);
// way 3 & 4
// const numbersCollection = new NumbersCollection([10,-3,-5,0]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data); 
// const characterCollection = new CharacterCollection('Xaayb');
// const sorter = new Sorter(characterCollection);
// sorter.sort();
// console.log(characterCollection.data); 
// way 5
var numbersCollection = new NumbersCollection_1.NumbersCollection([10, -3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);

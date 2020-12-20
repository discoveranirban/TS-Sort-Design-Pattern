

// // way 3
// import { NumbersCollection } from './NumbersCollection'
// export class Sorter {
//     constructor(public collection : NumbersCollection ) {}

//     sort(): void {
//         const {length} = this.collection; 

//         for(let i=0;i<length;i++){
//             for(let j=0;j<length-i-1;j++){
//                 if(this.collection.compare(j,j+1)) {
//                     this.collection.swap(j,j+1);
//                 }
//             }
//         }
//     }
// }


// // way 4 -> making Sorter more independent, without passing any any fixed type of sortable collection, interface making it more generalized
// interface sortable {
//     length: number,
//     compare(left:number, right:number): boolean;
//     swap(left:number, right:number): void;
// }

// export class Sorter {
//     constructor(public collection : sortable ) {}

//     sort(): void {
//         const {length} = this.collection; 

//         for(let i=0;i<length;i++){
//             for(let j=0;j<length-i-1;j++){
//                 if(this.collection.compare(j,j+1)) {
//                     this.collection.swap(j,j+1);
//                 }
//             }
//         }
//     }
// }


// way 5, making sorter more independent..... will make inheriting class of Sorter method call the sort method.
interface sortable {
    length: number,
    compare(left:number, right:number): boolean;
    swap(left:number, right:number): void;
}

export abstract class Sorter {

    abstract compare(left:number, right:number): boolean;
    abstract swap(left:number, right:number): void;
    abstract length: number;

    sort(): void {
        const {length} = this; 

        for(let i=0;i<length;i++){
            for(let j=0;j<length-i-1;j++){
                if(this.compare(j,j+1)) {
                    this.swap(j,j+1);
                }
            }
        }
    }
}
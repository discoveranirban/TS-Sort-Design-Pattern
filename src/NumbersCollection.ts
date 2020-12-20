// // way 4
// export class NumbersCollection {
//     constructor(public data: number[]){};

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
import {Sorter} from './Sorter';

export class NumbersCollection extends Sorter {
    constructor(public data: number[]){
        super();
    };

    get length():number {
        return this.data.length;
    }  

    compare(left:number , right:number): boolean {
        return this.data[left] > this.data[right]
    }

    swap(left:number , right:number): void {
        const temp = this.data[left];
        this.data[left] = this.data[right];
        this.data[right] = temp;
    }
}
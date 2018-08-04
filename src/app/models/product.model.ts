export class Product {
    //1.  Declare Data members
    // public id: number;
    // public name: string;
    // public price: number;
    // public description: string;

    // //2. Initialize data members
    // constructor(id: number, name: string, price: number, desc: string) {
    //     this.id = id;
    //     this.name = name;
    //     this.price = price;
    //     this.description = desc;
    // }

    //Declare and initialize data members

    constructor(public id: number, public name: string, public price: number, public description: string) {
    }
}
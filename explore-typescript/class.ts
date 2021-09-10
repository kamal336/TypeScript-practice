// class type 
class Laptop {
    brand: string;
    model: string;
    price: number;

    constructor(brand:string,model:string,price:number) {
        this.brand = brand;
        this.model = model;
        this.price = price;
    }
    getTax(tax:number):number{
        const taxAmount = this.price * tax / 100;
        const totalPrice = this.price = taxAmount;
        return totalPrice;
    }

}

const LaptopComputer = new Laptop('hp','core i5',50000);
console.log(LaptopComputer)
console.log(LaptopComputer.getTax(15))
"use strict";
// class type 
class Laptop {
    constructor(brand, model, price) {
        this.brand = brand;
        this.model = model;
        this.price = price;
    }
    getTax(tax) {
        const taxAmount = this.price * tax / 100;
        const totalPrice = this.price = taxAmount;
        return totalPrice;
    }
}
const LaptopComputer = new Laptop('hp', 'core i5', 50000);
console.log(LaptopComputer);
console.log(LaptopComputer.getTax(15));

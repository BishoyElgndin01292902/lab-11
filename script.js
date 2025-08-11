// Part 1: Setting Up Classes
class ProductProperties {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    getTotalValue() {
        return this.price * this.quantity;
    }

    toString() {
        return `Product: ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}`;
    }
    //  Part 3: Static Methods and Properties 
    static applyDiscount(products, discount) {
        products.forEach(product => {
            product.price -= product.price * discount;
        });
    }
}
// Part 1: Setting Up Classes
// Base class representing a generic product with basic properties
class ProductProperties {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
 // Method to calculate total value of the product stock (price * quantity)
    getTotalValue() {
        return this.price * this.quantity;
    }
// Returns a formatted string representation of the product
    toString() {
        return `Product: ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}`;
    }
//  Part 3: Static Methods and Properties 
// Static method to apply a discount to an array of products
// 'products' is an array, 'discount' is a decimal (e.g., 0.15 for 15%)
    static applyDiscount(products, discount) {
        products.forEach(product => {
            product.price -= product.price * discount;
        });
    }
}

// Part 2: Adding Inheritance 
// Subclass representing perishable products, adds expiration date property
class PerishableProductProperties extends ProductProperties {
        // Constructor extends base class and initializes expirationDate
        constructor(name, price, quantity, expirationDate) {
        super(name, price, quantity);   // Call base class constructor
        this.expirationDate = expirationDate;
    }
    // Override toString() to include the expiration date along with the base product details
        toString() {
        return `${super.toString()}, Expiration Date: ${this.expirationDate}`;
    }
}

// Part 4: Store Management 
//Implement Store class with inventory array
class Store {
    constructor() {
        this.inventory = [];
    }

}

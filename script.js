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
    // Add addProduct method to Store
    addProduct(product) {
        this.inventory.push(product);
    }
    // Add getInventoryValue method to Store
    getInventoryValue() {
        return this.inventory.reduce((total, product) => total + product.getTotalValue(), 0);
    }
    // Add findProductByName method to Store
    findProductByName(name) {
        return this.inventory.find(product => product.name.toLowerCase() === name.toLowerCase()) || null;
    }

}

//  Part 5: Testing the System 
// Create sample products
let p1 = new ProductProperties("Laptop", 1200, 5);
let p2 = new ProductProperties("Headphones", 150, 10);
let p3 = new ProductProperties("Keyboard", 80, 7);
let pp1 = new PerishableProductProperties("Milk", 2.5, 20, "2025-09-15");
let pp2 = new PerishableProductProperties("Cheese", 5, 15, "2025-08-30");

// Create store and add products
let store = new Store();
store.addProduct(p1);
store.addProduct(p2);
store.addProduct(p3);
store.addProduct(pp1);
store.addProduct(pp2);

// Log total inventory value before discount
console.log(`Total Inventory Value (Before Discount): $${store.getInventoryValue().toFixed(2)}\n`);

// Apply 15% discount to all products
ProductProperties.applyDiscount(store.inventory, 0.15);

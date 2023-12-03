/**
 *  filename: sophisticatedCode.js
 *
 *  This code demonstrates a complex and sophisticated implementation of a virtual shopping cart
 *  using object-oriented programming principles in JavaScript.
 *
 *  The code creates multiple classes including Product, Cart, and User to manage products, carts,
 *  and users respectively. It also includes several utility functions for various cart operations.
 */

// Class representing a product
class Product {
  constructor(id, name, price, quantity) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
}

// Class representing a shopping cart
class Cart {
  constructor() {
    this.items = []; // array to store cart items
    this.total = 0; // initial total cost
  }

  // Add a product to the cart
  addItem(product) {
    const existingItem = this.items.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += product.quantity;
    } else {
      this.items.push(product);
    }

    this.total += product.price * product.quantity;
  }

  // Remove a product from the cart
  removeItem(productId, quantity) {
    const existingItem = this.items.find((item) => item.id === productId);

    if (existingItem) {
      if (existingItem.quantity > quantity) {
        existingItem.quantity -= quantity;
        this.total -= existingItem.price * quantity;
      } else {
        this.items = this.items.filter((item) => item.id !== productId);
        this.total -= existingItem.price * existingItem.quantity;
      }
    }
  }

  // Calculate the total cost of the cart
  calculateTotal() {
    this.total = this.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    return this.total;
  }

  // Clear the cart
  clearCart() {
    this.items = [];
    this.total = 0;
  }

  // Get the cart items
  getItems() {
    return this.items;
  }
}

// Class representing a user
class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.cart = new Cart(); // create a cart for each user
  }

  // Add a product to the user's cart
  addToCart(product) {
    this.cart.addItem(product);
  }

  // Remove a product from the user's cart
  removeFromCart(productId, quantity) {
    this.cart.removeItem(productId, quantity);
  }

  // Calculate the total cost of the user's cart
  calculateCartTotal() {
    return this.cart.calculateTotal();
  }

  // Clear the user's cart
  clearUserCart() {
    this.cart.clearCart();
  }

  // Get the user's cart items
  getUserCartItems() {
    return this.cart.getItems();
  }
}

// Utility function to format product information
function formatProduct(product) {
  return `${product.name} - $${product.price.toFixed(2)} x ${product.quantity}`;
}

// Utility function to print cart items
function printCartItems(items) {
  items.forEach((item, index) => {
    console.log(`${index + 1}. ${formatProduct(item)}`);
  });
}

// Create some products
const product1 = new Product(1, "Product 1", 10.99, 2);
const product2 = new Product(2, "Product 2", 5.99, 1);
const product3 = new Product(3, "Product 3", 15.99, 3);

// Create some users
const user1 = new User(1, "User 1");
const user2 = new User(2, "User 2");

// Add products to User 1's cart
user1.addToCart(product1);
user1.addToCart(product2);

// Add products to User 2's cart
user2.addToCart(product2);
user2.addToCart(product3);

// Print User 1's cart items
console.log(`User 1's Cart Items:`);
printCartItems(user1.getUserCartItems());

// Print User 2's cart items
console.log(`User 2's Cart Items:`);
printCartItems(user2.getUserCartItems());

// Remove product from User 2's cart
user2.removeFromCart(2, 1);

// Print User 2's updated cart items
console.log(`User 2's Updated Cart Items:`);
printCartItems(user2.getUserCartItems());

// Calculate and print User 2's cart total
console.log(`User 2's Cart Total: $${user2.calculateCartTotal().toFixed(2)}`);

// Clear User 1's cart
user1.clearUserCart();

// Print User 1's cart items after clearing
console.log(`User 1's Cart Items After Clearing:`);
printCartItems(user1.getUserCartItems());

// Clear User 2's cart
user2.clearUserCart();

// Print User 2's cart items after clearing
console.log(`User 2's Cart Items After Clearing:`);
printCartItems(user2.getUserCartItems());

// Output:
// User 1's Cart Items:
// 1. Product 1 - $10.99 x 2
// 2. Product 2 - $5.99 x 1
// User 2's Cart Items:
// 1. Product 2 - $5.99 x 1
// 2. Product 3 - $15.99 x 3
// User 2's Updated Cart Items:
// 1. Product 3 - $15.99 x 3
// User 2's Cart Total: $47.97
// User 1's Cart Items After Clearing:
// User 2's Cart Items After Clearing:
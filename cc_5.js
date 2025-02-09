//Task 1: Object Properties
let customer = {
    name: "John Doe",
    age: 35,
    email: "john.doe@email.com"
}; //Declared an object called customer

console.log(`Customer info: name: ${customer.name}, age: ${customer.age}, email: ${customer.email}`); 
//Logged each property 

//Task 2: Object Methods
let order = {
    orderId: 1234,
    totalAmount: 150,
    status: "Processing",
    displayOrder: function() {
        return console.log(`Order ID: ${this.orderId}, Total Amount: ${this.totalAmount}, Status: ${this.status}`)
    }
}; //created object purchase

order.displayOrder(); //called method

//Task 3: Array Manipulation (push, pop, shift, unshift)
let cartItems = ['banana','strawberries','orange']; //Declared an array cartItems with three product name

cartItems.push('yogurt'); //Added a new product to the cart using .push()

cartItems.pop(); //Removed the last item using .pop()

cartItems.unshift('blueberries'); //Added an item at the beginning using .unshift()

cartItems.shift(); //Removed the first item using .shift()

console.log(cartItems);//Logged the final array to the console


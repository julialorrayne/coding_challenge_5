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

//Task 4: Map Method
let prices = [100,200,300]; //Declared an array prices

let discounted_prices = prices.map(num=> num - (num*0.1)); //Used the .map() method to apply a 10% discount to each price

console.log(discounted_prices); //Logged the new discounted prices to the console

//Task 5: Filter Method

let inventory = [5,10,0,40,50,0]; //Declared an array inventory with six product quantities.

let updated_inventory = inventory.filter(quantity => quantity>0);
//Used the .filter() method to remove products with zero stock.

console.log(updated_inventory); //Logged the filtered array to the console.

//Task 6: Reduce Method
let sales = [500,300,200,400]; //Declared an array sales 

let total_revenue = sales.reduce((total,num) => total + num ,0);
//Used the .reduce() method to calculate total revenue.

console.log (total_revenue); //Logged the total revenue to the console.

//Task 7: find() Method
let customers = ['Alice', 'Bob', 'Charlie', 'David']; //Declared an array customers 

const best_customer = customers.find(cust => cust==='Charlie'); 
//Used the .find() method to locate the customer "Charlie"

console.log(best_customer); //Logged the result to the console.

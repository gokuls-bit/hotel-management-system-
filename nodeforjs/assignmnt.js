//problem 1. 
var prompt = require('prompt-sync')();
//const age = prompt("please enter your :");
//if  (age<18) {
//   console.log("you get a 20% discount!");
//}else if (age> 65){
//    console.log("you get the descount of 30%");
//} else   {
//   console.log(" no change in price for you ");
//}
 
 //problem Num. 2 
//var length = prompt("enter the length : ");
//var width = prompt("enter the width :");
//var area = length * width ;
//console.log("the area of the rectangle is :" ,//area );
 //problm no. 3
//const products = [
//    { name: "Laptop", price: 1200, inStock: true },
//    { name: "Smartphone", price: 800, inStock: false },
//    { name: "Headphones", price: 150, inStock: true },
//    { name: "Keyboard", price: 100, inStock: true }
//];
//
//let check = prompt("What are you looking for?");
//
//// Find the product in the array
//let foundProduct = products.find(product => product.name.toLowerCase() === check.toLowerCase());
//
//if (foundProduct) {
//    console.log(`Yes, we have the ${foundProduct.name}. Price: $${foundProduct.price}. Availability: ${foundProduct.inStock ? //"In stock" : "Out of stock"}.`);
//} else {
//    console.log("No, we don’t have the desired product.");
//}
// problem no. 4 
let guestlist = ["mohit", "yashvini", "ipoksy", "satyam", "manav"];

let tobesent = prompt("Enter your name:");

if (guestlist.includes(tobesent.toLowerCase())) {
    console.log("You will attend the event.");
} else {
    console.log("Sorry, you will not attend.");
}

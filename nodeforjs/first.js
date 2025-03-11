//var a=6;
//var b= 89;
//var ans = a+b;
//console.log( "the answer is :  " + ans );
//const name =  ' princy';
//console.log(ans);
//console.log(name); 
//console.log(typeof ans); 
//console.log(typeof name ); 
// array in js 
//const cars = ["tata","volvo","mercedese",456];
//cars.push ("tesla");
//console.log(cars);
//console.log(cars[2]);
//console.log(cars[0]);
//loop
 //var hour = 19;
 //if(hour < 12){
 //   console.log("we are on time  ");
 //}else {console.log("you are late my friend ");}//
 //var count = 10;
 //for (var i =1 ;i<=count;i++ ){
 //   console.log(i);
 //}
 //Object 
 //const person  = {
 //   name: "jack-maa",
 //   age: 58,
 //   isStudent: false,
 //   hobbies:["reading","writing","printing"]
 //};
 //console.log(person.hobbies);
 //const age = [36,45,78,14,59,12];
 //const result =age.filter(checkAge);
 //function checkAge(age){
 //   return age >=18
 //}
 //console.log(result);
// var prompt = require('prompt-sync')();
// const age = prompt("please enter your age:");
// if  (age<18) {
//    console.log("you get a 20% discount!");
//
// } else{
//    console.log("you get the desired discount")
// }
let arr = prompt("Enter the array :").split(",").map(Number);
console.log("Array:", arr);
let sortedArr = [...arr].sort((a, b) => a - b); 
let firstElement = sortedArr[0];
let lastElement = sortedArr[sortedArr.length - 1];

let firstIndex = arr.indexOf(firstElement);
let lastIndex = arr.indexOf(lastElement);

console.log("First:", firstElement, "at index:", firstIndex);
console.log("Last:", lastElement, "at index:", lastIndex);

 
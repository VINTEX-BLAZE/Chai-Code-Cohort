let fruits = ["apple", "mango", "cherry"];
let intFruits = new Array("Kiwi", "Avacado", "Dragon Fruit");

// console.log(fruits[2]);
// console.log(intFruits);

// console.log(typeof fruits);
// console.log(typeof intFruits);

fruits[0] = "blueberry";

console.log(fruits[0]);
console.log(fruits.length);

// fruits.push("new item");
fruits.unshift("new item");
fruits.pop();

console.log(fruits);
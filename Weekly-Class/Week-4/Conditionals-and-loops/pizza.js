let numberofGuest = 0;

let pizzaSize;
// small <= 2
// medium <= 5
// large

// 5 <= 5
// also known as greedy algorithm
if (numberofGuest <= 2) {
  pizzaSize = "Small size pizza.";
} else if (numberofGuest <= 5) {
  pizzaSize = "Medium size pizza.";
} else {
  pizzaSize = " Large size pizza.";
}

console.log(pizzaSize);
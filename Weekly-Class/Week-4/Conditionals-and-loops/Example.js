console.log(" Conditional Statements:");

// ✅ IF-ELSE
let age = 20;
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

// ✅ ELSE IF Ladder
let score = 85;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

// ✅ TERNARY OPERATOR (Short-hand If-Else)
let isLoggedIn = true;
console.log(isLoggedIn ? "Welcome!" : "Please log in");

// ✅ SWITCH CASE
let day = "Monday";
switch (day) {
  case "Monday":
    console.log("Start of the week!");
    break;
  case "Friday":
    console.log("Weekend is near!");
    break;
  case "Sunday":
    console.log("It's weekend!");
    break;
  default:
    console.log("A regular day.");
}

console.log("\n🔹 Loops:");

// ✅ FOR LOOP
for (let i = 1; i <= 5; i++) {
  console.log(`For Loop: ${i}`);
}

// ✅ WHILE LOOP
let count = 1;
while (count <= 3) {
  console.log(`While Loop: ${count}`);
  count++;
}

// ✅ DO-WHILE LOOP (Runs at least once)
let num = 5;
do {
  console.log(`Do-While Loop: ${num}`);
  num--;
} while (num > 2);

// ✅ FOR-IN LOOP (Iterates over object properties)
let person = { name: "Alice", age: 25, city: "New York" };
for (let key in person) {
  console.log(`For-In Loop: ${key} = ${person[key]}`);
}

// ✅ FOR-OF LOOP (Iterates over arrays & strings)
let fruits = ["Apple", "Banana", "Cherry"];
for (let fruit of fruits) {
  console.log(`For-Of Loop: ${fruit}`);
}

// ✅ BREAK STATEMENT (Stops the loop)
for (let i = 1; i <= 5; i++) {
  if (i === 3) break;
  console.log(`Break Example: ${i}`);
}

// ✅ CONTINUE STATEMENT (Skips the current iteration)
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(`Continue Example: ${i}`);
}

// ✅ FOREACH (Array Method Loop)
fruits.forEach((fruit, index) => {
  console.log(`ForEach Loop: Index ${index} - ${fruit}`);
});

// ✅ MAP (Returns a new array after modifying elements)
let squaredNumbers = [1, 2, 3, 4].map(num => num * num);
console.log(`Map Example: ${squaredNumbers}`);


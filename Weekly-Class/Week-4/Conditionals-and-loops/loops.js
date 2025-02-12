let teas = ["masala", "ginger", "oolong", "orange", "rose", "lemon"];

// teas[h];

// teas.length; // output - 6

// let h = 6 // h <= 5 || h < 6 

// loops also known as - iteration (i) ( US Culture )
// step-1 ->> variable leke aao
// step-2 ->> limit batao
// step-3 ->> incre || decre => h = h + 1 === h++ (same stuff)

for (let h = 0; h < teas.length; h++) {
  console.log(`Teas at index ${h}: ${teas[h]}`);
}
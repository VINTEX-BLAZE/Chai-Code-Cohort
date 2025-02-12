let myArray = [1, 4, 2, 3, 5, 6];

function sumFac(num) {
  let total = 0;
  for (let i = 0; i < num.length; i++) {
    total += num[i];
    // total = total + num[i];
  }
  return total;
}

let result = sumFac(myArray);
console.log(result);

let anotherResult = sumFac([3, 3, 2, 6, 4])
console.log(`My result is : ${anotherResult}`);
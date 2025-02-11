// Q. You're packing chocolate bars into boxes.Each box needs to have the same number of chocolate bars. you need to find out how many boxes of chocolates you'll have after packing the bars.
// Problem Statement : Create a function that counts how many boxes you need based on the total number of chocolate bars and the number of chocolate bars per box, using a loop.
// Hint : You can use division to calculate how many full boxes of chocolate bars you can make. Consider using a loop to simulatethe packing process and check if any bars are left over.

// Ans-1 (Using Loop) :

function countBoxes(totalBars, barsPerBox) {
    let boxes = 0;
    while(totalBars > barsPerBox){
        boxes++;
        totalBars -= barsPerBox;
    } return boxes;
}

// Ans-2 (Withou using Loop) :

function countBoxes(totalBars, barsPerBox) {
    return parseInt(totalBars / barsPerBox)
}
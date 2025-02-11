// Q. You have a basket full of apples. you need to count how many apples are in the basket , but you don't know the exact number. Each time you pick an apple , you count one . you task is to count how many apples are in the basket.
// Problem Statement : Create a function that counts the number of apples are in basket using loops.

// ANS :

function countApples(apples) {
    // returns the total number of Apples 
    let count = 0 ;
    for (let i = 1 ; i<= apples ; i++ ){
      count++;
    }
    return count ;
}
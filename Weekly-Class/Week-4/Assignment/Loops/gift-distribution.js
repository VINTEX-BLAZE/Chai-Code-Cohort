// Q. You havea pile of gifts, and you want to give each of your friends one gift at a time. You keep giving them gifts until they all get one.
// Problem Statement : write a function to distribute gifts to your friends one by one. it should stop once all your friends have recived a gift.
// Hint-1 : Use if clause with a loop 

// ANS-1 : 

function distributeGifts(totalGifts, friends) {
    // write your code here
    gifts = 0;
    if(totalGifts<friends){
      for (let i = 1 ; i<= totalGifts ; i++){
        gifts++;
      } return gifts ;
    } else {
      for (let i = 1 ; i<= friends ; i++){
      totalGifts-- ;
      gifts++;
    } return gifts ;
    }
}

// ANS-2 (Using Hint) : 

function distributeGifts(totalGifts, friends) {
    let gifts = 0;
    for (let i = 0 ; i<friends; i++ ){
        if(totalGifts < 0){
            gifts++;
            totalGifts--;
        } else {
            return gifts;
        }
    } return gifts
}
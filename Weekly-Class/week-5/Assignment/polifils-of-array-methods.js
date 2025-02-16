// polifil of .at() method 
// signature - takes only index of array , returns the value at that index
if(!Array.prototype.myat) {
    Array.prototype.myat = function (index){
        return this[index]
        }
    }

// const arr1 = [1, 2, 3, 4, 5, 6]
// console.log(arr1.myat(3));

// polifil of .concat() method
// signature - takes omore than one array , returns a new marged array
if(!Array.prototype.myconcat){
    Array.prototype.myconcat = function (){ // if there is no parameters specified in js there  is a default argument object like array "arguments"(it is not fully an array it is more an object) is persent and holds any user arguments
        // copied the original array on which the function is called
        const arr = this.slice()
        // ittrating the arguments object by for loop
        for(let i =0 ; i< arguments.length ; i++){
            // checking if it's a array (if not an array we can directly push it)
            if(Array.isArray(arguments[i]) ){
                // itterating the array which is passed by the user
                for (let j = 0; j< arguments[i].length; j++ ){
                    arr.push(arguments[i][j])
                }
            } else{
                arr.push(arguments[i])
            }
        }
        return arr;
    }
}
// const arr = [1, 2, 3, 4, 5, 6]
// const arr2 = [7, 8, 9, 10, 11, 12]
// console.log(arr.myconcat(arr,arr2));

// polifil of .copywith()
// signature - takes a target index and a section of array index and replace the target index with the section
if(!Array.prototype.myCopywith){
    Array.prototype.myCopywith = function (target, start = this[0], end = this[this.length-1]){
        // copied the original array on which the function is called
        const arr = this.slice()
        // coping the part which need to be realocate
        const arr2 = this.slice(start , end)
        // realocating the part of the array without changing the length of the array(arr2.length)
        arr.splice(target, arr2.length, arr2)
        const arr3 = arr.flat(Infinity)
        // console.log(arr2); // for debuging purpose
        return arr3
        
    }
}
// const arr = [1, 2, 3, 4, 5, 6]
// console.log(arr.myCopywith(0,1,3));
// console.log(arr); 

// polifil of .every()
// takes a cllback function , returns true only if all elements of an array satisfy the condition otherwise returns false
if(!Array.prototype.myEvery){
    Array.prototype.myEvery = function (callback){
        // initialized a counter
        let count = 0
        // ittrating over the array (upon which called) 
        for (let i of this ){
            if(callback(i ,this[i] )) count++ // if the callback function returns true then count +=1
        } 
        if(count == this.length) return true; // At last checking if all array element satisfied the user defined condition or not
        else return false;
    }
}
// const arr = [1, 2, 3, 4, 5, 6];
// console.log(arr.myEvery((e)=> e > 10));

// polifil of .fill()
// signature - takes three inputs - which number will be replacing , from whare to whare it will replace and returns a modified array
if(!Array.prototype.myFill){
    Array.prototype.myFill = function (value , start = this[0], end = this[this.length-1]){
       for (let i = 0; i<this.length; i++){
        if (i>=start && i<=end-1){
            this[i] = value;
        }
       }
       return this;
    }
}
const arr = [1, 2, 3, 4, 5, 6];
console.log(arr.myFill(0,1,4));


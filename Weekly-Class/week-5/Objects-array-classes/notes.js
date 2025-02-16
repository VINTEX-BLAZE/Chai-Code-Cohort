const person = {
    x:10,
    firstName: "Indranil",
    lastName: "Mukherjee",
    hobbies: ['Coding', 'Gaming'],
    isMarrid: false,
    hasGf: false,
    hadGf: false,
    hadCrush: Infinity,
    getFullName : function(){
        return 'Indranil Mukherjee'
    }, address:{
        hno: 1,
        street: 2,
        countryCode: 'IN',
        state: 'HR'
    }
}

console.log(person.address.countryCode);

// UseCase of Object - Group krne k liye (For Grouping property easily)

const remote = {
    color: "Black",
    brand: "Xyz Comany",
    dimensions: {height: 20, width: 10},
    turnOff: function(){
        
    }
}
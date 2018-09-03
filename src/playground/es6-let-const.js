console.log('ana are mere');

const squareArrow = (x) => x * x;

console.log(squareArrow(8));

const firstName = (fullName) => {
    return fullName.split(' ')[0];
}

console.log(firstName('Mike Smith'));

const firstName2 = (fullName) => fullName.split(' ')[0];

console.log(firstName2('Tom Jerry'));

// normal ES5 function which is bound to the arguments object
const add = function(a, b) {
    console.log(arguments);

    return arguments[0] + arguments[1];
}
console.log(add(5, 1));


// # arguments object is no longer bound in arrow functions
// const add2 = (a, b) => {
//     console.log(arguments); // error: arguments is not defined

//     return arguments[0] + arguments[1];
// }
// console.log(add2(5, 1));


// # this binding in es5 functions that are not methods
const user = {
    name: 'Andrew',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    printPlacesLived: function () {
        // this is bound to the user object
        console.log(this.name);
        console.log(this.cities);

        // workaround  so that this is accessible in the function()
        const that = this;

        this.cities.forEach(function(city) {

            // this is bound to the Global Object => error: cannot read property 'name' of undefined
            // console.log(this.name + ' has lived in ' + city);

            console.log(that.name + ' has lived in ' + city);
        })
    }
}
user.printPlacesLived();

// # this binding in arrow functions that are not methods
const user2 = {
    name: 'Andrew',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    printPlacesLived: function() {
        // this is bound to the user object
        console.log(this.name);
        console.log(this.cities);

        this.cities.forEach((city) => {

            // this is bound to the the this keyowk of the function's parent
            // => no error when using this
            console.log(this.name + ' has lived in ' + city);
        });
    }
};
user2.printPlacesLived();

// # using map()
const user3 = {
    name: 'Andrew',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    printPlacesLived: function() {
        // this is bound to the user object
        
        // transofrm each item and in teh end getting a new array back
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};
console.log(user3.printPlacesLived());


// challange
const multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map(number => number * this.multiplyBy);
    }
};
console.log(multiplier.multiply());
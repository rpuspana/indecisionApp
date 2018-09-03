// function gica() {
//     console.log(this); // undefined
// }
// gica();

const obj = {
    name: 'Vikram',
    getName() {
        return this.name // undefined.name
    }
};

// const getName = obj.getName;

// obj.getName is in the context of an object => this = object
// intr-o functie normala this = undefined
// console.log(getName());

// bind param = to what the this pointer points to
const getName = obj.getName.bind({name: 'Andrew'});
console.log(getName());
// ES6 way without the babel plugin
class OldSyntax {
    constructor() {
        this.name = 'Mike';
        this.getGreeting = this.getGreeting.bind(this);
    }
    getGreeting (){
        return `Hi my name is ${this.name}`;
    }
}

const oldSyntax = new OldSyntax();
const getGreeting = oldSyntax.getGreeting;

console.log(getGreeting());


// Using "transform-class-properties" babel plugin https://babeljs.io/docs/en/babel-plugin-transform-class-properties/
class NewSyntax {

    // key value pairs
    name = 'Jan';

    // arrow functions use the this binding of the parent scope
    // for classes this is the class instance
    // => this var in this method will be forever bound to the class instance
    getGreeting = () => {
        return `Hi my name is ${this.name}`;
    }
}

// use case 1
const newSyntax = new NewSyntax();
console.log(newSyntax);

// use case 2
const newGetGreeting = newSyntax.getGreeting;
console.log(newGetGreeting());
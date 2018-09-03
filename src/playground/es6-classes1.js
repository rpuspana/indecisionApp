class Person {

    // if default vaulue of parameter name si Annonymous
    constructor(name = 'Annonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hi. I am ${this.name}`;
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`
    }
}

// const me = new Person('Andew', 12);
// console.log(me);
// console.log(me.getGreeting());
// console.log(me.getDescription());

// const other = new Person();
// console.log(other);
// console.log(other.getGreeting());
// console.log(other.getDescription());

// Subclasses 

class Student extends Person {
    constructor(name, age, major) {

        // call the const of the super function
        super(name, age);

        this.major = major;
    }

    hasMajor() {
        // !'' = true
        // !!'' = false
        // !!undefined = false
        return !!this.major;
    }

    // OVERRIDE THE BEHAVIOUR IN THE PARENT CLASS
    getDescription() {

        let description = super.getDescription(); // call func from Student

        if (this.hasMajor()) {
            description = description += ` Their major is ${this.major}`
        }

        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {

        // call the parent's constructor
        super(name, age);

        this.homeLocation = homeLocation;
    }

    // OVERRIDE getGreeding from Person
    getGreeting() {

        // return 'traveler get greeting'

        let greeting = super.getGreeting();

        if (!!this.homeLocation) {
            
            // use getGreeting from Student
            greeting += `. I'm visiting from ${this.homeLocation}`;
        }

        return greeting;
    }
}

const me = new Traveler('Gigi', 3, 'pholadelphia');
console.log(me);

console.log(me.getGreeting());


// const me2 = new Student('Fane', 2, 'Computer Science');
// console.log(me2.getDescription());

// const other = new Student();
// console.log(other.getDescription()); // getDescription() in the Student class

// const pers1 = new Person();
// console.log(pers1.getDescription()) // getDescription() called in Person class
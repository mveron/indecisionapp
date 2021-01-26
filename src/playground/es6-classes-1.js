class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age
    }
    getGreeting() {
        return `Hi!, I am ${this.name}.`
    }
    getDescription() {
        return `${this.name} is ${this.age} years old.`
    }
}

class Student extends Person{
    constructor(name, age, major = '') {
        super(name, age);
        this.major = major
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();
        
        if(this.hasMajor()) {
            description += ` Their major is ${this.major}.`;
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation = '') {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    hasLocation() {
        return !!this.homeLocation;
    }
    getGreeting() {
        let gretting = super.getGreeting();
        
        if(this.hasLocation()) {
            gretting += ` Im visiting from ${this.homeLocation}`
        }

        return gretting
     }
}
const me = new Traveler('Mauricio Veron', 36, 'Corrientes');
console.log(me.getGreeting());

const other = new Traveler('Benjamin Zamudio', 30, 'Capital');
console.log(other.getGreeting());
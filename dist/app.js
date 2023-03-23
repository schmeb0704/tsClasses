"use strict";
class Person {
    constructor(name) {
        if (name) {
            this.name = name;
        }
    }
    greet(phrase) {
        if (this.name) {
            console.log(`${phrase} ${this.name}.`);
        }
        else {
            console.log('hi!');
        }
    }
}
let user1 = {
    name: 'Sean',
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    },
};
const person1 = new Person('Sean');
console.log(typeof person1);
person1.name = 'ben';
person1.greet('Hello, my name is');

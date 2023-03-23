// interface

interface Pet {
  species: string;
  color: string;

  makeSound(cry: string): void;
}

interface Named {
  readonly name?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string | undefined;
  constructor(name?: string) {
    if (name) {
      this.name = name;
    }
  }

  greet(phrase: string) {
    if (this.name) {
      console.log(`${phrase} ${this.name}.`);
    } else {
      console.log('hi!');
    }
  }
}

let user1: Greetable = {
  name: 'Sean',
  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  },
};

const person1 = new Person('Sean');
console.log(typeof person1);
person1.name = 'ben';

person1.greet('Hello, my name is');

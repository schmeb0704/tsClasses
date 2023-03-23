// interface

interface Greetable {
  name: string;
  age: number;

  greet(phrase: string): void;
}

interface Pet {
  species: string;
  color: string;
}

class Person implements Greetable, Pet {
  constructor(
    public name: string,
    public age: number,
    public species: string,
    public color: string
  ) {}

  greet(phrase: string) {
    console.log(
      `${phrase} ${this.name}. I have a pet ${this.species}. It is color ${this.color}`
    );
  }
}

let user1: Greetable = {
  name: 'Sean',
  age: 23,
  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  },
};

const person1 = new Person('sean', 23, 'cat', 'gray');

person1.greet('Hello, my name is');

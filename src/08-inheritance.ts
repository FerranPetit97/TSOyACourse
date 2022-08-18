export class Animal {
  constructor(public name: string) {}

  move() {
    console.log('Moving alone!');
  }

  greeting() {
    return `Hello, I'm ${this.name}`;
  }
}

export class Dog extends Animal {
  constructor(name: string, public owner: string) {
    super(name);
  }

  woof(times: number) {
    for (let index = 0; index < times; index++) {
      console.log('Woof!');
    }
  }
}

const tasmi = new Animal('Tasmi');
tasmi.move();
console.log(tasmi.greeting());

const kai = new Dog('Kai', 'Rosana');
kai.move();
console.log(kai.greeting());
kai.woof(5);
console.log(kai.owner);

export abstract class Animal {
  constructor(protected name: string) {}

  move() {
    console.log('Moving alone!');
  }

  greeting() {
    return `Hello, I'm ${this.name}`;
  }

  protected doSomething() {
    console.log('Voltereta');
  }
}

export class Dog extends Animal {
  constructor(name: string, public owner: string) {
    super(name);
  }

  woof(times: number) {
    for (let index = 0; index < times; index++) {
      console.log(`Woof ${this.name}`!);
    }
    this.doSomething();
  }

  move(): void {
    console.log('Moving as a dog');
    super.move();
  }
}
//Este error se genera por poner la class padre como abstract
const tasmi = new Animal('Tasmi');
tasmi.move();
console.log(tasmi.greeting());

const kai = new Dog('Kai', 'Rosana');
kai.move();
console.log(kai.greeting());
kai.woof(2);
// kai.name = 'otro nombre';
kai.woof(2);
console.log(kai.owner);

kai.move();

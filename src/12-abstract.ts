import { Animal, Dog } from './09-protected';
//Este error se genera por poner la class padre como abstract
const animal = new Animal('mytits');
animal.greeting();

const daisy = new Dog('Daisy', 'Jessica');
daisy.greeting();
daisy.woof(2);

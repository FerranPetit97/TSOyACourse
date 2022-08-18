import { Dog } from './09-protected';

// const getValue = (value: unknown) => {
//   return value;
// };
// const getValue = (value: number | string) => {
//   return value;
// };

const getValue = <T>(value: T) => {
  const array: T[] = [value];
  return value;
};

getValue<number>(12).toFixed();
getValue<string>('12').toLowerCase();
getValue<number[]>([11, 1, 1]).forEach(() => {});

const daisy = new Dog('Daisy', 'Jessica');
getValue<Dog>(daisy).greeting;

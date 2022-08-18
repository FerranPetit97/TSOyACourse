console.log('Math.PI: ', Math.PI);
console.log('Math.max: ', Math.max(1, 2, 2, 8, 1, 0));

class MyMath {
  static readonly PI = 3.14;

  static max(...numbers: number[]): number {
    return numbers.reduce(
      (max, item) => (max >= item ? max : item),
      numbers[0]
    );
  }
}

console.log('MyMath.PI: ', MyMath.PI);
console.log('MyMath.max: ', MyMath.max(1, 2, 3, 1, 2, 5, 63, 536, 73));
const numbers = [1, 2, 3, 1, 2, 5, 63, 536, 73];
console.log('MyMath.max: ', MyMath.max(...numbers));

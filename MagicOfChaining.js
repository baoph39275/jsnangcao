//Chaining là kết hợp nhiều method lại với nhau.
const arr = [1, 2, 3, 4, 5];

const result = arr
  .filter(x => x % 2 === 0)
  .map(x => x * 2)
  .reduce((acc, x) => acc + x, 0); // (2*2 + 4*2) = 12


const data = require('./data.json');

const countTree = (input, right, down) => {
  let result = 0;
  let width = input[0].length;
  for (let i = 1; i * down < input.length; i++) {
    const x = i * right % width;
    const y = i * down;
    const char = input[y].charAt(x);
    if (char === '#') {
      result++;
    };
  }
  return result;
}

// Part 1
console.log('part 1: ', countTree(data.data, 3, 1));

//Part 2
const result1 = countTree(data.data, 1, 1);
const result2 = countTree(data.data, 3, 1);
const result3 = countTree(data.data, 5, 1);
const result4 = countTree(data.data, 7, 1);
const result5 = countTree(data.data, 1, 2);

console.log('part 2: ', result1 * result2 * result3 * result4 * result5);

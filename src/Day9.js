import { getMax, getMin, toNumbers } from '../utils/util';

const data = require('../data/day9.json');
const preamble = 25;
const inputData = toNumbers(data.data);

const isValid = (preambleArray, sum) => {
  for (let i = 0; i < preambleArray.length; i++) {
    const first = preambleArray[i];
    for (let j = i + 1; j < preambleArray.length; j++) {
      const second = preambleArray[j];
      if (first + second === sum) return true;
    }
  }
  return false;
}

//Part 1
const getFirstInvalid = (input) => {
  for (let i = 25; i < input.length; i++) {
    const currentArray = input.slice(i - preamble, i);
    const currentSum = input[i];

    if (!isValid(currentArray, currentSum)) {
      // console.log('result: ', currentSum);
      return currentSum;
    };
  }
}

//Part 2
const getContiguousSet = (input, sum) => {
  for (let i = 0; i < input.length; i++) {
    const newInput = input.slice(i);
    newInput.reduce((accu, current, index) => {
      if (accu < sum) {
        return accu + current;
      }
      if (accu === sum) {
        const resultArray = newInput.slice(0, index);
        const min = getMin(resultArray);
        const max = getMax(resultArray);
        const result = min + max;
        console.log('result: ', result);
        return;
      }
      if (accu > sum) return;
    }, 0)
  }
}

getContiguousSet(inputData, getFirstInvalid(inputData));

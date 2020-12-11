const data = require('./data.json');
const toNumbers = (stringArray) => stringArray.map(string => parseInt(string));
const sortAsc = (sortArray) => sortArray.sort((a, b) => a - b);
const input = sortAsc(toNumbers(data.data));

//Part 1
const getAllJolt = (inputData) => {
  let diff1 = 0;
  let diff3 = 0;

  for (let i = 0; i < inputData.length; i++) {
    if (input[i + 1] - input[i] === 1) diff1++;
    if (input[i + 1] - input[i] === 3) diff3++;
  }
  diff3++;
  console.log("part 1: ", diff1 * diff3);
}
// getAllJolt(input);


//Part 2
const memorize = [];

const reduceJolt = (inputData, currentIndex) => {
  if (typeof memorize[inputData] !== 'undefined') {
    return memorize[inputData];
  }

  let currentResult = 0;
  for (let i = 0; i < inputData.length - 1; i++) {
    if (inputData[i + 2] - inputData[i] <= 3) {
      currentResult++;
      const newInput = inputData.slice(i + 2);
      newInput.unshift(inputData[i]);
      currentResult += reduceJolt(newInput, currentIndex + 1)
    }
  }
  memorize[inputData] = currentResult;
  return currentResult
}

console.log("part 2: ", reduceJolt(input, 0));

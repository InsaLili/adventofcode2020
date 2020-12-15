const data = require('../data/day1.json');

getResult = (input) => {
  for (let i = 0; i < input.length; i++) {
    const number1 = parseInt(input[i]);
    for (let j = i + 1; j < input.length; j++) {
      const number2 = parseInt(input[j]);
      for (let k = j + 1; k < input.length; k++) {
        const number3 = parseInt(input[k]);
        const sum = number1 + number2 + number3;
        if (sum === 2020) {
          console.log('result: ', number1 * number2 * number3);
          return;
        }
      }
    }
  }
}

getResult(data.data);


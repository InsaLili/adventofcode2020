var data = require('./data.json');

let action = '';
let distance = 0;

let history = [0];
let accu = 0;
let modify = 0;
let index = 0;
let currentModify = 0;

const parseInput = (input) => {
  const splitInput = input.split(' ');
  action = splitInput[0];
  distance = parseInt(splitInput[1]);
}

const getNextIndex = (i) => {
  switch (action) {
    case 'nop':
      return i + 1;
    case 'acc':
      accu += distance;
      return i + 1;
    case 'jmp':
      return i + distance;
  }
}

const reset = () => {
  currentModify = 0;
  index = 0;
  accu = 0;
  history = [0];
}

const getResult = (data) => {

  for (let i = 0; i < data.length; i = index) {
    const item = data[i];
    parseInput(item);

    //Change action
    if (action === 'jmp' || action === 'nop') {
      currentModify++;
      if (currentModify === modify) {
        action === 'jmp' ? action = 'nop' : action = 'jmp';
      }
    }

    index = getNextIndex(i);

    if (index >= data.length) {
      console.log('finished! ', accu);
    }

    if (history.indexOf(index) > 0) {
      modify++;
      reset();
    } else {
      history.push(index);
    }

  }
  console.log('result: ', accu);
}

getResult(data.data);

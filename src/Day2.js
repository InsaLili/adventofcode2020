const data = require("../data/day2.json");

let startRange = 0;
let endRange = 0;
let keyword = '';
let password = '';

const getRange = (input) => {
  const separateByDash = input.split('-');
  startRange = separateByDash[0];
  const separateBySpace = separateByDash[1].split(' ');
  endRange = separateBySpace[0];

  keyword = separateBySpace[1].charAt(0);

  password = separateBySpace[2];
}

const isValidPassword = (input) => {
  getRange(input);
  const showsTimes = password.split(keyword).length - 1;
  if (showsTimes >= startRange && showsTimes <= endRange) {
    return true;
  }
  return false;
}

//Part 1
const getValidPasswordNumber = (passwords) => {
  let result = 0;
  passwords.forEach(element => {
    if (isValidPassword(element)) result++;
  });
  console.log('result: ', result);
}

// getValidPasswordNumber(data.data);


//Part 2

const isValidPasswordPart2 = (input) => {
  getRange(input);
  console.log(startRange, endRange, keyword, password);
  if (password.charAt(startRange - 1) === keyword) {
    if (password.charAt(endRange - 1) !== keyword) return true;
  } else {
    if (password.charAt(endRange - 1) === keyword) return true;
  }

  return false;
}

const getValidPasswordPart2 = (passwords) => {
  let result = 0;
  passwords.forEach(element => {
    if (isValidPasswordPart2(element)) result++;
  });
  console.log('result: ', result);
}


getValidPasswordPart2(data.data);

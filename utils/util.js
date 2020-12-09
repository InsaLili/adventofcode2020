export const toNumbers = (stringArray) => stringArray.map(string => parseInt(string));

export const getMin = (input) => {
  let min = input[0];
  for (let i = 1; i < input.length; i++) {
    if (input[i] < min) {
      min = input[i];
    }
  }
  return min;
}

export const getMax = (input) => {
  let min = input[0];
  for (let i = 1; i < input.length; i++) {
    if (input[i] > min) {
      min = input[i];
    }
  }
  return min;
}

const data = require('../data/day10.json');
const input = data.data.map(string => parseInt(string)).sort((a, b) => a - b);

//Part 1
const part1 = (inputData) => {
  let diff1 = 0;
  let diff3 = 0;

  for (let i = 0; i < inputData.length; i++) {
    if (input[i + 1] - input[i] === 1) diff1++;
    if (input[i + 1] - input[i] === 3) diff3++;
  }
  diff3++;
  console.log("part 1: ", diff1 * diff3);
}
// part1(input);


//Part 2 dynamic programming
const dp = [];
input.forEach((x, i) => {
  dp[i] = 0;

  let j = i - 1;
  while (j >= 0 && x - input[j] <= 3) {
    dp[i] += dp[j];
    j--;
  }

  if (x <= 3) dp[i]++;
});

console.log(dp[input.length - 1]);

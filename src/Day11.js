const data = require('./data')();
const parseInput = () => data.map(item => item.split(""));
const updateSeat = (d, row, col, c) => {
  let seat = d[row][col];
  if (seat === '.') return { seat, c };

  let n = 0;
  [-1, 0, 1].forEach(dr => {
    [-1, 0, 1].forEach(dc => {
      let nr = row + dr;
      let nc = col + dc;
      if (!(dr === dc && dr === 0)) {
        //Part 1
        // if (nr >= 0 && nr < d.length && nc >= 0 && nc < d[row].length) {
        //   if (d[nr][nc] === '#') {
        //     n++;
        //     if (n >= 4 && seat === '#') {
        //       seat = 'L';
        //       c++;
        //       return;
        //     }
        //   }
        // }

        //Part 2
        while (nr >= 0 && nr < d.length && nc >= 0 && nc < d[row].length) {
          if (dr === dc && dr === 0) break;
          if (d[nr][nc] === '#') {
            n++;
            break;
          }
          if (d[nr][nc] === 'L') break;
          nr += dr;
          nc += dc;
        }
        if (n >= 5 && seat === '#') {
          seat = 'L';
          c++;
          return;
        }
      };
    })
  });

  if (seat === 'L' && n === 0) return { seat: '#', c: c + 1 };
  return { seat, c };
}

const result = () => {
  const input = parseInput(data.data);

  const changeSeat = (inputData) => {
    let inLoop = true;
    let changedTime;
    let beforeChange = inputData
    const afterChange = [];

    while (inLoop) {
      changedTime = 0;
      for (let i = 0; i < beforeChange.length; i++) {
        afterChange[i] = [];
        for (let j = 0; j < beforeChange[i].length; j++) {
          const update = updateSeat(beforeChange, i, j, changedTime);
          afterChange[i][j] = update.seat;
          changedTime = update.c;
        }
      }
      if (changedTime === 0) {
        inLoop = false;
      }
      beforeChange = [...afterChange];
    }
    return afterChange;
  }

  const printSeatNumber = (inputData) => {
    let result = 0;
    for (let i = 0; i < inputData.length; i++) {
      for (let j = 0; j < inputData[i].length; j++) {
        if (inputData[i][j] === '#') result++;
      }
    }
    return result;
  }

  console.log('result: ', printSeatNumber(changeSeat(input)));
}

result();

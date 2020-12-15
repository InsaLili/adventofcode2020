const data = require('./data')();
const directions = ['E', 'S', 'W', 'N'];

//Part 1
const solve1 = () => {
  const current = { d: 'E', e: 0, n: 0 };

  const next = (step) => {
    const direction = step.charAt(0);
    const distance = parseInt(step.substring(1));

    const defaultMove = (d) => {
      switch (d) {
        case 'N':
          current.n += distance;
          break;
        case 'S':
          current.n -= distance;
          break;
        case 'E':
          current.e += distance;
          break;
        case 'W':
          current.e -= distance;
      }
    }

    switch (direction) {
      case 'L':
        let lIndex = (directions.indexOf(current.d) - distance / 90) % 4;
        current.d = lIndex >= 0 ? directions[lIndex] : directions[lIndex + 4];
        break;
      case 'R':
        let rIndex = (directions.indexOf(current.d) + distance / 90) % 4;
        current.d = directions[rIndex];
        break;
      case 'F':
        defaultMove(current.d);
        break;
      default:
        defaultMove(direction);
        break;
    }
  }

  data.forEach(i => next(i));
  console.log('part 1: ', Math.abs(current.e) + Math.abs(current.n));
}

const solve2 = () => {
  const ship = { d: 'E', e: 0, n: 0 };
  let wp = { e: 10, n: 1 };

  const next = (step) => {
    const direction = step.charAt(0);
    const distance = parseInt(step.substring(1));

    switch (direction) {
      case 'N':
        wp.n += distance;
        break;
      case 'S':
        wp.n -= distance;
        break;
      case 'E':
        wp.e += distance;
        break;
      case 'W':
        wp.e -= distance;
      case 'L':
        const l = distance / 90 % 4;
        if (l === 1) {
          wp = { e: -wp.n, n: wp.e }
        } else if (l === 2) {
          wp = { e: -wp.e, n: -wp.n }
        } else if (l === 3) {
          wp = { e: wp.n, n: -wp.e }
        }
        break;
      case 'R':
        const r = distance / 90 % 4;
        if (r === 1) {
          wp = { e: wp.n, n: -wp.e }
        } else if (r === 2) {
          wp = { e: -wp.e, n: -wp.n }
        } else if (r === 3) {
          wp = { e: -wp.n, n: wp.e }
        }
        break;
      case 'F':
        ship.n += wp.n * distance;
        ship.e += wp.e * distance;
        break;
    }
  }
  data.forEach(i => next(i));
  console.log('part 2: ', Math.abs(ship.e) + Math.abs(ship.n));
}

solve2();
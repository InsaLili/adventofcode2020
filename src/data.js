const { dir } = require('console');

module.exports = () => {
  const fs = require('fs');
  const path = require('path');

  const dirPath = path.dirname(__filename).replace('src', 'data');
  const filePath = path.resolve(dirPath, 'day12.txt');
  return fs.readFileSync(filePath).toString().split('\n');
}

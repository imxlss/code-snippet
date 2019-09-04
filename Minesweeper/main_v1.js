// 单元格对象
let Cell = function (row, column, opened = false, flagged = false, mined = false, neighborMineCount = 0) {
  this.id = `${row}${column}`;
  this.row = row;
  this.column = column;
  this.opened = opened;
  this.flagged = flagged;
  this.mined = mined;
  this.neighborMineCount = neighborMineCount;
}


Cell.prototype.getNeighbors = function (id) {
  let neighbors = [];

  let row = parseInt(id[0]);
  let column = parseInt(id[1]);

  neighbors.push(`${row - 1}${column - 1}`);
  neighbors.push(`${row - 1}${column}`);
  neighbors.push(`${row - 1}${column + 1}`);
  neighbors.push(`${row}${column - 1}`);
  neighbors.push(`${row}${column + 1}`);
  neighbors.push(`${row + 1}${column - 1}`);
  neighbors.push(`${row + 1}${column}`);
  neighbors.push(`${row + 1}${column + 1}`);

  return neighbors.filter(item => item.length === 2);
}

let Board = function (boardSize, mineCount) {
  this.boardSize = boardSize;
  this.mineCount = mineCount;
  this.cellList = {};
}

Board.prototype.init = function () {
  for (let row = 0; row < this.boardSize; row++) {
    for (let column = 0; column < this.boardSize; column++) {
      this.cellList[`${row}${column}`] = new Cell(row, column);
    }
  }
};

/**
 * 随机放置地雷
 */
Board.prototype.randomlyAssignMines = function () {

  let getRandomInteger = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  let mineCooridinates = [];
  for (let i = 0; i < this.mineCount; i++) {
    let randomRowCoordinate = getRandomInteger(0, this.boardSize);
    let randomColumnCoordinate = getRandomInteger(0, this.boardSize);

    let cell = randomRowCoordinate + '' + randomColumnCoordinate;

    while (mineCooridinates.includes(cell)) {
      randomRowCoordinate = getRandomInteger(0, this.boardSize);
      randomColumnCoordinate = getRandomInteger(0, this.boardSize);
      cell = randomRowCoordinate + '' + randomColumnCoordinate;
    }

    mineCooridinates.push(cell);
    this.cellList[cell].mined = true;
  }
}

Board.prototype.calculateNeighborMineCounts = function () {
  let cell;
  let neighborMineCount = 0;

  for (let row = 0; row < this.boardSize; row++) {
    for (let column = 0; column < this.boardSize; column++) {
      let id = row + "" + column;
      cell = this.cellList[id];
      if (!cell.mined) {
        let neighbors = cell.getNeighbors(id);
        neighborMineCount = 0;
        for (let i = 0; i < neighbors.length; i++) {
          neighborMineCount += this.isMined(neighbors[i]);
        }
        cell.neighborMineCount = neighborMineCount;
      }
    }
  }
}

/**
 * 查看是否有地雷
 */
Board.prototype.isMined = function (id) {
  let mined = 0;

  let cell = this.cellList[id];
  if (typeof cell !== 'undefined') {
    mined = cell.mined ? 1 : 0;
  }
  return mined;
}

let board = new Board(4, 5);
board.init();
board.randomlyAssignMines();
board.calculateNeighborMineCounts();
console.table(board.cellList);

// 单元格对象
class Cell {
  constructor(row, column, opened = false, flagged = false, mined = false, neighborMineCount = 0) {
    this.id = `${row}|${column}`;
    this.row = row;
    this.column = column;
    this.opened = opened;
    this.flagged = flagged;
    this.mined = mined;
    this.neighborMineCount = neighborMineCount;
    this.neighbors = [];
  }
  getNeighbors(boardSize) {
    let neighbors = [];
    neighbors.push(`${this.row - 1}|${this.column - 1}`);
    neighbors.push(`${this.row - 1}|${this.column}`);
    neighbors.push(`${this.row - 1}|${this.column + 1}`);
    neighbors.push(`${this.row}|${this.column - 1}`);
    neighbors.push(`${this.row}|${this.column + 1}`);
    neighbors.push(`${this.row + 1}|${this.column - 1}`);
    neighbors.push(`${this.row + 1}|${this.column}`);
    neighbors.push(`${this.row + 1}|${this.column + 1}`);
    this.neighbors = neighbors.filter(item => {
      let cooridinates = item.split('|');
      let row = cooridinates[0], column = cooridinates[1];
      return row >= 0 && column >= 0 && column < boardSize && row < boardSize;
    });
  }
}



class Board {
  constructor(boardSize, mineCount) {
    this.boardSize = boardSize;
    this.mineCount = mineCount;
    this.cellList = {};
  }
  init() {
    for (let row = 0; row < this.boardSize; row++) {
      for (let column = 0; column < this.boardSize; column++) {
        this.cellList[`${row}|${column}`] = new Cell(row, column);
        this.cellList[`${row}|${column}`].getNeighbors(this.boardSize);
      }
    }
  }
  /**
   * 随机放置地雷
   */
  randomlyAssignMines() {
    let mineCooridinates = [];
    for (let i = 0; i < this.mineCount; i++) {
      let randomRowCoordinate = this.getRandomInteger(0, this.boardSize);
      let randomColumnCoordinate = this.getRandomInteger(0, this.boardSize);
      let cellId = `${randomRowCoordinate}|${randomColumnCoordinate}`;
      while (mineCooridinates.includes(cellId)) {
        randomRowCoordinate = this.getRandomInteger(0, this.boardSize);
        randomColumnCoordinate = this.getRandomInteger(0, this.boardSize);
        cellId = `${randomRowCoordinate}|${randomColumnCoordinate}`;
      }
      mineCooridinates.push(cellId);
      console.log(cellId);
      this.cellList[cellId].mined = true;
    }
  }
  getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  calculateNeighborMineCounts() {
    let cell;
    let neighborMineCount = 0;
    for (let row = 0; row < this.boardSize; row++) {
      for (let column = 0; column < this.boardSize; column++) {
        cell = this.cellList[`${row}|${column}`];
        if (cell.mined === false) {
          neighborMineCount = 0;
          for (let i = 0; i < cell.neighbors.length; i++) {
            neighborMineCount += this.isMined(cell.neighbors[i]);
          }
          cell.neighborMineCount = neighborMineCount;
        }
      }
    }
  }
  /**
   * 查看是否有地雷
   */
  isMined(id) {
    let mined = 0;
    let cell = this.cellList[id];
    if (typeof cell !== 'undefined') {
      mined = cell.mined ? 1 : 0;
    }
    return mined;
  }
}






let board = new Board(3, 3);
board.init();
board.randomlyAssignMines();
board.calculateNeighborMineCounts();
console.table(board.cellList);

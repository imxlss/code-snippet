// 表示单元格
function Cell(row, column, opened, flagged, mined, neighborMineCount) {
  return {
    id: `${row}${column}`,
    row,
    column,
    opened,
    flagged,
    mined,
    neighborMineCount
  }
}

function Board(boardSize, mineCount) {
  let board = {};
  for (let row = 0; row < boardSize; row++) {
    for (let column = 0; column < boardSize; column++) {
      board[`${row}${column}`] = Cell(row, column, false, false, false, 0);
    }
  }
  board = randomlyAssignMines(board, boardSize, mineCount);
  board = calculateNeighborMineCounts(board, boardSize);

  return board;

}

console.table(Board(4, 8));

/**
 * 随机放置地雷
 * @param {Board} board Board对象
 * @param {number} mineCount 地雷数
 */
function randomlyAssignMines(board, boardSize, mineCount) {
  let mineCooridinates = [];
  for (let i = 0; i < mineCount; i++) {
    let randomRowCoordinate = getRandomInteger(0, boardSize);
    let randomColumnCoordinate = getRandomInteger(0, boardSize);

    let cell = randomRowCoordinate + '' + randomColumnCoordinate;

    while (mineCooridinates.includes(cell)) {
      randomRowCoordinate = getRandomInteger(0, boardSize);
      randomColumnCoordinate = getRandomInteger(0, boardSize);
      cell = randomRowCoordinate + '' + randomColumnCoordinate;
    }

    mineCooridinates.push(cell);
    board[cell].mined = true;
  }
  return board;
}

// 生成随机数
function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// 计算相邻地雷数
function calculateNeighborMineCounts(board, boardSize) {
  let cell;
  let neighborMineCount = 0;
  for (let row = 0; row < boardSize; row++) {
    for (let column = 0; column < boardSize; column++) {
      let id = row + "" + column;
      cell = board[id];
      if (!cell.mined) {
        let neighbors = getNeighbors(id);
        neighborMineCount = 0;
        for (let i = 0; i < neighbors.length; i++) {
          neighborMineCount += isMined(board, neighbors[i]);
        }
        cell.neighborMineCount = neighborMineCount;
      }
    }
  }
  return board;
}

function getNeighbors(id) {
  var row = parseInt(id[0]);
  var column = parseInt(id[1]);
  var neighbors = [];
  neighbors.push((row - 1) + "" + (column - 1));
  neighbors.push((row - 1) + "" + column);
  neighbors.push((row - 1) + "" + (column + 1));
  neighbors.push(row + "" + (column - 1));
  neighbors.push(row + "" + (column + 1));
  neighbors.push((row + 1) + "" + (column - 1));
  neighbors.push((row + 1) + "" + column);
  neighbors.push((row + 1) + "" + (column + 1));

  for (var i = 0; i < neighbors.length; i++) {
    if (neighbors[i].length > 2) {
      neighbors.splice(i, 1);
      i--;
    }
  }

  return neighbors
}


function isMined(board, id) {
  var cell = board[id];
  var mined = 0;
  if (typeof cell !== 'undefined') {
    mined = cell.mined ? 1 : 0;
  }
  return mined;
}

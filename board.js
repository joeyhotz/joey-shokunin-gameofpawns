const { newBoard, returnRowSpotsDisplay } = require("./utils");

const newLine = "\n";
const emptyString = "";

class Board {
  constructor() {
    this.grid = newBoard();
  }

  getSpot(coords) {
    return this.grid[coords.y][coords.x];
  }

  setSpot(piece, coords) {
    this.grid[coords.y][coords.x] = piece;
  }

  isValidSpotForPiece(piece, coords) {
    return this.isFreeSpot(coords) && piece.canBePlaced(this.grid, coords);
  }

  isFreeSpot(coords) {
    return this.getSpot(coords) === null;
  }

  setPieceDown(piece, coords) {
    this.setSpot(piece, coords);
    piece.markPlaced(coords);
  }

  stringify() {
    let boardString = emptyString;
    for (let y = 0; y < this.grid.length; y++) {
      const row = this.grid[y];
      boardString += returnRowSpotsDisplay(row) + newLine;
    }
    return boardString;
  }
}

module.exports = Board;

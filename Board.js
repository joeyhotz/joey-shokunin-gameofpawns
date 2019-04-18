const { newBoard } = require("./utils");

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
}

module.exports = Board;

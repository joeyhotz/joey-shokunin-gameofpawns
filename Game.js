const { getCoords, newBoard } = require("./utils");

class Game {
  constructor(pieces) {
    this.board = newBoard();
    this.pieces = pieces;
  }

  placeAllPieces() {
    this.pieces.forEach(piece => this.placePiece(piece));
  }

  placePiece(piece) {
    do {
      let xy = getCoords();
      if (this.isValidSpot(piece, xy.x, xy.y)) {
        this.setPiece(piece, xy.x, xy.y);
      }
      xy = getCoords();
    } while (!this.isPlaced(piece));
  }

  isPlaced(piece) {
    return !this.board.every(row => row.every(spot => spot !== piece));
  }

  isValidSpot(piece, x, y) {
    return this.isFreeSpot(x, y) && piece.canBePlaced(this.board, x, y);
  }

  isFreeSpot(x, y) {
    return this.board[x][y] === null;
  }

  setPiece(piece, x, y) {
    this.board[x][y] = piece;
  }

  outputBoard() {
    return this.board.map(row =>
      row.map(spot => (spot ? spot.getName() : "."))
    );
  }

  displayBoard() {
    console.log(this.outputBoard());
  }
}

module.exports = Game;

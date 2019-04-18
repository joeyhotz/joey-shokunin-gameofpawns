const { newBoard } = require("./utils");
const newLine = "\n";
const emptyString = "";

class Board {
  constructor() {
    this.board = newBoard();
  }

  getSpot(coords) {
    return this.board[coords.y][coords.x];
  }

  setSpot(piece, coords) {
    this.board[coords.y][coords.x] = piece;
  }

  isValidSpotForPiece(piece, coords) {
    return this.isFreeSpot(coords) && piece.canBePlaced(this.board, coords);
  }

  isFreeSpot(coords) {
    return this.getSpot(coords) === null;
  }

  setPieceDown(piece, coords) {
    this.setSpot(piece, coords);
    piece.markPlaced(coords);
  }

  stringifyBoard() {
    let boardString = emptyString;
    for (let y = 0; y < this.board.length; y++) {
      const row = this.board[y];
      boardString += this.returnRowSpotsDisplay(row) + newLine;
    }
    return boardString;
  }

  returnRowSpotsDisplay(row) {
    let string = "";
    for (let x = 0; x < row.length; x++) {
      string += this.returnSpotDisplay(row[x]);
    }
    return string;
  }

  returnSpotDisplay(spot) {
    const spotDisplay = spot ? spot.getName() : ".";
    return ` ${spotDisplay} `;
  }
}

module.exports = Board;

const { newBoard } = require("./utils");
const newLine = "\n";
const emptyString = "";

class Board {
  constructor() {
    this.board = newBoard();
  }

  isValidSpotForPiece(piece, coords) {
    return this.isFreeSpot(coords) && piece.canBePlaced(this.board, coords);
  }

  isFreeSpot(coords) {
    return this.board[coords.x][coords.y] === null;
  }

  setPieceDown(piece, coords) {
    this.board[coords.x][coords.y] = piece;
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
    return spot !== null ? ` ${spot.getName()} ` : " . ";
  }
}

module.exports = Board;

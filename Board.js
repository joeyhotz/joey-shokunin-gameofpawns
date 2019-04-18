const { newBoard } = require("./utils");
const newLine = "\n";

class Board {
  constructor() {
    this.board = newBoard();
  }

  isPiecePlaced(piece) {
    return !this.board.every(row => row.every(spot => spot !== piece));
  }

  isValidSpotForPiece(piece, x, y) {
    return this.isFreeSpot(x, y) && piece.canBePlaced(x, y);
  }

  isFreeSpot(x, y) {
    return this.board[x][y] === null;
  }

  placePiece(piece, x, y) {
    this.board[x][y] = piece;
    piece.markPlaced(x, y);
  }

  stringifyBoard() {
    let boardString = "";
    for (let y = 0; y < this.board.length; y++) {
      const row = this.board[y];
      boardString += this.returnRowSpotsDisplay(row);
      boardString += newLine;
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

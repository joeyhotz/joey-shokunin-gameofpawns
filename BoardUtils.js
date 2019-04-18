const newLine = "\n";

class BoardUtils {
  constructor() {}

  isPiecePlaced(board, piece) {
    return !board.every(row => row.every(spot => spot !== piece));
  }

  isValidSpotForPiece(board, piece, x, y) {
    return this.isFreeSpot(board, x, y) && piece.canBePlaced(board, x, y);
  }

  isFreeSpot(board, x, y) {
    return board[x][y] === null;
  }

  placePiece(board, piece, x, y) {
    board[x][y] = piece;
    piece.markPlaced(x, y);
  }

  stringifyBoard(board) {
    let boardString = "";
    for (let y = 0; y < board.length; y++) {
      const row = board[y];
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

module.exports = new BoardUtils();

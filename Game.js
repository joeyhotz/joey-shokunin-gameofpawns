class Game {
  constructor() {
    this.board = this.newBoard();
  }

  isPlaced(piece) {
    return !this.board.every(row => row.every(spot => spot !== piece));
  }

  isValidSpot(x, y) {
    return isFreeSpot(x, y);
  }

  isFreeSpot(x, y) {
    return this.board[x][y] === null;
  }

  placePiece(piece, x, y) {
    this.board[x][y] = piece;
  }

  newBoard() {
    return new Array(8).fill(null).map(() => new Array(8).fill(null));
  }

  outputBoard() {
    const displayBoardArray = this.board.map(row =>
      row.map(spot => (spot ? spot.getName() : "."))
    );
    console.log(displayBoardArray);
  }
}

module.exports = Game;

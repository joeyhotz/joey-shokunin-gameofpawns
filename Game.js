const { generateCoords, newBoard } = require("./utils");
const Board = require("./Board");

class Game {
  constructor(pieces) {
    this.board = new Board();
    this.pieces = pieces;
  }

  placeAllPieces() {
    this.pieces.forEach(piece => this.performPlacePiece(piece));
  }

  performPlacePiece(piece) {
    do {
      const newCoords = generateCoords();
      if (this.board.isValidSpotForPiece(piece, newCoords.x, newCoords.y)) {
        this.board.placePiece(piece, newCoords.x, newCoords.y);
      }
    } while (!this.board.isPiecePlaced(piece));
  }

  outputBoard() {
    const boardString = this.board.stringifyBoard();
    console.log(boardString);
  }

  getBoard() {
    return this.board;
  }
}

module.exports = Game;

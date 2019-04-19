const { generateCoords, stringifyBoard } = require("./utils");
const Board = require("./board");

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
      this.placePiece(piece, newCoords);
    } while (!piece.isPlaced());
  }

  placePiece(piece, coords) {
    if (this.board.isValidSpotForPiece(piece, coords)) {
      this.board.setPieceDown(piece, coords);
    }
  }

  outputGrid() {
    console.log(stringifyBoard(this.board));
  }
}

module.exports = Game;

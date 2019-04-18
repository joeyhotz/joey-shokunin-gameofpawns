const { generateCoords, newBoard } = require("./utils");
const GameUtils = require("./GameUtils");

class Game {
  constructor(pieces) {
    this.board = newBoard();
    this.pieces = pieces;
  }

  placeAllPieces() {
    this.pieces.forEach(piece => this.performPlacePiece(piece));
  }

  performPlacePiece(piece) {
    do {
      const newCoords = generateCoords();
      if (
        GameUtils.isValidSpotForPiece(
          this.board,
          piece,
          newCoords.x,
          newCoords.y
        )
      ) {
        GameUtils.placePiece(this.board, piece, newCoords.x, newCoords.y);
      }
    } while (!GameUtils.isPiecePlaced(this.board, piece));
  }

  outputBoard() {
    console.log(GameUtils.stringifyBoard(this.board));
  }

  getBoard() {
    return this.board;
  }
}

module.exports = Game;

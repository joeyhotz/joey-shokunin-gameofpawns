const { generateCoords, newBoard } = require("./utils");
const BoardUtils = require("./BoardUtils");

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
        BoardUtils.isValidSpotForPiece(
          this.board,
          piece,
          newCoords.x,
          newCoords.y
        )
      ) {
        BoardUtils.placePiece(this.board, piece, newCoords.x, newCoords.y);
      }
    } while (!BoardUtils.isPiecePlaced(this.board, piece));
  }

  outputBoard() {
    const boardString = BoardUtils.stringifyBoard(this.board);
    console.log(boardString);
  }

  getBoard() {
    return this.board;
  }
}

module.exports = Game;

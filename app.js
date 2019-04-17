const Game = require("./Game");
const Piece = require("./Piece");

const { ifNotAdjacentToKing } = require("./rules");

const main = () => {
  const king1 = new Piece([ifNotAdjacentToKing], "K");
  const king2 = new Piece([ifNotAdjacentToKing], "k");
  const pieces = [king1, king2];

  const game = new Game(pieces);

  game.placeAllPieces();

  game.displayBoard();
};

main();

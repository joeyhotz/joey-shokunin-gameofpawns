const Game = require("./Game");
const Piece = require("./Piece");

const main = () => {
  const king1 = new Piece("K");
  const king2 = new Piece("k");

  const pieces = [king1, king2];

  const game = new Game(pieces);
  game.placeAllPieces();

  game.outputBoard();
};

main();

const Game = require("./Game");
const Piece = require("./Piece");

const { getCoords } = require("./utils");

const main = () => {
  const game = new Game();
  const alwaysTrue = () => true;

  const king = new Piece([alwaysTrue], "K");

  let coords = getCoords();

  while (!game.isPlaced(king)) {
    if (king.canBePlaced(game, coords.x, coords.y)) {
      game.placePiece(king, coords.x, coords.y);
    }
    coords = getCoords();
  }

  game.outputBoard();
};

main();

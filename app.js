const Game = require("./Game");

const main = () => {
  const game = new Game();
  game.placeAllPieces();
  game.outputBoard();
};

main();

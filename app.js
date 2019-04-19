const Game = require("./Game");

const main = () => {
  const args = process.argv.slice(2);

  const game = new Game();
  game.placeAllPieces();
  if (args[0] === "--grid") {
    game.outputGrid();
    return;
  }

  console.log("Please add '--grid' as an argument.");
};

main();

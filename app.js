const Game = require("./game");

const main = () => {
  const args = process.argv.slice(2);
  const displayType = args[0];

  const game = new Game();
  game.placeAllPieces();

  if (displayType === "--grid") {
    game.outputGrid();
    return;
  }

  console.log("Please add '--grid' as an argument.");
};

main();

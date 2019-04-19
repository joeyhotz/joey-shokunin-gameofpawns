const Game = require("./game");
const { getDisplayTypeFromArgs } = require("./utils");

const main = () => {
  const game = new Game();
  game.placeAllPieces();

  const displayType = getDisplayTypeFromArgs();

  if (displayType === "--grid") {
    game.outputGrid();
    return;
  }

  console.log("Please add '--grid' as an argument.");
};

main();

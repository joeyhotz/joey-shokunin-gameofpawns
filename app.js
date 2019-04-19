const Game = require("./game");
const { generatePieces } = require("./utils");

const main = () => {
  const args = process.argv.slice(2);

  const pieces = generatePieces();
  const game = new Game(pieces);
  game.placeAllPieces();

  if (args[0] === "--grid") {
    game.outputGrid();
    return;
  }

  console.log("Please add '--grid' as an argument.");
};

main();

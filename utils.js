const newLine = "\n";
const emptyString = "";

const generatePieces = () => {
  const Piece = require("./Piece");
  const kingW = new Piece("k", "w");
  const kingB = new Piece("k", "b");
  const pawnsW = [1, 2, 3, 4, 5, 6, 7, 8].map(() => new Piece("p", "w"));
  const pawnsB = [1, 2, 3, 4, 5, 6, 7, 8].map(() => new Piece("p", "b"));
  const pawns = [...pawnsW, ...pawnsB];
  const pieces = [kingW, kingB, ...pawns];
  return pieces;
};

const randomNum0To7 = () => {
  return Math.floor(Math.random() * 7);
};

const generateCoords = () => {
  return { x: randomNum0To7(), y: randomNum0To7() };
};

const newBoard = () => {
  return new Array(8).fill(null).map(() => new Array(8).fill(null));
};

const getAdjacentSpots = coords => {
  const spots = [
    { x: coords.x - 1, y: coords.y },
    { x: coords.x + 1, y: coords.y },
    { x: coords.x, y: coords.y + 1 },
    { x: coords.x, y: coords.y - 1 }
  ];
  return filterOutSpotsOffTheBoard(spots);
};

const stringifyBoard = board => {
  const grid = board.grid;
  let boardString = emptyString;
  for (let y = 0; y < grid.length; y++) {
    const row = grid[y];
    boardString += returnRowSpotsDisplay(row) + newLine;
  }
  return boardString;
};

const returnRowSpotsDisplay = row => {
  let string = "";
  for (let x = 0; x < row.length; x++) {
    string += returnSpotDisplay(row[x]);
  }
  return string;
};

const returnSpotDisplay = spot => {
  const spotDisplay = spot ? spot.getName() : ".";
  return ` ${spotDisplay} `;
};

const filterOutSpotsOffTheBoard = spots => {
  return spots.filter(spot => spot.x >= 0 && spot.x <= 7 && spot.y >= 0 && spot.y <= 7);
};

module.exports = {
  generateCoords,
  newBoard,
  getAdjacentSpots,
  generatePieces,
  stringifyBoard
};

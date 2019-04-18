const { getAdjacentSpots } = require("./utils");

const ifNotAdjacentToKing = (board, x, y) => {
  const adjacentSpots = getAdjacentSpots({ x, y });
  return true;
};

const kingIsAdjacent = coords => {};

module.exports = { ifNotAdjacentToKing };

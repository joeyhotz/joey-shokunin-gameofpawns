const { getAdjacentSpots } = require("./utils");

const ifNotAdjacentToKing = (board, coords) => {
  const adjacentSpots = getAdjacentSpots(coords);
  return true;
};

module.exports = { ifNotAdjacentToKing };

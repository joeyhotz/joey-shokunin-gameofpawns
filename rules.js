const { getAdjacentSpots } = require("./utils");

const ifNotAdjacentToKing = (board, coords) => {
  const adjacentSpots = getAdjacentSpots(coords);
  const kingInAnyAdjacentSpots = adjacentSpots.some(spot => {
    const spotContents = board[spot.x][spot.y];
    return spotContents && spotContents.getName().toLowerCase() === "k";
  });
  return !kingInAnyAdjacentSpots;
};

module.exports = { ifNotAdjacentToKing };

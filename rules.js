const { getAdjacentSpots } = require("./utils");

const ifSpotNotAdjacentToKing = (board, coords) => {
  const notAdjacentToKing = !ifSpotAdjacentToPiece("k", board, coords);
  return notAdjacentToKing;
};

const ifNotInPromotionRank = (_, coords) => {
  const inTopRow = coords.y === 0;
  const inBottomRow = coords.y === 7;
  return !inTopRow && !inBottomRow;
};

const RulesFor = {
  k: [ifSpotNotAdjacentToKing],
  p: [ifNotInPromotionRank]
};

const ifSpotAdjacentToPiece = (piece, board, coords) => {
  const adjacentSpots = getAdjacentSpots(coords);
  return isPieceAdjacent(piece, adjacentSpots, board);
};

const isPieceAdjacent = (piece, adjacentSpots, board) => {
  return adjacentSpots.some(adjacentSpot => {
    const spotContents = board[adjacentSpot.y][adjacentSpot.x];
    const pieceIsAdjacent = spotContents && spotContents.getType() === piece;
    return pieceIsAdjacent;
  });
};

module.exports = { RulesFor };

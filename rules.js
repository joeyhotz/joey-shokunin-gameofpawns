const { getAdjacentSpots, isInRow } = require("./utils");

const ifSpotNotAdjacentToKing = (board, coords, _) => {
  const notAdjacentToKing = !ifSpotAdjacentToPiece("k", board, coords);
  return notAdjacentToKing;
};

const ifNotInPromotionRank = (_, coords, piece) => {
  const inPromotionRank = piece.isWhite() ? isInRow(0, coords) : isInRow(7, coords);
  return !inPromotionRank;
};

const RulesFor = {
  k: [ifSpotNotAdjacentToKing],
  p: [ifNotInPromotionRank],
  r: [],
  n: [],
  b: [],
  q: []
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

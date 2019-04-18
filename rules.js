const { getAdjacentSpots } = require("./utils");

const ifSpotNotAdjacentToKing = (board, coords) => {
  const notAdjacentToKing = !ifSpotAdjacentToPiece("k", board, coords);
  return notAdjacentToKing;
};

const RulesFor = {
  k: [ifSpotNotAdjacentToKing]
};

const ifSpotAdjacentToPiece = (piece, board, coords) => {
  const adjacentSpots = getAdjacentSpots(coords);
  return isPieceAdjacent(piece, adjacentSpots, board);
};

const isPieceAdjacent = (piece, adjacentSpots, board) => {
  return adjacentSpots.some(adjacentSpot => {
    const spotContents = board[adjacentSpot.x][adjacentSpot.y];
    const pieceIsAdjacent = spotContents && spotContents.getPieceType() === piece;
    return pieceIsAdjacent;
  });
};

module.exports = { RulesFor };

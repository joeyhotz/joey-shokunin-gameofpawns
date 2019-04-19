const { ifSpotAdjacentToPiece, isInRow } = require("./utils");

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

module.exports = { RulesFor };

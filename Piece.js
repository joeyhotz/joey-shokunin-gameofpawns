const { RulesFor } = require("./rules");

class Piece {
  constructor(displayName) {
    this.placeRules = RulesFor[displayName.toLowerCase()];
    this.displayName = displayName;
    this.placed = false;
    this.coords = null;
  }

  canBePlaced(board, coords) {
    return this.placeRules.map(ruleFunction => ruleFunction(board, coords)).every(val => val);
  }

  getName() {
    return this.displayName;
  }

  getPieceType() {
    return this.displayName.toLowerCase();
  }

  markPlaced(coords) {
    this.placed = true;
    this.coords = coords;
  }

  isPlaced() {
    return this.placed;
  }
}

module.exports = Piece;

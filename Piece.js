class Piece {
  constructor(rules, displayName) {
    this.placeRules = rules;
    this.displayName = displayName;
    this.placed = false;
    this.coords = null;
  }

  canBePlaced(board, coords) {
    return this.placeRules
      .map(ruleFunction => ruleFunction(board, coords))
      .every(val => val);
  }

  getName() {
    return this.displayName;
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

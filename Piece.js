class Piece {
  constructor(rules, displayName) {
    this.placeRules = rules;
    this.displayName = displayName;
    this.placed = false;
    this.coords = null;
  }

  canBePlaced(board, x, y) {
    return this.placeRules
      .map(ruleFunction => ruleFunction(board, x, y))
      .every(val => val);
  }

  getName() {
    return this.displayName;
  }

  markPlaced(x, y) {
    this.placed = true;
    this.coords = { x, y };
  }

  isPlaced() {
    return this.placed;
  }
}

module.exports = Piece;

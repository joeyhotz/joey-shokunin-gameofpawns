class Piece {
  constructor(rules, displayName) {
    this.placeRules = rules;
    this.displayName = displayName;
  }

  canBePlaced(board, x, y) {
    return this.placeRules
      .map(ruleFunction => ruleFunction(board, x, y))
      .every(val => val);
  }

  getName() {
    return this.displayName;
  }
}

module.exports = Piece;

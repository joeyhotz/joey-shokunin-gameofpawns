class Piece {
  constructor(rules, displayName) {
    this.placeRules = rules;
    this.displayName = displayName;
  }

  addPlaceRule(rule) {
    this.placeRules.push(rule);
  }

  canBePlaced(board, x, y) {
    return this.placeRules
      .map(ruleFunction => ruleFunction(board, x, y))
      .every(val => val);
  }

  place(game, x, y) {
    game.placePiece(this.displayName, x, y);
  }

  getName() {
    return this.displayName;
  }
}

module.exports = Piece;

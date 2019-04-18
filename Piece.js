const { RulesFor } = require("./rules");

class Piece {
  constructor(type, color) {
    this.placeRules = RulesFor[type];
    this.type = type;
    this.color = color;
    this.placed = false;
    this.coords = null;
  }

  canBePlaced(board, coords) {
    const results = this.placeRules.map(ruleFunction => ruleFunction(board, coords));
    return results.every(val => val);
  }

  getType() {
    return this.type;
  }

  getName() {
    const isWhite = this.color === "w";
    return isWhite ? this.getType().toUpperCase() : this.getType();
  }

  getColor() {
    return this.color;
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

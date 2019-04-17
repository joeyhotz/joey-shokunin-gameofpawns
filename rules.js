const ifNotAdjacentToKing = (board, x, y) => {
  if (
    x < 7 &&
    board[x + 1][y] &&
    board[x + 1][y].getName().toLowerCase() === "k"
  ) {
    return false;
  }
  if (
    x > 0 &&
    board[x - 1][y] &&
    board[x - 1][y].getName().toLowerCase() === "k"
  ) {
    return false;
  }
  if (
    y > 0 &&
    board[x][y - 1] &&
    board[x][y - 1].getName().toLowerCase() === "k"
  ) {
    return false;
  }
  if (
    y < 7 &&
    board[x][y + 1] &&
    board[x][y + 1].getName().toLowerCase() === "k"
  ) {
    return false;
  }
  return true;
};

module.exports = { ifNotAdjacentToKing };

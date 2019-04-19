const newLine = "\n";
const emptyString = "";

const getDisplayTypeFromArgs = () => {
  const args = process.argv.slice(2);
  const displayType = args[0];
  return displayType;
};

const randomNum0To = number => {
  return Math.floor(Math.random() * (number + 1));
};

const pieceDictionary = {
  w: { k: 1, q: randomNum0To(1), p: randomNum0To(8), r: randomNum0To(2), n: randomNum0To(2), b: randomNum0To(2) },
  b: { k: 1, q: randomNum0To(1), p: randomNum0To(8), r: randomNum0To(2), n: randomNum0To(2), b: randomNum0To(2) }
};

const generatePieces = () => {
  const colors = Object.keys(pieceDictionary);
  let pieces = [];
  for (let x = 0; x < colors.length; x++) {
    const color = colors[x];
    const piecesForColor = getPiecesForColor(color);
    pieces = pieces.concat(piecesForColor);
  }
  return pieces;
};

const getPiecesForColor = color => {
  let pieces = [];
  const pieceTypesAndAmounts = pieceDictionary[color];
  const pieceTypes = Object.keys(pieceTypesAndAmounts);
  for (let i = 0; i < pieceTypes.length; i++) {
    const { pieceType, amount } = getPieceTypeAndAmount(i, pieceTypes, pieceTypesAndAmounts);
    const piecesForType = generatePiecesForPieceType(amount, pieceType, color);
    pieces = pieces.concat(piecesForType);
  }
  return pieces;
};

const getPieceTypeAndAmount = (i, pieceTypes, pieceTypesAndAmounts) => {
  const pieceType = pieceTypes[i];
  const amount = pieceTypesAndAmounts[pieceType];
  return { pieceType, amount };
};

const generatePiecesForPieceType = (amount, pieceType, color) => {
  const Piece = require("./piece");
  let pieces = [];
  for (let x = 0; x < amount; x++) {
    pieces.push(new Piece(pieceType, color));
  }
  return pieces;
};

const generateCoords = () => {
  return { x: randomNum0To(7), y: randomNum0To(7) };
};

const newBoard = () => {
  return new Array(8).fill(null).map(() => new Array(8).fill(null));
};

const getAdjacentSpots = coords => {
  const spots = [
    { x: coords.x - 1, y: coords.y },
    { x: coords.x + 1, y: coords.y },
    { x: coords.x, y: coords.y + 1 },
    { x: coords.x, y: coords.y - 1 }
  ];
  return filterOutSpotsOffTheBoard(spots);
};

const stringifyBoard = board => {
  const grid = board.grid;
  let boardString = emptyString;
  for (let y = 0; y < grid.length; y++) {
    const row = grid[y];
    boardString += returnRowSpotsDisplay(row) + newLine;
  }
  return boardString;
};

const returnRowSpotsDisplay = row => {
  let string = "";
  for (let x = 0; x < row.length; x++) {
    string += returnSpotDisplay(row[x]);
  }
  return string;
};

const returnSpotDisplay = spot => {
  const spotDisplay = spot ? spot.getName() : ".";
  return ` ${spotDisplay} `;
};

const filterOutSpotsOffTheBoard = spots => {
  return spots.filter(spot => spot.x >= 0 && spot.x <= 7 && spot.y >= 0 && spot.y <= 7);
};

const isInRow = (row, coords) => {
  return coords.y === row;
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

module.exports = {
  generateCoords,
  newBoard,
  getAdjacentSpots,
  generatePieces,
  stringifyBoard,
  isInRow,
  ifSpotAdjacentToPiece,
  getDisplayTypeFromArgs
};

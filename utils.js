const randomNum0To7 = () => {
  return Math.floor(Math.random() * 7);
};

const getCoords = () => {
  return { x: randomNum0To7(), y: randomNum0To7() };
};

const newBoard = () => {
  return new Array(8).fill(null).map(() => new Array(8).fill(null));
};

module.exports = { getCoords, newBoard };

const randomNum0To7 = () => {
  return Math.floor(Math.random() * 7);
};

const getCoords = () => {
  return { x: randomNum0To7(), y: randomNum0To7() };
};

module.exports = { getCoords };

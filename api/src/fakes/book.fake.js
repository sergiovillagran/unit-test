const { faker } = require('@faker-js/faker');

const generateOneBook = () => ({
  _id: faker.database.mongodbObjectId(),
  name: faker.commerce.productName(),
  price: faker.commerce.price(),
});

const generateManyBooks = (size = 10) => {
  const fakebooks = [];
  for (let index = 0; index < size; index += 1) {
    fakebooks.push(generateOneBook());
  }
  return fakebooks;
};

module.exports = {
  generateManyBooks,
  generateOneBook,
};

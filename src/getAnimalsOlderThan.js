const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  return species.some(
    (element) =>
      element.name === animal && element.residents.every((animalAge) => animalAge.age >= age),
  );
}

module.exports = getAnimalsOlderThan;

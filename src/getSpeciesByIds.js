const data = require('../data/zoo_data');

const { species } = data;

function getSpeciesByIds(...ids) {
  if (ids.length === 0) return [];
  const search = ids.map((animalId) => species.find((animal) => animal.id === animalId));
  return search;
}

module.exports = getSpeciesByIds;

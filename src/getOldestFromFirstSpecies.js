const data = require('../data/zoo_data');

const { species } = data;
const { employees } = data;

function getOldestFromFirstSpecies(id) {
  const employeeSearch = employees.filter((employee) => id === employee.id);
  const firstAnimal = employeeSearch.map((colaborator) =>
    colaborator.responsibleFor).map((animal) => animal[0]);
  const animal = species.filter((element) => element.id === firstAnimal[0]).map((element) =>
    element.residents).reduce((acc, item) => (acc.ge > item.age ? acc : item))
    .reduce((acc, animalInfo) => (acc.age > animalInfo.age ? acc : animalInfo));
  const result = [animal.name, animal.sex, animal.age];
  return result;
}

module.exports = getOldestFromFirstSpecies;

const data = require('../data/zoo_data');

const { species } = data;

function noParam() {
  const obj = species.map((animal) => animal.residents.length);
  const animals = {
    bears: obj[2],
    elephants: obj[7],
    frogs: obj[5],
    giraffes: obj[8],
    lions: obj[0],
    otters: obj[4],
    penguins: obj[3],
    snakes: obj[6],
    tigers: obj[1],
  };
  return animals;
}

function countAnimals(animal) {
  if (!animal) return noParam();
  const matchName = animal.specie;
  const matchSex = animal.sex;
  if (!animal.sex) {
    return species.filter((item) => matchName === item.name)
      .map((element) => element.residents.length)[0];
  }
  const verifyName = species.find((item) => matchName === item.name);
  const verifySex = verifyName.residents
    .filter((element) => element.sex === matchSex).length;
  return verifySex;
}

module.exports = countAnimals;

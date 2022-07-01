const data = require('../data/zoo_data');

function countEntrants(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const child = entrants.filter((person) => (person.age < 18)).length;
  const adult = entrants.filter((person) => (person.age >= 18 && person.age < 50)).length;
  const senior = entrants.filter((person) => (person.age >= 50)).length;
  const result = { adult, child, senior };
  return result;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const childPrice = 20.99 * countEntrants(entrants).child;
  const seniorPrice = 24.99 * countEntrants(entrants).senior;
  const adultPrice = 49.99 * countEntrants(entrants).adult;

  return childPrice + seniorPrice + adultPrice;
}

module.exports = { calculateEntry, countEntrants };

const data = require('../data/zoo_data');

const { species } = data;

const { hours } = data;

const animalDays = (scheduleTarget) =>
  species.find((animals) => animals.name === scheduleTarget).availability;

function objDays(day) {
  const search = species.filter((animal) => animal);
  const animals = search.map((animal) => {
    if (animal.availability.includes(day)) {
      return animal.name;
    }
    return false;
  }).filter((item) => item);
  return animals;
}

function objMaker() {
  const schedule = {};
  Object.entries(hours).forEach((item) => {
    if (!item[1].open) {
      schedule[item[0]] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    } else {
      schedule[item[0]] = {
        officeHour: `Open from ${item[1].open}am until ${item[1].close}pm`,
        exhibition: objDays(item[0]),
      };
    }
  });
  return schedule;
}

function days(scheduleTarget) {
  const schedule = {};
  Object.entries(hours).forEach((item) => {
    if (!item[1].open && item[0] === scheduleTarget) {
      schedule[item[0]] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    } else if (item[0] === scheduleTarget) {
      schedule[item[0]] = {
        officeHour: `Open from ${item[1].open}am until ${item[1].close}pm`,
        exhibition: objDays(item[0]),
      };
    }
  });
  return schedule;
}

function getSchedule(scheduleTarget) {
  if (species.some((animal) => animal.name === scheduleTarget)) return animalDays(scheduleTarget);
  if (!Object.keys(hours).includes(scheduleTarget)) return objMaker();
  if (Object.keys(hours).includes(scheduleTarget)) return days(scheduleTarget);
}

module.exports = getSchedule;

const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  return employees.some((element) => element.managers.length <= 1 && element.id === id);
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return employees
    .filter((employee) => employee.managers.includes(managerId))
    .map((e) => `${e.firstName} ${e.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };

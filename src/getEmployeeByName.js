const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return employees.find(
    (element) =>
      element.firstName === employeeName || element.lastName === employeeName,
  );
}

module.exports = getEmployeeByName;

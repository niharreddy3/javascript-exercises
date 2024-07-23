const leapYears = function (input) {
  if (input % 100 === 0 && input % 400 === 0) {
    return true;
  } else if (input % 100 === 0 && input % 400 !== 0) {
    return false;
  } else if (input % 4 === 0) {
    return true;
  }
  return false;
};

// Do not edit below this line
module.exports = leapYears;

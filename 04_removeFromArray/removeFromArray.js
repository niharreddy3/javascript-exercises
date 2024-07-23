const removeFromArray = function (...theArgs) {
  const arr = theArgs[0];

  for (let i = 1; i < theArgs.length; i++) {
    while (arr.includes(theArgs[i])) {
      let indexToDelete = arr.indexOf(theArgs[i]);
      if (indexToDelete !== -1) {
        arr.splice(indexToDelete, 1);
      }
    }
  }

  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;

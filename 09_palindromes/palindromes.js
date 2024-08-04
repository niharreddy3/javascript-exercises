const palindromes = function (str) {
  let leftPtr = 0;
  let rightPtr = str.length - 1;

  while (leftPtr < rightPtr) {
    while (
      str[leftPtr] === "!" ||
      str[leftPtr] === "," ||
      str[leftPtr] === " " ||
      str[leftPtr] === "."
    ) {
      leftPtr++;
    }

    while (
      str[rightPtr] === "!" ||
      str[rightPtr] === "," ||
      str[rightPtr] === " " ||
      str[rightPtr] === "."
    ) {
      rightPtr--;
    }

    if (str[leftPtr].toLowerCase() !== str[rightPtr].toLowerCase()) {
      return false;
    } else {
      leftPtr++;
      rightPtr--;
    }
  }

  return true;
};

// Do not edit below this line
module.exports = palindromes;

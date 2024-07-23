const sumAll = function (num1, num2) {
  if (
    typeof num1 !== "number" ||
    typeof num2 !== "number" ||
    !Number.isInteger(num1) ||
    !Number.isInteger(num2) ||
    num1 < 0 ||
    num2 < 0
  ) {
    return "ERROR";
  }

  if (num1 > num2) {
    let temp = num2;
    num2 = num1;
    num1 = temp;
  }

  let i = num1;
  let result = 0;

  for (i; i <= num2; i++) {
    result += i;
  }

  return result;
};

// Do not edit below this line
module.exports = sumAll;

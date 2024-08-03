const fibonacci = function (num) {
  if (Number(num) === 0) {
    return 0;
  }

  if (Number(num) === 1) {
    return 1;
  }

  if (Number(num) < 0) {
    return "OOPS";
  }

  let arr = [1, 1];

  while (arr.length < Number(num)) {
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  }

  return arr[arr.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;

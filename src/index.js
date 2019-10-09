module.exports = function zeros(expression) {
  let result = expression.split("*");
  let zeros1 = 0;
  let zeros2 = 0;
  let five = 0;
  let two = 0;

  for (i = 0; i < result.length; i++) {
    if (!result[i].includes("!!")) {
      let number1 = parseInt(result[i]);
      for (let i = number1; i > 0; i--) {
        if ((i % 5 == 0) && (i % 25 == 0)) {
          five += 2;
        } else if (i % 5 == 0) {
          five += 1;
        } else if (i % 2 == 0) {
          two += 1;
        }
      }
    } else {
      let number = parseInt(result[i]);
      for (let i = number; i > 0; i -= 2)
        if ((i % 5 == 0) && (i % 25 == 0)) {
          five += 2;
        } else if (i % 5 == 0) {
          five += 1;
        } else if (i % 2 == 0) {
          two += 1;
        }
    }
  }
  if (five < two) {
    zeros1 = five;
  } else {
    zeros1 = two;
  }

  return zeros1 + zeros2;
}
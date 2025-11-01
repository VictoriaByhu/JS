function multiply(num1, num2) {
  let result = 0;

  if (num2 < 0) {
    for (let i = 0; i < Math.abs(num2); i++) {
      result = result - num1;
    }
  } else {
    for (let i = 0; i < num2; i++) {
      result = result + num1;
    }
  }

  return result;
}

var output = multiply(4, 7);
console.log(output); 
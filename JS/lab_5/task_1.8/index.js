function sumDigits(num) {
  let numString = String(num);
  let sum = 0;

  if (num < 0) {
    sum = sum - parseInt(numString[1]);

    for (let i = 2; i < numString.length; i++) {
      sum = sum + parseInt(numString[i]);
    }
  } else {
    for (let i = 0; i < numString.length; i++) {
      sum = sum + parseInt(numString[i]);
    }
  }

  return sum;
}

var output = sumDigits(1148);
console.log(output); // --> 14

var output2 = sumDigits(-316);
console.log(output2); // --> 4
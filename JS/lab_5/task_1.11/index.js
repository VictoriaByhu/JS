function modulo(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    return NaN;
  }
  
  if (num2 === 0) {
    return NaN;
  }

  if (num1 === 0) {
    return 0;
  }

  let absNum1 = Math.abs(num1);
  let absNum2 = Math.abs(num2);

  while (absNum1 >= absNum2) {
    absNum1 = absNum1 - absNum2;
  }
  
  let remainder = absNum1;

  if (num1 < 0) {
    return -remainder;
  } else {
    return remainder;
  }
}

var output = modulo(25, 4);
console.log(output);

// --- Тести для зауважень ---
console.log("Тест (-25, 4):", modulo(-25, 4)); // --> -1 (знак першого числа)
console.log("Тест (25, -4):", modulo(25, -4)); // --> 1 (знак першого числа)
console.log("Тест (10, 0):", modulo(10, 0)); // --> NaN
console.log("Тест (0, 10):", modulo(0, 10)); // --> 0
console.log("Тест (NaN, 10):", modulo(NaN, 10)); // --> NaN

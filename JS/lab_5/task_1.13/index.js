function detectOutlierValue(numberString) {
  
  let numbersAsStrings = numberString.split(' ');
  
  let evens = [];
  let odds = []; 

  for (let i = 0; i < numbersAsStrings.length; i++) {
    
    let num = parseInt(numbersAsStrings[i]);

    if (num % 2 === 0) {
      evens.push(i + 1); 
    } else {
      odds.push(i + 1);
    }
  }

  if (evens.length === 1) {
    return evens[0];
  } else {
    return odds[0];
  }
}

var output = detectOutlierValue("2 4 7 8 10");
console.log(output); // --> 3

var output2 = detectOutlierValue("1 10 1 1");
console.log(output2); // --> 2
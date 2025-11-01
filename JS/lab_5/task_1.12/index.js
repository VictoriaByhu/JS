function flipEveryNChars(input, n) {
  let newString = "";

  for (let i = 0; i < input.length; i = i + n) {
    let fragment = input.slice(i, i + n);
    let reversedFragment = fragment.split('').reverse().join('');
    newString = newString + reversedFragment;
  }

  return newString;
}

var input = 'a short example';
var output = flipEveryNChars(input, 5);
console.log(output); // --> 'ohs axe trelpma'

var output2 = flipEveryNChars('javascript', 3);
console.log(output2); // --> 'vajcsapirt'
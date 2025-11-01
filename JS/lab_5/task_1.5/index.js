function getLengthOfThreeWords(word1, word2, word3) {
  let length1 = word1.length;
  let length2 = word2.length;
  let length3 = word3.length;
  
  return length1 + length2 + length3;
}

var output = getLengthOfThreeWords('some', 'other', 'words');
console.log(output); 

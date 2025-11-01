function getLongestOfThreeWords(word1, word2, word3) {
  let len1 = word1.length;
  let len2 = word2.length;
  let len3 = word3.length;

  if (len1 >= len2 && len1 >= len3) {
    return word1;
  }
  
  else if (len2 >= len1 && len2 >= len3) {
    return word2;
  }
  
  else {
    return word3;
  }
}

var output = getLongestOfThreeWords("these", "three", "words");
console.log(output);

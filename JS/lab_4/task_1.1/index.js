function findMinLengthOfThreeWords(word1, word2, word3) {
  const length1 = word1.length;
  const length2 = word2.length;
  const length3 = word3.length;

  return Math.min(length1, length2, length3);
}

var output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log("Результат для ('a', 'be', 'see'):", output); 
function getLengthOfWords(word1, word2) {
    return word1.length + word2.length;
}

var output = getLengthOfWords('some', 'words');
console.log(output);

document.getElementById("result").textContent = output;
function convertScoreToGrade(score) {
  
  if (score > 100 || score < 0) {
    return "INVALID SCORE";
  }

  else if (score >= 90) {
    return "A";
  }
  else if (score >= 82) {
    return "B";
  }
  else if (score >= 75) {
    return "C";
  }
  else if (score >= 69) {
    return "D";
  }
  else if (score >= 60) {
    return "E";
  }
  else if (score >= 35) {
    return "Fx";
  }
  else {
    return "F";
  }
}

var output = convertScoreToGrade(91);
console.log(output);

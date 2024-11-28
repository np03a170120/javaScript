function monkeyTrouble(aSmile, bSmile) {
  if ((aSmile && bSmile) || (!aSmile && !bSmile)) {
    return true;
  } else {
    return false;
  }
}

console.log(monkeyTrouble(true, false));

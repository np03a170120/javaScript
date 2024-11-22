function possibleBonus(a, b) {
  const diff = b - a;

  if (diff <= 6 && diff > 0) {
    return true;
  } else {
    return false;
  }
}

console.log(possibleBonus(0, 6));

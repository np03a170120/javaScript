function makePlusFunction(baseNum) {
  return function (num) {
    return num + baseNum;
  };
}

const plusFive = makePlusFunction(5);

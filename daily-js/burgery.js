function addName(obj, name, value) {
  let test = obj;
  test[name] = value;
  return test;
}

addName({ piano: 500, stereo: 300 }, "Caligula", 440);

function generation(x, y) {
  if (y === "f") {
    let female_relation = "";
    switch (x) {
      case -3:
        female_relation = "great grandmother";
        break;
      case -2:
        female_relation = "grandmother";
        break;
      case -1:
        female_relation = "mother";
        break;
      case 0:
        female_relation = "me!";
        break;
      case 1:
        female_relation = "daughter";
        break;
      case 2:
        female_relation = "granddaughter";
        break;
      case 3:
        female_relation = "great granddaughter";
        break;
    }
    return female_relation;
  } else if (y === "m") {
    let male_relation = "";
    switch (x) {
      case -3:
        male_relation = "great grandfather";
        break;
      case -2:
        male_relation = "grandfather";
        break;
      case -1:
        male_relation = "father";
        break;
      case 0:
        male_relation = "me!";
        break;
      case 1:
        male_relation = "son";
        break;
      case 2:
        male_relation = "grandson";
        break;
      case 3:
        male_relation = "great grandson";
        break;
    }
    return male_relation;
  }
}

generation(2, "f");

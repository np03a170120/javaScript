function toCamelCase(str) {
  const normalize = str.replace(/[_,-]/g, "_").split("_");
  const final = [normalize[0]];
  for (let i = 1; i < normalize.length; i++) {
    const temp = normalize[i][0].toUpperCase() + normalize[i].substring(1);
    final.push(temp);
  }

  return String(final).replace(/,/g, "");
}

console.log(toCamelCase("the_stealth-warrior"));

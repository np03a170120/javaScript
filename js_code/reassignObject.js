let animal = {
  species: "dog",
};
let duplicateAnimal = animal;
animal = {
  species: "cat",
};

console.log(animal);
console.log(duplicateAnimal);

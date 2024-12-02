// factory functions
function createUser(name) {
  const discordName = "@" + name;

  //private variable
  let reputation = 0;

  const getReputation = () => reputation;
  const giveReputation = () => reputation;

  return { name, discordName, getReputation, giveReputation };
}

function createPlayer(name, level) {
  const { getReputation, giveReputation } = createUser(name);

  const increasedLevel = () => level++;

  return { increasedLevel, getReputation, giveReputation };
}

function createPlayer(name) {
  const user = createUser(name);
  const increasedLevel = () => level++;

  return Object.assign({}, user, { increasedLevel });
}

const person = createUser("Season");

console.log(person.getReputation);

function createCirle(raduis) {
  return {
    raduis,
    area() {
      console.log((22 / 7) * raduis * raduis);
    },
  };
}

const circle1 = createCirle(24);

console.log(circle1);

// IIFES
// immediately invoking function expression

const calculator = (function () {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;

  return { add, sub };
})();

calculator.add(2, 7);

const Greet = (function () {
  const sayHi = (message) => console.log(message);
  return { sayHi };
})();

Greet.sayHi("tell him");

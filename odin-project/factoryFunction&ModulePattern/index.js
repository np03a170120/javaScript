// factory functions
function createUser(name) {
  const discordName = "@" + name;

  //private variable
  let reputation = 0;

  const getReputation = () => reputation;
  const giveReputation = () => reputation;

  return { name, discordName, getReputation, giveReputation };
}

const person = createUser("Season");

console.log(person);

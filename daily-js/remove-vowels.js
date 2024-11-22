// function disemvowel(str) {
//   const arr_str = str.split("");

//   let filter_vowels = arr_str.filter(
//     (item) =>
//       item != "a" &&
//       item != "e" &&
//       item != "i" &&
//       item != "o" &&
//       item != "u" &&
//       item != "A" &&
//       item != "E" &&
//       item != "I" &&
//       item != "O" &&
//       item != "U"
//   );

//   let output = filter_vowels.join("");

//   return output;
// }

function removeVowels(str) {
  return str.replace(/[aeiouAEIOU]/g, "");
}
console.log(removeVowels("I am a man"));

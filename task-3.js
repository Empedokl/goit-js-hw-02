const findLongestWord = function (string) {
  const Words = string.split(" ");

  let LongestWord = Words[0];

  for (let i = 1; i < Words.length; i += 1) {
    if (Words[i].length > LongestWord.length) {
      LongestWord = Words[i];
    }
  }
  return LongestWord;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

console.log(findLongestWord("Google do a roll"));

console.log(findLongestWord("May the force be with you"));

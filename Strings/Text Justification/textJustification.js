//help https://www.youtube.com/watch?v=r-F1sCTmZxA

function justifyText(words, maxWidth) {
  let result = [];
  let currentLine = [];
  let numberOfLetters = 0;
  for (var i = 0; i < words.length; i++) {
    if (numberOfLetters + currentLine.length + words[i].length > maxWidth) {
      let numberOfSpacesAvailable = maxWidth - numberOfLetters;
      let evenlyDistributedSpaces =
        numberOfSpacesAvailable / (currentLine.length - 1);
      let extraSpaces = numberOfSpacesAvailable % (currentLine.length - 1);

      for (var j = 0; j < extraSpaces; j++) {
        currentLine[j] += " ";
      }
      let spaces = "";
      for (var j = 0; j < evenlyDistributedSpaces; j++) {
        spaces += " ";
      }
      result.push(currentLine.join(spaces));
      currentLine = [];
      numberOfLetters = 0;
    }

    currentLine.push(words[i]);
    numberOfLetters += words[i].length;
  }
  console.log(result);
}
justifyText(
  ["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"],
  16
);

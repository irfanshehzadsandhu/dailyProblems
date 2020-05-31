// This problem was asked by Palantir.

// Write an algorithm to justify text. Given a sequence of words and an integer line length k,

//return a list of strings which represents each line, fully justified.

// More specifically, you should have as many words as possible in each line.

//There should be at least one space between each word.

//Pad extra spaces when necessary so that each line has exactly length k.

//Spaces should be distributed as equally as possible, with the extra spaces,

//if any, distributed starting from the left.

// If you can only fit one word on a line, then you should pad the right-hand side with spaces.

// Each word is guaranteed not to be longer than k.

// For example,
//given the list of words ["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"]

//and k = 16, you should return the following:

// ["the  quick brown", # 1 extra space on the left
// "fox  jumps  over", # 2 extra spaces distributed evenly
// "the   lazy   dog"] # 4 extra spaces distributed evenly

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

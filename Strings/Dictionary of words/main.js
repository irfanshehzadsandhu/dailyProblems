/*
This problem was asked by Microsoft.

Given a dictionary of words and a string made up of those words (no spaces), 
return the original sentence in a list. 
If there is more than one possible reconstruction, return any of them. 
If there is no possible reconstruction, then return null.

For example, 
given the set of words 'quick', 'brown', 'the', 'fox', and the string "thequickbrownfox", 
you should return ['the', 'quick', 'brown', 'fox'].

Given the set of words 'bed', 'bath', 'bedbath', 'and', 'beyond', and the string "bedbathandbeyond", 
return either ['bed', 'bath', 'and', 'beyond] or ['bedbath', 'and', 'beyond'].
*/

function originalSentence(string, dictionary) {
  var sentence = [];
  var word = "";
  for (var i = 0; i < string.length; i++) {
    word = word.concat(string[i]);
    for (var j = 0; j < dictionary.length; j++) {
      if (word == dictionary[j]) {
        sentence.push(word);
        word = "";
      }
    }
  }
  console.log(sentence);
}

originalSentence("thequickbrownfox", ["quick", "brown", "the", "fox"]);
originalSentence("bedbathandbeyond", [
  "bed",
  "bath",
  "bedbath",
  "and",
  "beyond",
]);

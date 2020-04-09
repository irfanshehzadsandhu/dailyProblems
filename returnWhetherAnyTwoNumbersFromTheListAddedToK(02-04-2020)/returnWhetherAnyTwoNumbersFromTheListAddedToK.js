// This problem was recently asked by Google.

// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

// For example, given[10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

// Bonus: Can you do this in one pass ?

function areTwoNumbersAddedUpToK(arrayOfNumbers, k) { //running 1 time
  var addedUpToK = false;
  var arraySize = arrayOfNumbers.length;
  for (var i = 0; i < arraySize; i++) { //running n times
    for (var j = 0; j < arraySize; j++) { //running n*n times
      if ((arrayOfNumbers[i] + arrayOfNumbers[j]) === k) {
        addedUpToK = true;
        break;
      }
    }
  }
  return addedUpToK;
  //bigO of this function is (n*n)+n+1
}
console.log(areTwoNumbersAddedUpToK([11, 12, 7, 7], 17));
console.log(areTwoNumbersAddedUpToK([64, 10, 4, 7], 17));
console.log(areTwoNumbersAddedUpToK([10, 15, 3, 7], 17));

/*
This problem was asked by Facebook.

A builder is looking to build a row of N houses that can be of K different colors.
 He has a goal of minimizing cost while ensuring that no two neighboring houses are of the same color.


Given an N by K matrix where the nth row and kth column represents the cost to build the nth house 
with kth color, return the minimum cost which achieves this goal.

*/

//help from following link
//https://www.youtube.com/watch?v=o5Ub2Tw8Tvg
function calculateMinCost(costMatrix, totalCostMatrix, colors) {
  for (var i = 0; i < costMatrix.length; i++) {
    for (var j = 0; j < colors; j++) {
      if (i == 0) {
        totalCostMatrix[i][j] = costMatrix[i][j];
      } else {
        let current = costMatrix[i][j];
        let previousValues = [];
        for (var l = 0; l < colors; l++) {
          if (l !== j) {
            previousValues.push(totalCostMatrix[i - 1][l]);
          }
        }
        totalCostMatrix[i][j] = current + Math.min(...previousValues);
        console.log(totalCostMatrix[i][j]);
      }
    }
  }
}

function main() {
  colors = 2;
  const costMatrix = [
    [2, 5],
    [1, 6],
    [2, 7],
    [4, 3],
  ];
  const totalCostMatrix = [
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
  ];

  calculateMinCost(costMatrix, totalCostMatrix, colors);

  //from last row of totalCost Matrix pic min value
}
main();

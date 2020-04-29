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
}
main();

const adjListToMatrix = (list) => {
  let adjMatrix = [];
  // adj List to matrix
  // start init
  for (let i = 0; i < list.length; i++) {
    adjMatrix[i] = [];
    for (let j = 0; j < list.length; j++) {
      adjMatrix[i][j] = 0;
    }
  }
  // fix init
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list[i].length; j++) {
      const indJ = list[i][j];
      adjMatrix[i][indJ] = 1;
    }
  }
  return adjMatrix;
};

const adjMatrixToList = (Matrix) => {
  let adjList = [];
  // adj Matrix to List
  // list init
  for (let i = 0; i < Matrix.length; i++) adjList[i] = [];

  for (let i = 0; i < Matrix.length; i++) {
    for (let j = i + 1; j < Matrix[i].length; j++) {
      if (Matrix[i][j] !== 0) {
        adjList[i].push(j);
        adjList[j].push(i);
      }
    }
  }
  return adjList;
};

export { adjListToMatrix, adjMatrixToList };

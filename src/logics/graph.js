import {
  adjListToMatrix as ListToMatrix,
  adjMatrixToList as MatrixToList,
} from "./matrixAlgorithms.js";

// unrated and unweighted graph
export default class Graph {
  // you can init Graph using adjacency matrix or adjacency list
  constructor(e) {
    if (!Array.isArray(e)) {
      throw new Error("invalid variable type");
    } else {
      let isMatrix = true;
      let isWeighted = false;

      for (let i = 0; i < e.length; i++) {
        for (let j = 0; j < e[i].length; j++) {
          if (e[i][j] > 1) isWeighted = true;
        }
        if (e.length !== e[i].length) {
          isMatrix = false;
          break;
        }
      }

      // check matrix or list
      if (isMatrix) {
        if (isWeighted) throw new Error("it is weighted matrix!");
        for (let i = 0; i < e.length; i++)
          if (e[i][i] !== 0) throw new Error("it matrix has loop!");
      } else {
        for (let i = 0; i < e.length; i++) {
          for (let j = 0; j < e[i].length; j++) {
            e[i][j] -= 1;
            if (e[i][j] > e.length)
              throw new Error("Adjacency list is not correct");
          }
        }
      }

      if (isMatrix) {
        this.adjMatrix = e.slice();
        this.adjList = MatrixToList(this.adjMatrix);
      } else {
        this.adjList = e.slice();
        this.adjMatrix = ListToMatrix(this.adjList);
      }
    }
  }
}

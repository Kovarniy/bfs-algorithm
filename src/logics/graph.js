// unrated and unweighted graph
export default class Graph {
  // you can init Graph using adjacency matrix or adjacency list
  constructor(e) {
    if (!Array.isArray(e)) {
      throw new Error("invalid variable type");
    } else {
      console.log(e);

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
        this.adjList = [];
        // adj Matrix to List
        // list init
        for (let i = 0; i < this.adjMatrix.length; i++) this.adjList[i] = [];

        for (let i = 0; i < this.adjMatrix.length; i++) {
          for (let j = i + 1; j < this.adjMatrix[i].length; j++) {
            if (this.adjMatrix[i][j] !== 0) {
              this.adjList[i].push(j);
              this.adjList[j].push(i);
            }
          }
        }
      } else {
        this.adjList = e.slice();
        this.adjMatrix = [];
        // adj List to matrix
        // start init
        for (let i = 0; i < e.length; i++) {
          this.adjMatrix[i] = [];
          for (let j = 0; j < e.length; j++) {
            this.adjMatrix[i][j] = 0;
          }
        }

        // fix init
        for (let i = 0; i < this.adjList.length; i++) {
          for (let j = 0; j < this.adjList[i].length; j++) {
            const indJ = this.adjList[i][j];
            this.adjMatrix[i][indJ] = 1;
          }
        }
      }
    }
  }
}

import Graph from "../logics/graph.js";

let canvas;

export default canvas = () => {
  const canvas = document.getElementById("algoCanvas");
  canvas.width = 400;
  canvas.height = 400;
  canvas.style.border = "2px solid black";
  let context = canvas.getContext("2d");
};

const matrix = [
  [0, 1, 1, 0, 0, 0, 0],
  [1, 0, 0, 1, 1, 0, 0],
  [1, 0, 0, 1, 1, 0, 0],
  [0, 1, 1, 0, 0, 1, 1],
  [0, 1, 1, 0, 0, 0, 1],
  [0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 1, 1, 0, 0],
];

let g = new Graph(matrix);
console.log(g);

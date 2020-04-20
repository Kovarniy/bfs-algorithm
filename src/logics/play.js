import Graph from "./graph.js";
import { canvas, drawGraph } from "../graphics/canvas.js";

let play;
export default play = () => {
  const context = canvas();

  // graph init
  const matrix = [
    [0, 1, 1, 0, 0, 0, 0],
    [1, 0, 0, 1, 1, 0, 0],
    [1, 0, 0, 1, 1, 0, 0],
    [0, 1, 1, 0, 0, 1, 1],
    [0, 1, 1, 0, 0, 0, 1],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 1, 0, 0],
  ];

  const graph = new Graph(matrix);
  console.log(graph);
  drawGraph(context, graph.adjList);
};

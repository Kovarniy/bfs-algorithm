import Graph from "../logics/graph.js";

const canvas = () => {
  const canvas = document.getElementById("algoCanvas");
  canvas.width = 800;
  canvas.height = 800;
  canvas.style.border = "2px solid black";
  let context = canvas.getContext("2d");

  return context;
};

class Vetrex {
  constructor(graph) {
    const coordList = calculateXY(graph.adjList.length);

    this.vertex = [
      {
        name: 0,
        adjList: graph.adjList[0],
        coordinates: {
          x: coordList.x[0],
          y: coordList.y[0],
        },
        color: "red",
      },
    ];
    for (let i = 1; i < graph.adjList.length; i++) {
      this.vertex.push({
        name: i,
        adjList: graph.adjList[i],
        coordinates: {
          x: coordList.x[i],
          y: coordList.y[i],
        },
        color: "red",
      });
    }
    this.matrix = graph.adjMatrix;
  }
}

const graphToVertexObj = (graph) => {
  let v = new Vetrex(graph);
  return v;
};

const getRad = (deg) => {
  // 3.14 / 180 - 1град в радианах
  return (deg * Math.PI) / 180;
};

const calculateXY = (countVertex) => {
  let cordArr = {
    x: [],
    y: [],
  };

  const distance = 360 / countVertex;
  let index = 0;
  for (let i = 0; i < 360; i += distance) {
    cordArr.x[index] = Math.cos(getRad(i));
    cordArr.y[index] = Math.sin(getRad(i));
    index++;
  }
  // console.log(cordArr);
  return cordArr;
};

const drawVertex = (context, v) => {
  for (let i = 0; i < v.vertex.length; i++) {
    context.beginPath();
    context.fillStyle = "blue";
    const x = 400 + v.vertex[i].coordinates.x * 130;
    const y = 400 + v.vertex[i].coordinates.y * 130;
    context.arc(x, y, 25, 0, 360);
    context.stroke();
    context.fill();

    context.beginPath();
    context.lineWidth = 1;
    context.font = "32px Arial";
    context.fillStyle = "blue";
    context.fillText(`${v.vertex[i].name}`, x, y - 30);
    context.fill();
  }
};

const drawRib = (context, g) => {
  let lab = g.vertex.map(() => 0);
  const len = g.vertex.length;
  console.log(g);

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (g.matrix[i][j] === 1) {
        console.log(`i: ${i} j: ${j}`);
        context.beginPath();

        context.moveTo(
          400 + g.vertex[i].coordinates.x * 130,
          400 + g.vertex[i].coordinates.y * 130
        );
        context.lineTo(
          400 + g.vertex[j].coordinates.x * 130,
          400 + g.vertex[j].coordinates.y * 130
        );
        context.strokeStyle = "gray";
        context.lineWidth = 3;
        context.stroke();
      }
    }
  }
};

const drawGraph = (context, adjGraph) => {
  let obj = graphToVertexObj(adjGraph);
  // console.log(obj);
  drawRib(context, obj);
  drawVertex(context, obj);
};

export { canvas, drawGraph };

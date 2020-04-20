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
  constructor(list) {
    const coordList = calculateXY(list.length);

    this.vertex = [
      {
        name: 0,
        adjList: list[0],
        coordinates: {
          x: coordList.x[0],
          y: coordList.y[0],
        },
        color: "red",
      },
    ];
    for (let i = 1; i < list.length; i++) {
      this.vertex.push({
        name: i,
        adjList: list[i],
        coordinates: {
          x: coordList.x[i],
          y: coordList.y[i],
        },
        color: "red",
      });
    }
  }
}

const lestToVertexObj = (list) => {
  let v = new Vetrex(list);
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
  console.log(cordArr);
  return cordArr;
};

const drawVertex = (context, v) => {
  for (let i = 0; i < v.vertex.length; i++) {
    context.beginPath();
    context.fillStyle = "red";
    context.arc(
      450 + v.vertex[i].coordinates.x * 100,
      300 + v.vertex[i].coordinates.y * 100,
      20,
      0,
      360
    );
    context.stroke();
    context.fill();
  }
};

const drawRib = (context, arrVertex) => {
  //Если у вершин разные цвета, то рисуем между ними путь
  for (let i = 0; i < currentSize; i++) {
    for (let j = 1; j < currentSize; j++) {
      if (adjMatrix[i][j] == 1) {
        contex.beginPath();
        contex.moveTo(450 + arrVertex[i].x * 100, 300 + arrVertex[i].y * 100);
        contex.lineTo(450 + arrVertex[j].x * 100, 300 + arrVertex[j].y * 100);
        contex.stroke();
      }
    }
  }
};

const drawGraph = (context, adjList) => {
  let obj = lestToVertexObj(adjList);
  console.log(obj);
  drawVertex(context, obj);
  // drawRib(context, obj);
};

export { canvas, drawGraph };

import Graph from "./graph.js";
import {
  canvas,
  drawGraph,
  changeVetexColor,
  changeDomElColors,
  addElInDeque,
  removeElInDeque,
} from "../graphics/canvas.js";

let g;
let context;
const play = () => {
  context = canvas();

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
  g = drawGraph(context, graph);
  let btn = document.getElementById("steep");
  btn.onclick = steep;
};

// TODO ПЕРЕПЕШИ ЭТОТ УЖАС, ПОЖАЛУЙСТААААААААААААААА!
let counter = 0;
let steep = () => {
  switch (counter) {
    case 0:
      changeVetexColor(0, g, "red", context);
      counter++;
      break;
    case 1:
      changeVetexColor(1, g, "GreenYellow", context);
      changeVetexColor(2, g, "GreenYellow", context);
      addElInDeque("deq1", "1");
      addElInDeque("deq2", "2");
      counter++;
      break;
    case 2:
      changeVetexColor(1, g, "Orange", context);
      counter++;
      break;
    case 3:
      changeVetexColor(0, g, "Orange", context);
      changeVetexColor(1, g, "red", context);
      changeDomElColors("#deq1", "red");
      changeDomElColors("#v0", "orange");
      counter++;
      break;
    case 4:
      changeVetexColor(3, g, "GreenYellow", context);
      changeVetexColor(4, g, "GreenYellow", context);
      addElInDeque("deq3", "3");
      addElInDeque("deq4", "4");
      counter++;
      break;
    case 5:
      counter++;
      changeVetexColor(2, g, "Orange", context);
      break;
    case 6:
      swapVertex(2, 1);
      dequeMove("deq1", "#deq2");
      changeDomElColors("#v1", "orange");
      counter++;
      break;
    case 7:
      changeVetexColor(3, g, "orange", context);
      counter++;
      break;
    case 8:
      changeVetexColor(3, g, "red", context);
      changeVetexColor(2, g, "orange", context);
      changeDomElColors("#v2", "orange");
      dequeMove("deq2", "#deq3");
      counter++;
      break;
    case 9:
      changeVetexColor(5, g, "GreenYellow", context);
      changeVetexColor(6, g, "GreenYellow", context);
      addElInDeque("deq5", "5");
      addElInDeque("deq6", "6");
      counter++;
      break;
    case 10:
      changeVetexColor(4, g, "orange", context);
      counter++;
      break;
    case 11:
      swapVertex(4, 3);
      dequeMove("deq3", "#deq4");
      changeDomElColors("#v3", "orange");
      counter++;
      break;
    case 12:
      changeVetexColor(5, g, "orange", context);
      counter++;
      break;
    case 13:
      swapVertex(5, 4);
      dequeMove("deq4", "#deq5");
      changeDomElColors("#v4", "orange");
      counter++;
      break;
    case 14:
      changeVetexColor(6, g, "orange", context);
      counter++;
      break;
    case 15:
      swapVertex(6, 5);
      dequeMove("deq5", "#deq6");
      // // changeVetexColor(5, g, "orange", context);
      changeDomElColors("#v5", "orange");
      counter++;
      break;
    case 16:
      removeElInDeque("deq6");
      changeVetexColor(6, g, "orange", context);
      changeDomElColors("#v6", "orange");
      alert("Вы обошли граф");
      counter++;
      break;
    default:
      break;
  }
};

const swapVertex = (id1, id2) => {
  changeVetexColor(id1, g, "red", context);
  changeVetexColor(id2, g, "orange", context);
};

const isVisited = (id) => {
  changeVetexColor(id, g, "orange", context);
  changeDomElColors(`#v${id}`, "orange");
};

// TODO переделать функции таким образом, что бы
// removeElInDeque и changeDomElColors принимали одинаковые атрибуиы id или селектор
const dequeMove = (remove, active) => {
  removeElInDeque(remove);
  changeDomElColors(active, "red");
};

export { play, g };

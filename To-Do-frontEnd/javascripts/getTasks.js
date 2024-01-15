const divTasks = document.getElementById("tasks");
const lista = document.getElementById("idtareas");
const listaPut = document.getElementById("putTareas");
const getTasksURL = "http://localhost:8080/tasks";
// const getTasks = require("./crud/getTasks.js");

const crearFrontTarea = (id, task, descripcion) => {
  const divContenedor = document.createElement("div");
  const divSeparador = document.createElement("div");
  const ntarea = document.createElement("h3");
  const taskTitle = document.createElement("h4");
  const descripcionP = document.createElement("p");

  divContenedor.className = "task";
  divSeparador.className = "separador";

  divTasks.appendChild(divContenedor);

  divContenedor.appendChild(ntarea);
  divContenedor.appendChild(taskTitle);
  divContenedor.appendChild(divSeparador);
  divContenedor.appendChild(descripcionP);

  ntarea.innerHTML = `Tarea N: ${id}`;
  taskTitle.innerText = task;
  descripcionP.innerText = descripcion;
};

const llenarSelect = (id) => {
  const opcion = document.createElement("option");
  opcion.value = id;
  opcion.innerText = `Tarea N: ${id}`;
  lista.appendChild(opcion);
};
const llenarSelectPut = (id) => {
  const opcion = document.createElement("option");
  opcion.value = id;
  opcion.innerText = `Tarea N: ${id}`;
  listaPut.appendChild(opcion);
};
async function getTasks() {
  try {
    const tasks = await axios.get(getTasksURL);
    tasks.data.forEach((element) => {
      crearFrontTarea(element.id, element.title, element.descripcion);
      llenarSelect(element.id);
      llenarSelectPut(element.id);
    });
  } catch (error) {
    console.log("OCURRIO UN ERROR " + error);
  }
}

getTasks();
//crearFrontTarea("tarea 1", "descripcion 1");

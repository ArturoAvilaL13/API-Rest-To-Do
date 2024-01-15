const lista = document.getElementById("putTareas");
const modificar = document.getElementById("putButton");
const titulo = document.getElementById("tituloPut");
const descripcion = document.getElementById("descripcionPut");

async function getTaskById(id) {
  try {
    const url = `http://localhost:8080/tasks/${id}`;
    const tarea = await axios.get(url);
    titulo.value = tarea.data.title;
    descripcion.value = tarea.data.descripcion;
  } catch (error) {
    console.log(error);
  }
}

lista.addEventListener("change", () => {
  getTaskById(lista.value);
});

async function putTaskById(id, titulo, descripcion) {
  try {
    const url = `http://localhost:8080/update/${id}`;
    const datos = {
      title: titulo,
      descripcion: descripcion,
    };
    const puttarea = await axios.put(url, datos);
  } catch (error) {
    console.log(error);
  }
}

modificar.addEventListener("click", () => {
  putTaskById(lista.value, titulo.value, descripcion.value);
  location.reload();
});

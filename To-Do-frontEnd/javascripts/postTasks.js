const titulo = document.getElementById("titulo");
const descripcion = document.getElementById("descripcion");
const agregarTarea = document.getElementById("agregarTarea");

const postTasksURL = "http://localhost:8080/savetask";

async function postTask(titulo, descripcion) {
  try {
    const postTask = await axios.post(postTasksURL, {
      title: titulo,
      descripcion: descripcion,
    });
    console.log(postTask);
  } catch (error) {
    console.log(error);
  }
}

agregarTarea.addEventListener("click", () => {
  postTask(titulo.value, descripcion.value);
  location.reload();
});

const lista = document.getElementById("idtareas");
const borrar = document.getElementById("botonEliminar");

let deleteTaskURL = "http://localhost:8080/delete/";

async function deleteTask(id) {
  try {
    deleteTaskURL += id;
    const delTask = await axios.delete(deleteTaskURL);
  } catch (error) {
    console.log(error);
  }
}

borrar.addEventListener("click", () => {
  deleteTask(lista.value);
  location.reload();
});

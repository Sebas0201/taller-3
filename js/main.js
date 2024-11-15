document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("menu-estudiantes").addEventListener("click", () => {
    cargarSeccion("estudiantes.html");
  });
  document.getElementById("menu-programas").addEventListener("click", () => {
    cargarSeccion("programas.html");
  });
  document.getElementById("menu-matriculas").addEventListener("click", () => {
    cargarSeccion("matriculas.html");
  });
});

function cargarSeccion(url) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("main-content").innerHTML = data;
    })
    .catch((error) => console.error("Error al cargar la sección:", error));
}

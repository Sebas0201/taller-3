document.addEventListener("DOMContentLoaded", function () {
  cargarEstudiantes();
  cargarProgramas();
  cargarMatriculas();

  document
    .getElementById("form-matriculas")
    .addEventListener("submit", function (e) {
      e.preventDefault(); 

      const matricula = {
        idMatricula: document.getElementById("id-matricula").value,
        idEstudiante: document.getElementById("id-estudiante").value,
        codigoPrograma: document.getElementById("codigo-programa").value,
        fechaMatricula: document.getElementById("fecha-matricula").value,
        estado: document.getElementById("estado").value,
      };

      let matriculas = JSON.parse(localStorage.getItem("matriculas")) || [];

      if (matriculas.some((mat) => mat.idMatricula === matricula.idMatricula)) {
        alert("La identificación de la matrícula ya está registrada.");
        return;
      }

      matriculas.push(matricula);

      localStorage.setItem("matriculas", JSON.stringify(matriculas));

      const mensajeExito = document.getElementById("mensaje-exito");
      mensajeExito.textContent = "Matrícula registrada correctamente";
      mensajeExito.style.display = "block";

      setTimeout(() => {
        mensajeExito.style.display = "none";
      }, 3000);

      this.reset();

      cargarMatriculas();
    });
});

function cargarEstudiantes() {
  const estudiantes = JSON.parse(localStorage.getItem("estudiantes")) || [];
  const selectEstudiante = document.getElementById("id-estudiante");

  selectEstudiante.innerHTML =
    '<option value="" disabled selected>Seleccione un estudiante</option>';

  estudiantes.forEach((est) => {
    const option = document.createElement("option");
    option.value = est.id;
    option.textContent = `${est.id} - ${est.nombre}`;
    selectEstudiante.appendChild(option);
  });
}

function cargarProgramas() {
  const programas = JSON.parse(localStorage.getItem("programas")) || [];
  const selectPrograma = document.getElementById("codigo-programa");

  selectPrograma.innerHTML =
    '<option value="" disabled selected>Seleccione un programa</option>';

  programas.forEach((prog) => {
    const option = document.createElement("option");
    option.value = prog.codigo;
    option.textContent = `${prog.codigo} - ${prog.nombre}`;
    selectPrograma.appendChild(option);
  });
}

function cargarMatriculas() {
  const matriculas = JSON.parse(localStorage.getItem("matriculas")) || [];
  const tablaCuerpo = document
    .getElementById("tabla-matriculas")
    .getElementsByTagName("tbody")[0];

  tablaCuerpo.innerHTML = "";

  matriculas.forEach((matricula) => {
    const fila = document.createElement("tr");

    Object.values(matricula).forEach((valor) => {
      const celda = document.createElement("td");
      celda.textContent = valor;
      fila.appendChild(celda);
    });

    tablaCuerpo.appendChild(fila);
  });
}

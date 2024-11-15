document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form-programas");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const programa = {
        codigo: document.getElementById("codigo-programa").value,
        nombre: document.getElementById("nombre-programa").value,
        duracion: document.getElementById("duracion").value,
        modalidad: document.getElementById("modalidad").value,
        fechaInicio: document.getElementById("fecha-inicio").value,
      };

      let programas = JSON.parse(localStorage.getItem("programas")) || [];

      if (programas.some((prog) => prog.codigo === programa.codigo)) {
        alert("El código del programa ya está registrado.");
        return;
      }

      programas.push(programa);

      localStorage.setItem("programas", JSON.stringify(programas));

      const mensajeExito = document.getElementById("mensaje-exito");
      if (mensajeExito) {
        mensajeExito.textContent = "Programa registrado correctamente";
        mensajeExito.style.backgroundColor = "green";
        mensajeExito.style.color = "white";
        mensajeExito.style.padding = "10px";
        mensajeExito.style.marginTop = "10px";
        mensajeExito.style.borderRadius = "5px";
        mensajeExito.style.display = "block";

        setTimeout(() => {
          mensajeExito.style.display = "none";
        }, 3000);
      }

      this.reset();
    });
  } else {
    console.error('No se pudo encontrar el formulario con id "form-programas"');
  }
});

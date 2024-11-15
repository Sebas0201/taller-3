document
  .getElementById("form-estudiantes")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const estudiante = {
      id: document.getElementById("id").value,
      nombre: document.getElementById("nombre").value,
      fecha: document.getElementById("fecha").value,
      correo: document.getElementById("correo").value,
      telefono: document.getElementById("telefono").value || null,
    };

    var estudiantes = JSON.parse(localStorage.getItem("estudiantes")) || [];

    if (estudiantes.some((est) => est.id === estudiante.id)) {
      alert("La identificación del estudiante ya está registrada.");
      return;
    }

    estudiantes.push(estudiante);

    localStorage.setItem("estudiantes", JSON.stringify(estudiantes));

    const mensajeExito = document.getElementById("mensaje-exito");
    mensajeExito.textContent = "Estudiante registrado correctamente";
    mensajeExito.style.backgroundColor = "green";
    mensajeExito.style.color = "white";
    mensajeExito.style.padding = "10px";
    mensajeExito.style.marginTop = "10px";
    mensajeExito.style.borderRadius = "5px";
    mensajeExito.style.display = "block";

    setTimeout(() => {
      mensajeExito.style.display = "none";
    }, 3000);

    this.reset();
  });

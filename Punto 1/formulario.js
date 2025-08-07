const form = document.getElementById("registroForm");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre");
  const correo = document.getElementById("correo");
  const edad = document.getElementById("edad");

  // Limpiar todos los mensajes personalizados
  nombre.setCustomValidity("");
  correo.setCustomValidity("");
  edad.setCustomValidity("");

  let valido = true;

  // Validar nombre
  if (!nombre.value.trim()) {
    nombre.setCustomValidity("El nombre es obligatorio.");
    valido = false;
  }

  // Validar correo
  if (!correo.value.trim()) {
    correo.setCustomValidity("El correo es obligatorio.");
    valido = false;
  } else if (!correo.validity.valid) {
    correo.setCustomValidity("El formato del correo no es válido.");
    valido = false;
  }

  // Validar edad
  const edadValor = parseInt(edad.value);
  if (!edad.value.trim()) {
    edad.setCustomValidity("La edad es obligatoria.");
    valido = false;
  } else if (isNaN(edadValor) || edadValor <= 18) {
    edad.setCustomValidity("Debes tener más de 18 años.");
    valido = false;
  }

  if (form.checkValidity() && valido) {
    // Obtener la lista actual o iniciar una nueva
    const datosGuardados = JSON.parse(localStorage.getItem("usuarios")) || [];

    const nuevoUsuario = {
      nombre: nombre.value,
      correo: correo.value,
      edad: edad.value
    };

    datosGuardados.push(nuevoUsuario);
    localStorage.setItem("usuarios", JSON.stringify(datosGuardados));

    alert("Datos guardados correctamente.");
    form.reset();
  } else {
    form.reportValidity(); // Mostrar mensajes de error
  }
});

function mostrarDatos() {
  const resultado = document.getElementById("resultado");
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  if (usuarios.length > 0) {
    let html = "<h3>Usuarios Registrados:</h3><ul>";
    usuarios.forEach((usuario, index) => {
      html += `
        <li>
          <strong>Usuario ${index + 1}</strong><br>
          Nombre: ${usuario.nombre}<br>
          Correo: ${usuario.correo}<br>
          Edad: ${usuario.edad}
        </li><br>
      `;
    });
    html += "</ul>";
    resultado.innerHTML = html;
  } else {
    resultado.innerHTML = "No hay datos almacenados.";
  }
}

const btn = document.getElementById("btnUbicacion");
const resultado = document.getElementById("resultado");

// Crear el Worker
const worker = new Worker("worker.js");

btn.addEventListener("click", () => {
  if ("geolocation" in navigator) {
    resultado.textContent = "Obteniendo ubicación...";

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        // Enviar latitud y longitud al Worker
        worker.postMessage({ lat, lon });
      },
      (error) => {
        resultado.textContent = "Error: " + error.message;
      }
    );
  } else {
    resultado.textContent = "Tu navegador no soporta geolocalización.";
  }
});

// Recibir respuesta del Worker
worker.onmessage = function (e) {
  resultado.textContent = e.data;
};

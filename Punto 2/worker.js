onmessage = function(e) {
  const { lat, lon } = e.data;

  // Simular procesamiento: construir mensaje de texto
  const mensaje = `📌 Tus coordenadas actuales son:\nLatitud: ${lat.toFixed(5)}\nLongitud: ${lon.toFixed(5)}`;

  // Devolver al hilo principal
  postMessage(mensaje);
};

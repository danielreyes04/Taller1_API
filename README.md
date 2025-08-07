# Andres Toledo, Benjamin Gonzales, Daniel Reyes y Sebastian Urrego

# 🌐 Proyecto Web - Integración de APIs y Funcionalidades Avanzadas

Este proyecto web demuestra el uso de varias APIs del navegador para construir una aplicación interactiva con funcionalidades modernas. Se divide en tres puntos principales:

---

## ✅ Punto 1: Validación y almacenamiento de datos del usuario

- Formulario con campos: **Nombre**, **Correo electrónico** y **Edad**.
- Validación con la API de validación del navegador:
  - Todos los campos deben estar completos.
  - El correo debe tener formato válido.
  - La edad debe ser mayor a 18 años.
- Los datos validados se guardan en `localStorage`.
- Un botón permite visualizar los datos almacenados.

📁 Archivo relacionado: `index.html` y `formulario.js`

---

## 📍 Punto 2: Geolocalización y procesamiento con Web Worker

- Se obtiene la **ubicación actual del usuario** (latitud y longitud).
- Las coordenadas se envían a un **Web Worker**, que las procesa (por ejemplo, genera una cadena de texto descriptiva).
- El resultado se devuelve al hilo principal y se muestra en pantalla.

📁 Archivos relacionados:  
- `geolocalizacion.html`  
- `geolocalizacion.js`  
- `worker.js`

---

## 🔍 Punto 3: Búsqueda dinámica, historial y consumo de datos externos

- Barra de búsqueda para ingresar palabras clave.
- Cada búsqueda se guarda con `history.pushState`.
- Se puede retroceder entre búsquedas con `history.back()`.
- Se consulta la API pública:
  - [JSONPlaceholder](https://jsonplaceholder.typicode.com/posts)
  - [Wikipedia REST API](https://www.mediawiki.org/wiki/API:REST_API)
- Los resultados se filtran y se muestran dinámicamente.

📁 Archivos relacionados:  
- `busqueda.html`  
- `busqueda.js`

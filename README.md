# Andres Toledo, Benjamin Gonzales, Daniel Reyes y Sebastian Urrego

# 🌐  Tarea aquitectura de software - Integración de APIs y Funcionalidades Avanzadas

Esta tarea demuestra el uso de varias APIs del navegador y externas para construir una aplicación interactiva con funcionalidades modernas. Está dividido en dos partes:

---

## 🧩 Primera Parte - Funcionalidades con APIs del navegador

### ✅ Punto 1: Validación y almacenamiento de datos del usuario

- Formulario con campos: **Nombre**, **Correo electrónico** y **Edad**.
- Validación mediante la API nativa del navegador:
  - Todos los campos deben estar completos.
  - El correo debe tener un formato válido.
  - La edad debe ser mayor a 18 años.
- Los datos validados se guardan en `localStorage`.
- Un botón permite visualizar los datos almacenados.

📁 Archivos: `index.html`, `formulario.js`

---

### 📍 Punto 2: Geolocalización y procesamiento con Web Worker

- Se obtiene la **ubicación actual del usuario** (latitud y longitud).
- Las coordenadas se envían a un **Web Worker**, que las procesa y retorna una respuesta (por ejemplo, una cadena descriptiva).
- El resultado se muestra en la interfaz.

📁 Archivos: `geolocalizacion.html`, `geolocalizacion.js`, `worker.js`

---

### 🔍 Punto 3: Búsqueda dinámica, historial y consumo de datos externos

- Búsqueda interactiva de texto con barra de entrada.
- Cada término buscado se guarda mediante `history.pushState`.
- Permite retroceder con `history.back()`.
- Consultas a APIs públicas:
  - [JSONPlaceholder](https://jsonplaceholder.typicode.com/posts)
  - [Wikipedia REST API](https://www.mediawiki.org/wiki/API:REST_API)
- Resultados mostrados de forma dinámica y filtrada.

📁 Archivos: `busqueda.html`, `busqueda.js`

---

## 🚀 Segunda Parte - Aplicación web con APIs de la NASA

Esta aplicación web utiliza múltiples APIs públicas de la NASA para consultar, procesar y visualizar información científica de forma interactiva. Los módulos implementados son:

---

### 📸 Módulo 1: Astronomy Picture of the Day (APOD)

- Consulta imágenes astronómicas de fechas específicas.
- Cada imagen incluye:
  - **Título**
  - **Fecha**
  - **Explicación científica**
- Solo se muestran resultados que correspondan a imágenes (no videos).
- Uso de `fetch` para consumir la API y construir dinámicamente los elementos en el DOM.

🔗 API: [NASA APOD](https://api.nasa.gov/)

---

### 🛰️ Módulo 2: Capas Satelitales (WMS)

- Generación manual de URLs para acceder a imágenes satelitales en formato WMS.
- Se integran las siguientes capas:
  - Color real
  - Temperatura superficial
  - Aerosoles
  - Nubes
- Las imágenes se muestran con descripciones explicativas en la interfaz.

🧩 Ejemplo de uso de URLs personalizadas con parámetros WMS.

---

### 🔴 Módulo 3: Mars Rover Photos (Curiosity)

- Consulta de fotografías capturadas por el rover **Curiosity** en días marcianos (`sols`).
- Para cada foto se muestra:
  - Imagen
  - Nombre del rover
  - Nombre de la cámara utilizada
- Los datos se procesan desde JSON y se construye la interfaz dinámicamente.

🔗 API: [NASA Mars Rover Photos](https://api.nasa.gov/)

---

### ⚙️ Módulo 4: NASA TechTransfer (Patentes tecnológicas)

- Consulta de patentes tecnológicas desarrolladas por la NASA.
- Para cada patente se muestra:
  - Imagen ilustrativa
  - Descripción funcional (contenido HTML limpiado)
- Se utiliza `fetch` para obtener los datos y se depura el contenido HTML para mostrarlo limpio en la interfaz.

🔗 API: [NASA TechTransfer](https://api.nasa.gov/)

---

## 🔧 Tecnologías utilizadas

- HTML5, CSS3 y JavaScript (vanilla)
- APIs del navegador:
  - Validación de formularios
  - LocalStorage
  - Geolocalización
  - Web Workers
  - History API
- APIs externas:
  - JSONPlaceholder
  - Wikipedia REST API
  - NASA APOD
  - NASA Mars Rover Photos
  - NASA TechTransfer
  - NASA WMS Layers (URLs manuales)

---

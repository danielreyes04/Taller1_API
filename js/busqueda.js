document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("busquedaInput");

    // Si se carga con una búsqueda previa
    if (history.state && history.state.termino) {
        input.value = history.state.termino;
        realizarBusqueda(history.state.termino);
    }

    // Manejar retrocesos con popstate
    window.addEventListener("popstate", (e) => {
        if (e.state && e.state.termino) {
        input.value = e.state.termino;
        realizarBusqueda(e.state.termino);
        }
    });
    });

function buscar() {
    const termino = document.getElementById("busquedaInput").value.trim();
    if (!termino) return;

    history.pushState({ termino }, "", `?busqueda=${encodeURIComponent(termino)}`);
    realizarBusqueda(termino);
    }

function realizarBusqueda(termino) {
    const resultadosDiv = document.getElementById("resultados");
    resultadosDiv.innerHTML = "<p>Buscando...</p>";

    const postsURL = `https://jsonplaceholder.typicode.com/posts`;
    const wikiURL = `https://es.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(termino)}`;

    Promise.all([
        fetch(postsURL).then(res => res.json()),
        fetch(wikiURL).then(res => res.ok ? res.json() : null)
    ])
    .then(([posts, wiki]) => {
        const filtrados = posts.filter(post =>
        post.title.toLowerCase().includes(termino.toLowerCase()) ||
        post.body.toLowerCase().includes(termino.toLowerCase())
        );

    let html = `<h3>Resultados para: <em>${termino}</em></h3>`;

        // Posts
        if (filtrados.length > 0) {
        html += "<h4>Publicaciones encontradas:</h4>";
        filtrados.forEach(p => {
            html += `
            <div class="resultado">
                <strong>${p.title}</strong><br>
                <p>${p.body}</p>
            </div>
            `;
        });
        } else {
        html += "<p>No se encontraron publicaciones que coincidan.</p>";
        }

        // Wikipedia
        if (wiki && wiki.extract) {
        html += `
            <h4>Resumen en Wikipedia:</h4>
            <div class="resultado">
            <strong>${wiki.title}</strong><br>
            <p>${wiki.extract}</p>
            <a href="https://es.wikipedia.org/wiki/${encodeURIComponent(termino)}" target="_blank">Ver en Wikipedia</a>
            </div>
        `;
        } else {
        html += "<p>No se encontró información en Wikipedia.</p>";
        }

    resultadosDiv.innerHTML = html;
    })
    .catch(err => {
        resultadosDiv.innerHTML = "<p>Error al obtener resultados. Intenta de nuevo.</p>";
        console.error(err);
    });
}

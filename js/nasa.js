    const NASA_KEY = '4fhmWUqUNgiO0HJdvLyHhMn16B8obq5PjZ0BzRA5'; // Agreguen su API aqui

    function showModule(id) {
    document.querySelectorAll('.module').forEach(mod => mod.style.display = 'none');
    document.getElementById(id).style.display = 'block';
    }

    async function fetchMultipleAPOD() {
    const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}&count=4`);
    const data = await res.json();
    const container = document.getElementById('apodResult');
    container.innerHTML = '';

    data.forEach(item => {
        if (item.media_type === 'image') {
        container.innerHTML += `
            <div class="item">
            <h3>${item.title}</h3>
            <img src="${item.url}" alt="APOD">
            <p>${item.explanation}</p>
            </div>
        `;
        }
    });
    }

    function fetchWMSLayers() {
    const layers = [
        { name: "Color Real", layer: "MODIS_Terra_CorrectedReflectance_TrueColor" },
        { name: "Temperatura de Superficie", layer: "MODIS_Aqua_Land_Surface_Temp_Day" },
        { name: "Aerosoles", layer: "MODIS_Terra_Aerosol" },
        { name: "Nubes", layer: "MODIS_Terra_Cloud_Top_Temp_Day" }
    ];
    const baseURL = 'https://gibs.earthdata.nasa.gov/wms/epsg4326/best/wms.cgi';
    const day = new Date().toISOString().split('T')[0];
    let html = '';
    layers.forEach(l => {
        const url = `${baseURL}?service=WMS&request=GetMap&layers=${l.layer}&styles=&format=image/jpeg&transparent=true&version=1.1.1&height=450&width=500&srs=EPSG:4326&bbox=-180,-90,180,90&time=${day}`;
        html += `
        <div class="item">
            <h3>${l.name}</h3>
            <img src="${url}" alt="${l.name}">
            <p>Imagen satelital de ${l.name} (${day})</p>
        </div>
        `;
    });
    document.getElementById('wmsResult').innerHTML = html;
    }

    async function fetchMarsPhotos() {
    const sol = document.getElementById('sol').value;
    const res = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&api_key=${NASA_KEY}`);
    const data = await res.json();
    const container = document.getElementById('marsResult');
    container.innerHTML = '';
    if (data.photos.length > 0) {
        data.photos.slice(0, 4).forEach(photo => {
        container.innerHTML += `
            <div class="item">
            <img src="${photo.img_src}" alt="Foto de Marte">
            <p><strong>Cámara:</strong> ${photo.camera.full_name}</p>
            <p><strong>Vehículo:</strong> ${photo.rover.name}</p>
            </div>
        `;
        });
    } else {
        container.innerHTML = '<p>No hay fotos para ese sol.</p>';
    }
    }

    async function fetchTechTransfer() {
    const res = await fetch(`https://api.nasa.gov/techtransfer/patent/?engine&api_key=${NASA_KEY}`);
    const data = await res.json();
    const container = document.getElementById('techResult');
    container.innerHTML = '';
    data.results.slice(0, 4).forEach(item => {
        const title = item[1];
        const description = item[3].replace(/<[^>]*>?/gm, ''); // Clean HTML
        const image = item[10];
        container.innerHTML += `
        <div class="item">
            <h3>${title}</h3>
            <img src="${image}" alt="patente">
            <p>${description}</p>
        </div>
        `;
    });
    }

    // Cargar WMS al inicio (invisible)
    fetchWMSLayers();
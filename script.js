// Initialize map (Centering on Dresden, Germany for example)
const map = L.map('map').setView([51.0504, 13.7373], 13);

// Add OpenStreetMap tiles
/*
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);
 */

// Add Historic Tiles
L.tileLayer.wms('https://wms.kartenforum.slub-dresden.de/map/stadtplan_dresden', {
    layers: 'stadtplan_dresden',
    format: 'image/png',
    transparent: true,
    attribution: '© SLUB Dresden'
}).addTo(map);

function updateSidebar(loc) {
    // 1. Update basic text
    document.getElementById('side-title').innerText = loc.name;
    document.getElementById('side-date').innerHTML = `<i>${loc.date}</i>`;
    document.getElementById('side-content').innerText = loc.info;

    // 2. Handle the Image
    const imgElement = document.getElementById('side-image');
    if (loc.imageUrl) {
        imgElement.src = loc.imageUrl;
        imgElement.style.display = "block";
    } else {
        imgElement.style.display = "none";
    }

    // 3. Handle multiple Sources
    const listEl = document.getElementById('side-sources-list');
    listEl.innerHTML = ""; // Clear old sources

    const sourcesContainer = document.getElementById('sources-container');
    if (loc.sources && loc.sources.length > 0) {
        sourcesContainer.style.display = 'block';
    } else {
        sourcesContainer.style.display = 'none';
    }

    if (loc.sources && loc.sources.length > 0) {
        loc.sources.forEach(source => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = source.url;
            a.target = "_blank";
            a.innerText = source.label;
            li.appendChild(a);
            listEl.appendChild(li);
        });
    }
}

// Loop through locations and add markers or shapes
locations.forEach(loc => {
    // If location has a shape, add shape instead of marker
    if (loc.shape) {
        if (loc.shape.type === 'circle') {
            const circle = L.circle(loc.coords, {
                color: 'blue',
                fillColor: '#30f',
                fillOpacity: 0.2,
                radius: loc.shape.radius
            }).addTo(map);

            circle.on('click', () => {
                updateSidebar(loc);
            });
        }
        else if (loc.shape.type === 'polygon') {
            const polygon = L.polygon(loc.shape.coords, {
                color: 'red',
                fillColor: '#ff7800',
                fillOpacity: 0.2
            }).addTo(map);

            polygon.on('click', () => {
                updateSidebar(loc);
            });
        }
    }
    else {
        // No shape defined, add marker as fallback
        const marker = L.marker(loc.coords).addTo(map);
        marker.on('click', () => {
            updateSidebar(loc);
        });
    }
});

// focus map
const bounds = L.latLngBounds(locations.map(loc => loc.coords));
map.fitBounds(bounds, {
    padding: [50, 50],
    maxZoom: 15,
    duration: 0.5
});
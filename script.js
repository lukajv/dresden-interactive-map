// Initialize map (Centering on Dresden, Germany for example)
const map = L.map('map').setView([51.0504, 13.7373], 13);

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add a marker for your research

const locations = [
    {
        name: "Altmarkt",
        coords: [51.0491019, 13.7352104],
        date: "Feb, 1945",
        info: "During the bombing raids, the historic Altmarkt (Old Market) was completely destroyed. " +
            "Reconstruction with a modified square layout began in 1953.",
        imageUrl: "images/Altmarkt.jpg",
        sources: [
            { label: "City of Dresden Portal", url: "https://www.dresden.de/de/tourismus/sehen/sehenswuerdigkeiten/altstadt/altmarkt.php#?searchkey=Altmarkt"}
            ]
    },
    {
        name: "Frauenkirche",
        coords: [51.0519, 13.7415],
        date: "Feb 15, 1945",
        info: "Survived the bombs but collapsed from heat..."
    }
];

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

// Loop through locations and add markers
locations.forEach(loc => {
    const marker = L.marker(loc.coords).addTo(map);
    marker.on('click', () => {
        updateSidebar(loc); // Pass the whole object
    });
});

// focus map
const bounds = L.latLngBounds(locations.map(loc => loc.coords));
map.fitBounds(bounds, { padding: [50, 50] });
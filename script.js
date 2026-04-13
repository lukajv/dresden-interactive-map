// Initialize map (Centering on Dresden, Germany for example)
const map = L.map('map').setView([51.0504, 13.7373], 13);

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add a marker for your research
const dresdenMarker = L.marker([51.0504, 13.7373]).addTo(map);

// Add a popup with your research details
dresdenMarker.bindPopup("<b>The Frauenkirche</b><br>Destroyed in the 1945 firestorm, now a symbol of peace.").openPopup();
// create map
const map = L.map('mapid').setView([-3.7796419, -38.5571208], 15);

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// create icon


L.marker([-3.7796419, -38.5571208])
    .addTo(map)
    .bindPopup('Lar Batista')
    .openPopup();

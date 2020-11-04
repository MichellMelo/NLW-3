// create map
const map = L.map('mapid').setView([-3.7796419, -38.5571208], 15);

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

// create popup overlay
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Tia Julia <a href="/orphanage?id=1 "> <img src="/images/arrow-white.svg"> </a>')

// create and add marker
L.marker([-3.7796419, -38.5571208], { icon })
    .addTo(map)
    .bindPopup(popup)

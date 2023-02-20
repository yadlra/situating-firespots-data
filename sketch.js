let fires;

const imageUrls = [
  'images/aldeaindigenaaukra.jpg',
  'images/itauba.jpg',
  'images/novacanaadenorte.jpg',
  'images/colider.jpg',
  'images/saofelix.jpg'
];

//Load data
function preload() {
  fires = loadTable('data/amazon_fires.csv', 'header', 'csv', () => console.log('CSV data loaded'));
}

function setup() { 
  noCanvas();
  var map = L.map('mapid').setView([-16.350000, -56.666668], 8);

  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  // Create a Leaflet marker and popup
  const popup = L.popup({ className: 'custom-popup' });
  const markers = [
    L.marker([-7.272871772135209, -51.73722660944998]),
    L.marker([-11.093895, -56.204235]),
    L.marker([-11.018350, -56.162919]),
    L.marker([-10.646819, -55.591126]),
    L.marker([-6.767477,  -52.125310])
  ];

  for (let i = 0; i < markers.length; i++) {
    const marker = markers[i];
    const image = document.createElement('img');
    image.src = imageUrls[i];
    image.style.maxWidth = '400px';
    image.style.maxHeight = '400px';
    const popup = L.popup({ className: 'custom-popup' }).setContent(image);
    marker.bindPopup(popup);
    marker.addTo(map);
  }
}

var css = '.custom-popup .leaflet-popup-content-wrapper {background: transparent; border: none;}';
var style = document.createElement('style');
if (style.styleSheet) {
    style.styleSheet.cssText = css;
} else {
    style.appendChild(document.createTextNode(css));
}
document.getElementsByTagName('head')[0].appendChild(style);

function draw() { 

}


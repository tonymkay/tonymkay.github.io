
// Initialize the map with zoomControl set to false
var map = L.map('map').setView([1.2921, 36.8219], 6);

// Add a tile layer (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);



// Initializes the Leaflet.draw control
var drawnItems = new L.FeatureGroup();
map.addLayer(drawnItems);
var drawControl = new L.Control.Draw({
    edit: {
        featureGroup: drawnItems
    },
});
map.addControl(drawControl);

// Create a legend (list) element to display the drawn shapes
var legend = L.control({ position: 'bottomright' });

// Listen for events (adds the drawn shape to the drawn items collection and updates the legend)
map.on('draw:created', function (e) {
    var layer = e.layer;
    drawnItems.addLayer(layer);

    // Update the legend with information about the drawn shape
    var shapeType = e.layerType;
    var shapeId = L.stamp(layer);
    var legendText = '<p>' + shapeType + ' #' + shapeId + '</p';
    document.querySelector('.legend').innerHTML += legendText;
});

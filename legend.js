
var legend = L.control({ position: 'bottomright' });
var addedLabels = []; // Maintain a list of added marker labels

legend.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'legend');
    this._div.innerHTML = '<h4>Legend</h4>';
    return this._div;
};

legend.addTo(map);

function startDrawingMarker(iconPath, label) {
    var customIcon = L.icon({
        iconUrl: iconPath,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
    });

    drawControl.setDrawingOptions({
        marker: {
            icon: customIcon,
        },
    });

    var markerHandler = drawControl._toolbars.draw._modes.marker.handler;

    // Listen for the marker creation event
    map.on('draw:created', function (e) {
        var type = e.layerType,
            layer = e.layer;

        if (type === 'marker') {
            // Disable drawing mode after creating a marker
            markerHandler.disable();

            // Use the label provided or default to 'Marker'
            label = label || getLabelFromIconName(iconPath);

            // Add a function to extract label from the icon name
            function getLabelFromIconName(iconPath) {
                // Assuming iconPath is in the format 'icons/icon_name.png'
                var iconName = iconPath.split('/').pop().split('.').shift();
                // Convert the icon name to a more user-friendly label (e.g., 'icon_name' to 'Icon Name')
                return iconName.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
            }

            // Check if the label has already been added to the legend
            if (addedLabels.indexOf(label) === -1) {
                // Add the label to the list of added labels
                addedLabels.push(label);

                // Add the legend entry for the drawn marker
                legend._div.innerHTML += '<img src="' + iconPath + '" alt="' + label + '" style="width:20px;height:20px;"> ' + label + '<br>';
            }
        }
    });

    // Enable the draw mode for markers
    markerHandler.enable();
}

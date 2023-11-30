// Function to check if a legend item with the given label already exists
function isLegendItemExists(label) {
    var legendItems = document.querySelectorAll('.legend-label');
    for (var i = 0; i < legendItems.length; i++) {
        if (legendItems[i].textContent === label) {
            return true;
        }
    }
    return false;
}

// Function to add a legend item based on the draw function used
function addLegendItem(iconUrl, label) {
    // Check if the legend item already exists
    if (!isLegendItemExists(label)) {
        // Get the legend division
        var legendDiv = document.getElementById('legend');

        // Create a new legend item
        var legendItem = document.createElement('div');
        legendItem.className = 'legend-item';

        // Create an image element for the icon
        var iconImg = document.createElement('img');
        iconImg.src = iconUrl;
        iconImg.className = 'legend-icon';

        // Create a label element for the draw function name
        var labelElement = document.createElement('span');
        labelElement.className = 'legend-label';
        labelElement.textContent = label;

        // Append the icon and label to the legend item
        legendItem.appendChild(iconImg);
        legendItem.appendChild(labelElement);

        // Append the legend item to the legend division
        legendDiv.appendChild(legendItem);
    }
}


map.on('draw:created', function(event) {
    // Get the layer that was added to the map
    var layer = event.layer;

    // Get the icon URL and label based on the draw function
    var iconUrl, label;

    if (layer instanceof L.Marker) {
        iconUrl = 'icons/church.png'; 
        label = 'Church'; 
    } else if (layer instanceof L.CircleMarker) {
        iconUrl = 'icons/hospital.png'; 
        label = 'Hospital';
    }

    // Add legend item
    if (iconUrl && label) {
        addLegendItem(iconUrl, label);
    }
    
    // Add the layer to the map
    layer.addTo(map);
});

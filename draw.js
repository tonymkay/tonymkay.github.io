function startDrawingMarker(iconPath) {
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

    drawControl._toolbars.draw._modes.marker.handler.enable();
}

function startDrawingPoint() {
    startDrawingMarker('icons/marker.png');
    addLegendItem('icons/marker.png', 'Point');
}

function startDrawingTree() {
    startDrawingMarker('icons/tree.png');
    addLegendItem('icons/tree.png', 'Tree');
}

function startDrawingHospital() {
    startDrawingMarker('icons/hospital.png');
    addLegendItem('icons/hospital.png', 'Hospital');
}

function startDrawingChurch() {
    startDrawingMarker('icons/church.png');
    addLegendItem('icons/church.png', 'Church');
}

function startDrawingMosque() {
    startDrawingMarker('icons/mosque.png');
    addLegendItem('icons/mosque.png', 'Mosque');
}

function startDrawingPolice() {
    startDrawingMarker('icons/police.png');
    addLegendItem('icons/police.png', 'Police');
}

function startDrawingStore() {
    startDrawingMarker('icons/store.png');
    addLegendItem('icons/Store.png', 'Store');
}

function startDrawingAirport() {
    startDrawingMarker('icons/airplane.png');
    addLegendItem('icons/airplane.png', 'Airport');
}


function startDrawingHighway() {
    startDrawingMarker('icons/highway.png');
    addLegendItem('icons/highway.png', 'Highway');
    // draw polyline functionality
    drawControl.setDrawingOptions({
        polyline: {
            shapeOptions: {
                color: 'red',
                weight: 3,
            },
        },
    });
    drawControl._toolbars.draw._modes.polyline.handler.enable();
}

function startDrawingRoad() {
    startDrawingMarker('icons/road.png');
    addLegendItem('icons/road.png', 'Road');
    // draw polyline functionality
    drawControl.setDrawingOptions({
        polyline: {
            shapeOptions: {
                color: 'red',
                weight: 2,
            },
        },
    });
    drawControl._toolbars.draw._modes.polyline.handler.enable();
}

function startDrawingTrack() {
    startDrawingMarker('icons/track.png');
    addLegendItem('icons/track.png', 'Track');
    // draw polyline functionality
    drawControl.setDrawingOptions({
        polyline: {
            shapeOptions: {
                color: 'black',
                weight: 2,
                dashArray: '5, 10', // Adjust the dash array as needed (e.g., '5, 10' means 5 pixels on, 10 pixels off)
            },
        },
    });
    drawControl._toolbars.draw._modes.polyline.handler.enable();
}

function startDrawingRiver() {
    startDrawingMarker('icons/river.png');
    addLegendItem('icons/river.png', 'River');
    // draw polyline functionality
    drawControl.setDrawingOptions({
        polyline: {
            shapeOptions: {
                color: 'lightblue',
                weight: 2,
            },
        },
    });
    drawControl._toolbars.draw._modes.polyline.handler.enable();
}

function startDrawingRailway() {
    startDrawingMarker('icons/railway.png');
    addLegendItem('icons/railway.png', 'Railway');
    // draw polyline functionality
    drawControl.setDrawingOptions({
        polyline: {
            shapeOptions: {
                color: 'brown',
                dashArray: '5, 5, 2', // Adjust the dash array as needed (e.g., '5, 10' means 5 pixels on, 10 pixels off)
            },
        },
    });
    drawControl._toolbars.draw._modes.polyline.handler.enable();
}

function startDrawingBoundary() {
    startDrawingMarker('icons/boundary.png');
    addLegendItem('icons/boundary.png', 'Boundary');
    // draw polyline functionality
    drawControl.setDrawingOptions({
        polyline: {
            shapeOptions: {
                color: 'black',
                dashArray: '5, 10, 0.001',   // Alternating dashes and circles
                lineCap: 'round', 
            },  
        },
    });
    drawControl._toolbars.draw._modes.polyline.handler.enable();
}


function startDrawingForest() {
    startDrawingMarker('icons/forest.png');
    addLegendItem('icons/forest.png', 'Forest');
    // draw polygon functionality
    drawControl.setDrawingOptions({ 
        polygon: {
            shapeOptions: {
                color: 'green',
                fillColor: 'green'
            }

        } 
    });
    drawControl._toolbars.draw._modes.polygon.handler.enable();
}

function startDrawingLake() {
    startDrawingMarker('icons/lake.png');
    addLegendItem('icons/lake.png', 'Lake');
    // draw polygon functionality
    drawControl.setDrawingOptions({ 
        polygon: {
            shapeOptions: {
                color: 'blue',
                fillColor: 'blue'
            }

        } 
    });
    drawControl._toolbars.draw._modes.polygon.handler.enable();
}

function startDrawingPond() {
    startDrawingMarker('icons/pond.png');
    addLegendItem('icons/pond.png', 'Pond');
    // draw polygon functionality
    drawControl.setDrawingOptions({ 
        polygon: {
            shapeOptions: {
                color: 'lightblue',
                fillColor: 'lightblue'
            }

        } 
    });
    drawControl._toolbars.draw._modes.polygon.handler.enable();
}

function startDrawingPark() {
    startDrawingMarker('icons/park.png');
    addLegendItem('icons/park.png', 'Park');
    // draw polygon functionality
    drawControl.setDrawingOptions({ 
        polygon: {
            shapeOptions: {
                color: 'darkgreen',
                fillColor: 'darkgreen'
            }

        } 
    });
    drawControl._toolbars.draw._modes.polygon.handler.enable();
}

function startDrawingFence() {
    startDrawingMarker('icons/fence.png');
    addLegendItem('icons/fence.png', 'Fence');
    // draw polygon functionality
    drawControl.setDrawingOptions({ 
        polygon: {
            shapeOptions: {
                color: 'black',
                fillColor: 'transparent',
                weight: 2,
            }

        } 
    });
    drawControl._toolbars.draw._modes.polygon.handler.enable();
}
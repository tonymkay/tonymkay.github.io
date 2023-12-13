
// Initialize the map with zoomControl set to false
var map = L.map('map').setView([1.2921, 36.8219], 6);

// Add a tile layer (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);



// Initializing Leaflet.draw control
var drawnItems = new L.FeatureGroup();
map.addLayer(drawnItems);

var drawControl = new L.Control.Draw();
map.addControl(drawControl);





const userName = document.getElementById("user-name");

const sessionData = JSON.parse(localStorage.getItem("wondermap_session"));

userName.innerHTML = sessionData?.email.split("@")[0] || "Unknown User";


const mapName = document.getElementById("title");

const session2Data = JSON.parse(localStorage.getItem("map_session"));

mapName.innerHTML = session2Data?.name || "Unknown User";

const sidebarBtn1 = document.getElementById("sidebutton1");
sidebarBtn1.addEventListener('click', function(){
    window.location.href = "/mapname.html"
})

const sidebarBtn2 = document.getElementById("sidebutton2");
sidebarBtn2.addEventListener('click', function(){
    window.location.href = "/projects.html"
})

const sidebarBtn3 = document.getElementById("sidebutton3");
sidebarBtn3.addEventListener('click', function(){
    window.location.href = "/tutorials.html"
})

const logoBtn = document.getElementById("logo");
logoBtn.addEventListener('click', function(){
    window.location.href = "/index.html"
})
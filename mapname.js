const proceedBtn = document.getElementById("proceed_button");

const session = "map_session";

proceedBtn.addEventListener('click', function(){
    const mapName = document.getElementById("map-name").value

    if(mapName.length < 2){
        alert("Invalid name")
        return
    }

    localStorage.setItem(session, JSON.stringify({name: mapName}));

    window.location.href = "/app.html"
});


const mapName = document.getElementById("title");

const session2Data = JSON.parse(localStorage.getItem("map_session"));

userName.innerHTML = session2Data?.name || "Unknown User";
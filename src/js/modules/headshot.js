
window.headShotType = 1;

window.headShot_OBJ = {

    toggleCam: function(hType) {
        
        console.log("-- headshot toggle cam: " + hType);

        if(hType == "skully") {
            document.getElementById("headshot").classList.remove("headshot");
            document.getElementById("headshot").classList.add("skully");
            window.headShotType = 2;
            voicebars.restart();
            console.log("set to skully");
        } else if (hType == "headshot") {
            document.getElementById("headshot").classList.add("headshot");
            document.getElementById("headshot").classList.remove("skully");
            window.headShotType = 1;
            voicebars.restart();
            console.log("set to headshot");
        }

    },

    init: function() {
        console.log("headShot_OBJ");
    }
}

headShot_OBJ.init();
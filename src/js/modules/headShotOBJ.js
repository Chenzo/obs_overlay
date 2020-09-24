const voicebarsOBJ = require("./voicebarsOBJ");

headShotOBJ = {

    headShotType: 1,

    toggleCam: function(hType) {
        
        //console.log("-- headshot toggle cam: " + hType);

        if(hType == "skully") {
            document.getElementById("headshot").classList.remove("headshot");
            document.getElementById("headshot").classList.add("skully");
            headShotOBJ.headShotType = 2;
            voicebarsOBJ.restart();
            //console.log("set to skully");
        } else if (hType == "headshot") {
            document.getElementById("headshot").classList.add("headshot");
            document.getElementById("headshot").classList.remove("skully");
            headShotOBJ.headShotType = 1;
            voicebarsOBJ.restart();
            //console.log("set to headshot");
        }

    },


    init: function() {
        console.log("headShotOBJ init");
    }
}



module.exports = { 
    init: headShotOBJ.init,
    headShotType: headShotOBJ.headShotType,
    toggleCam: headShotOBJ.toggleCam
};

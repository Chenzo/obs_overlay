
import {voicebarsOBJ} from './voicebarsOBJ.js';

let headShotType;

export const headShotOBJ = (() => {

    

    const toggleCam = function(hType) {
    

        if(hType == "skully") {
            document.getElementById("headshot").classList.remove("headshot");
            document.getElementById("headshot").classList.add("skully");
            headShotType = 2;
            voicebarsOBJ.restart(headShotType);
            //console.log("set to skully");
        } else if (hType == "headshot") {
            document.getElementById("headshot").classList.add("headshot");
            document.getElementById("headshot").classList.remove("skully");
            headShotType = 1;
            voicebarsOBJ.restart(headShotType);
            //console.log("set to headshot");
        }

    };


    const init = function() {
        console.log("headShotOBJ init");
    };

    return {
        init: init,
        headShotType: headShotType,
        toggleCam: toggleCam
    };
})();





displayOBJ = {

    addCrew: function(crewMember) {
        console.log("ADD CREW : " + crewMember);
        var crewDiv = document.getElementById(crewMember);
        crewDiv.classList.add("active");
        //client.say(channel, crewMember + ' added as crew member!');
    },

    removeCrew: function(crewMember) {
        console.log("REMOVE CREW : " + crewMember);
        var crewDiv = document.getElementById(crewMember);
        crewDiv.classList.remove("active");
        //client.playaudiosay(channel, crewMember + ' added as crew member!');
    },

    getCrew: function() {
        var crewlist = document.getElementById("crew").querySelectorAll(".crewmate.active"), i; 
        var crewArray = [];
        for (i = 0; i < crewlist.length; ++i) {
        crewArray.push(crewlist[i].id);
        }
        return crewArray;
    },

    playAudio: function(audioName) {
        if (audioName == "3") {
            var myAudio = document.getElementById('um3');
            myAudio.play();
            //client.say(channel, '3');
        } else if (audioName == "digs") {
            var myAudio = document.getElementById('digs');
            myAudio.play();
        } else if (audioName == "babyshark") {
            var myAudio = document.getElementById('babyshark');
            myAudio.play();
        } else if (audioName == "sharkbait") {
            var myAudio = document.getElementById('sharkbait');
            myAudio.play();
        } 
    },

    addShipSunk: function(shipType) {
        if (shipType == "galleon" || shipType == "sloop" || shipType == "brig" ) {
            console.log("ADDING SINKING BOAT");
            var sunksDiv = document.getElementById("sunks"); 
            var boat = document.createElement('div');
            var type = shipType;
            boat.classList.add("ship-sinker","sink");
            boat.innerHTML = '<div class="aship float '+ type + '"><img src="images/sunk/'+type+'.png" /></div>';
            sunksDiv.appendChild(boat);
            //client.say(channel, shipType + ' sunk!');
        }
    }


}





module.exports = { 
    addCrew: displayOBJ.addCrew,
    getCrew: displayOBJ.getCrew,
    removeCrew: displayOBJ.removeCrew,
    playAudio: displayOBJ.playAudio,
    addShipSunk: displayOBJ.addShipSunk
};

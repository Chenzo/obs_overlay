


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
        } else if (audioName == "carl") {
            var myAudio = document.getElementById('carl');
            myAudio.play();
        } 
        else if (audioName == "wind") {
            var myAudio = document.getElementById('wind');
            myAudio.play();
        } 
        else if (audioName == "chunky") {
            var myAudio = document.getElementById('chunky');
            myAudio.play();
        } 
        else if (audioName == "fire") {
            var myAudio = document.getElementById('fire');
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
    },

    adjustAlignment: function(amount) {
        console.log("AMMOUJT" + amount);
        var skullmeter = document.querySelector("#skullmeter");
        var style = window.getComputedStyle(skullmeter);
        var matrix = new WebKitCSSMatrix(style.webkitTransform);
        var currentAlignment = matrix.m41;
        //console.log('translateX: ', matrix.m41);

        var newAlignment = parseInt(currentAlignment) + parseInt(amount);
        console.log(newAlignment);
        var val = newAlignment + "px";
        skullmeter.style.transform = "translateX(" + val + ")";
    },

    newFollowerAlert: function(followName) {
        //#new_follower_pop
        var new_follower_pop = document.querySelector("#new_follower_pop");
        var nft = document.querySelector("#newfollow_text");
        nft.textContent=followName;
        new_follower_pop.classList.add("onDisplay");
        var rm = setTimeout(function() {
            new_follower_pop.classList.remove("onDisplay");
            new_follower_pop.classList.add("offDisplay");
            var mr = setTimeout(function() {
                new_follower_pop.classList.remove("offDisplay");
            }, 1000);
        }, 4000);
    },

    newSubAlert: function(subName, sublevel) {
        var new_sub_pop = document.querySelector("#new_sub");
        var nst = document.querySelector("#sub_text .name");
        nst.textContent=subName;
        new_sub_pop.classList.add("onDisplay");
        var rm = setTimeout(function() {
            var nst = document.querySelector("#sub_text");
            nst.classList.add("animate__tada");
        }, 3500);
        var rm = setTimeout(function() {
            new_sub_pop.classList.remove("onDisplay");
        }, 7000);
    }

}





module.exports = { 
    addCrew: displayOBJ.addCrew,
    getCrew: displayOBJ.getCrew,
    removeCrew: displayOBJ.removeCrew,
    playAudio: displayOBJ.playAudio,
    addShipSunk: displayOBJ.addShipSunk,
    adjustAlignment: displayOBJ.adjustAlignment,
    newFollowerAlert: displayOBJ.newFollowerAlert,
    newSubAlert: displayOBJ.newSubAlert
};

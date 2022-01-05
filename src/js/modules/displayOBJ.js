export const displayOBJ = (() => {

    const addCrew = function(crewMember) {
        console.log("ADD CREW : " + crewMember);
        var crewDiv = document.getElementById(crewMember);
        crewDiv.classList.add("active");
        //client.say(channel, crewMember + ' added as crew member!');
    };

    const removeCrew = function(crewMember) {
        console.log("REMOVE CREW : " + crewMember);
        var crewDiv = document.getElementById(crewMember);
        crewDiv.classList.remove("active");
        //client.playaudiosay(channel, crewMember + ' added as crew member!');
    };

   const getCrew = function() {
        var crewlist = document.getElementById("crew").querySelectorAll(".crewmate.active"), i; 
        var crewArray = [];
        for (i = 0; i < crewlist.length; ++i) {
        crewArray.push(crewlist[i].id);
        }
        return crewArray;
    };

    const playAudio = function(audioName) {

        console.log(audioName)

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
        else if (audioName == "sosalty") {
            var myAudio = document.getElementById('sosalty');
            myAudio.play();
        } 
        else if (audioName == "forgiveness") {
            var myAudio = document.getElementById('forgiveness');
            myAudio.play();
        } 
        else if (audioName == "scooty") {
            var myAudio = document.getElementById('scooty');
            myAudio.play();
        } 
        else if (audioName == "warrenty") {
            console.log("HEY THERE")
            var myAudio = document.getElementById('warrenty');
            myAudio.play();
        } 
    };

    const addSnake = function(snakeCount) {
        console.log("ADDING snake! George the: " + snakeCount);
        console.log(romanize(snakeCount));
        var george = document.getElementById("george"); 
        george.classList.add("alive");
        document.getElementById("gcount_1").innerHTML = romanize(snakeCount);
        document.getElementById("gcount_2").innerHTML = romanize(snakeCount);
    }

    const removeSnake = function() {
        var george = document.getElementById("george"); 
        george.classList.remove("alive");
    }

    const addShipSunk = function(shipType) {
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
    };

    const adjustAlignment = function(amount) {
        console.log("AMMOUJNT" + amount);
        var skullmeter = document.querySelector("#skullmeter");
        /* var style = window.getComputedStyle(skullmeter);
        var matrix = new WebKitCSSMatrix(style.webkitTransform);
        var currentAlignment = matrix.m41;
        //console.log('translateX: ', matrix.m41);

        var newAlignment = parseInt(currentAlignment) + parseInt(amount);
        console.log(newAlignment); */

        //var val = newAlignment + "px";

        let val = parseInt(amount) - 50;
        val = val * 9; //this is to go from -450% to 450% which is the width of the bar.;
        console.log("MOVE THIS MUCH " + val);

        skullmeter.style.transform = "translateX(" + val + "%)";
    };

    const newFollowerAlert = function(followName) {
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
    };

    const newSubAlert = function(subName, sublevel) {
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
    };


    const romanize = function(num) {
        if (isNaN(num))
        return NaN;
        var digits = String(+num).split(""),
            key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
                "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
                "","I","II","III","IV","V","VI","VII","VIII","IX"],
            roman = "",
            i = 3;
        while (i--)
            roman = (key[+digits.pop() + (i * 10)] || "") + roman;
        return Array(+digits.join("") + 1).join("M") + roman;
    }

    return {
        addCrew: addCrew,
        getCrew: getCrew,
        removeCrew: removeCrew,
        playAudio: playAudio,
        addShipSunk: addShipSunk,
        adjustAlignment: adjustAlignment,
        newFollowerAlert: newFollowerAlert,
        newSubAlert: newSubAlert,
        addSnake: addSnake,
        removeSnake: removeSnake
    };
})();



(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
    factory();
}((function () { 'use strict';

    let headShotType = 1;
    let rafId = 0;
    let audioContext, analyser, dataArray, source, canvas;
    let canvas2, ctx, ctx2, width, height, radius, num_items;
    let particles = [];
    let myThing, fftSize, smoothingTimeConstant;

    const voicebarsOBJ = (() => {

        const prepType = function() {

            fftSize = 128;
            smoothingTimeConstant = 0.8;

            if (headShotType == 2) {
                //skull
                smoothingTimeConstant = 0.2;
                fftSize = 64;
            }
        };

        const tick = function() {
            analyser.getByteFrequencyData(dataArray);
            if (headShotType == 2) {

                let i = 0;
                let jawi = i + 109;
                let topi = 13;
                let alf = 0;
                let soundlimit = 8;
                var pastNub = 0;
                var distancelimit = 3;

                var l = dataArray.length;
                var sum = dataArray.reduce(function(a, b){
                    return a + b;
                }, 0);

                var nub = ~~(sum / l);
                document.getElementById("numoutput").innerHTML= nub;

                if (nub > pastNub + distancelimit || nub < pastNub - distancelimit) {
                    pastNub = nub;
                    nub = (nub - soundlimit < 0) ? 0 : nub - soundlimit;
                    jawi = (nub * .4) + 109;
                    topi = 13 - (nub/10);
                    alf = (nub *1.5) * .01;
                }

                if (nub > 50) {
                    document.getElementById("skull_top_open").classList.remove("hidden");
                    document.getElementById("skull_top").classList.add("open");
                    document.getElementById("skull_top_closed").classList.add("hidden");
                } else {
                    document.getElementById("skull_top_open").classList.add("hidden");
                    document.getElementById("skull_top").classList.remove("open");
                    document.getElementById("skull_top_closed").classList.remove("hidden");
                }
                document.getElementById("skull_top").style.top = topi + "px";
                document.getElementById("skull_jaw").style.top = jawi + "px";
                document.getElementById("skull_bg").style.opacity = alf;
            } else {
                drawBars(ctx, dataArray);
                drawBars(ctx2, dataArray);
            }
            rafId = requestAnimationFrame(tick);
            myThing.innerHTML = "rafId: " + rafId;
        };

        const drawBars = function(ctx, dataArray) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        
            for (const [i, s] of dataArray.entries()) {
        
                var p = particles[i];
                var vol = (s < 120) ? s : 121;
                var ss = Math.abs(vol / 2 );
        
                if (typeof p != "undefined") {
                    var x2 = width/2 + Math.cos(p.angle) * (ss + radius);
                    var y2 = height/2 + Math.sin(p.angle) * (ss + radius);
        
                    ctx.beginPath();
                    var gradient = ctx.createRadialGradient(2100,250,20, 250,250,175);
        
                    gradient.addColorStop("0", "#0e2b28");
                    gradient.addColorStop("0.5", "#0e2b28");
                    gradient.addColorStop("1.0", "#267e81"); 
        
                    ctx.strokeStyle = gradient;
                    ctx.lineWidth = 6;
        
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(x2, y2);
                    ctx.stroke();
                } 
        
            }
        };

        const makeAngles = function() {
            
            function radians(deg) {return deg*Math.PI/180;}    
            function distributeAngles(me, total) {
                return me/total * 180 - 90;
            }
        
            for (var i = 0; i < num_items; i++) {
                var angle = radians(distributeAngles(i, num_items));
                particles[i] = {
                    x: width/2 + Math.cos(angle) * radius,
                    y: height/2 + Math.sin(angle) * radius,
                    angle: angle
                };
            }
        };

        const getAudio = function() { 
        
            navigator.mediaDevices.getUserMedia({
                audio: true
            }).then(stream => {
                // Handle the incoming audio stream
                audioContext = new (window.AudioContext ||
                    window.webkitAudioContext)();
                 //this.micDelay = this.audioContext.createDelay(0);
                analyser = audioContext.createAnalyser();
                analyser.minDecibels = -90;
                analyser.maxDecibels = -10;
                analyser.smoothingTimeConstant = smoothingTimeConstant;
                analyser.fftSize = fftSize;
                dataArray = new Uint8Array(analyser.frequencyBinCount);
                //var bufferLength = analyser.frequencyBinCount;
                source = audioContext.createMediaStreamSource(stream);
                //this.micDelay.delayTime.value = this.props.audioDelayTime; //somewhere around 1
                source.connect(analyser);
        
                rafId = requestAnimationFrame(tick);
        
                }, error => {
                // Something went wrong, or the browser does not support getUserMedia
            });
        
        
        };


        const restart = function(hst) {
            console.log("RESETTING");
            console.log(hst);
            headShotType = hst;
            window.cancelAnimationFrame( rafId);
            audioContext.close().then(function() {
                console.log("audioContextClosed");
                init();
            });
        };

        const setInitialValues = function() {
            canvas = document.getElementById("circle-canvas");
            canvas2 = document.getElementById("circle-canvas-2");
            ctx = canvas.getContext('2d');
            ctx2 = canvas2.getContext('2d');
            width = canvas.width;
            height = canvas.height;
            radius = 100;
            num_items = 40;
            myThing = document.getElementById("countdown");
        };

        const init = function() {
            console.log("Voice Bars INIT");
            setInitialValues();
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx2.clearRect(0, 0, canvas.width, canvas.height);
            prepType();
            makeAngles();
            getAudio();
        };


        return {
            init: init,
            restart: restart
        };
    })();

    const configData = {
      channelName : "chenzorama",
      Client_ID : 'do2pfinbp2ykiwsauawxb7vs8d09w3',
      Client_Secret : 'qya1ilrj7i6yblku1impcw2oxcz7vq',
      //OAUTH: 'oauth:xkz8a8qk4f5sjm25wldsowxxwz5rnl',
      OAUTH: `oauth:jm8je5l3fbyu09vmyvrbxio81lm6if`,
      userID: '58652316',
      //server: 'https://fierce-springs-20115.herokuapp.com/',
      server: 'http://localhost:3000/',
      server_port: 3002
    };


    const configModule = (() => {

      const getConfig = function() {
          return configData
      };

    return {
          getConfig: getConfig
      };
    })();

    const configData$1 = configModule.getConfig(); 
    let accessToken = 0;

    const twitchOBJ = (() => {


      const displayFollowers = function(followerData) {
        var followCount = (followerData.data.length < 4) ? followerData.data.length : 3;
        var followHTML = "";
        for (var index = 0; index < followCount; index++) { 
          if (index != 0) {
            followHTML+= ", ";
          }
          followHTML+= "<span>" + followerData.data[index].from_name + "</span>";
        }
        var followElement = document.getElementById("latestFollowers");
        followElement.innerHTML = followHTML;
      };

      const getAccessToken = function() {

        console.log("Getting twitch access token!!");

        fetch('https://id.twitch.tv/oauth2/token?client_id=' + configData$1.Client_ID + '&client_secret=' + configData$1.Client_Secret + '&grant_type=client_credentials', {
          method: 'POST',
        })
        .then(response => response.json())
        .then(data => (
          //console.log(data),
          accessToken = data.access_token,
          //console.log("twitchOBJ.accessToken: " + twitchOBJ.accessToken),
          getLatestFollowers())
        )
        .catch(error => 
          console.log("Twitch Fetch Errored: " + error)
        ); 
      };


      const getLatestFollowers = function() {

          //console.log(twitchOBJ.accessToken);

          fetch('https://api.twitch.tv/helix/users/follows?to_id=' + configData$1.userID, {
            method: 'GET',
            headers: {
              'Client-ID': configData$1.Client_ID,
              'Authorization': "Bearer " + accessToken
            }
          })
          .then(response => response.json())
          .then(data =>
            displayFollowers(data)
          )
          .catch(error => 
            console.log("Twitch Fetch Errored: " + error)
          ); 
      };

      const init = function() {
          console.log("Twitch INIT");
          getAccessToken();
      };



      return {
        init: init
      };

    })();

    const chatScrollerOBJ = (() => {


        let scrollIt = function(who, message, id) {
            console.log(who, message, id);

            let newDiv = document.createElement("div"); 
            newDiv.id = id;
            //this.PrevID = id;
            newDiv.classList.add("aphrase");

            let span = document.createElement('span');
            span.textContent = who + ": ";
            span.classList.add("usr");

            var span2 = document.createElement('span');
            span2.textContent = message;

            newDiv.appendChild(span);
            newDiv.appendChild(span2);

            var currentDiv = document.getElementById("chatSpace"); 
            currentDiv.appendChild(newDiv);

            newDiv.addEventListener('transitionend', () => {
                console.log('Transition ended');
                newDiv.remove();
                if (document.getElementsByClassName("aphrase").length < 1) {
                    document.getElementById("latest_followers").classList.remove("hiding");
                }
            });
        };

        let checkDivScroll = function() {
            var pendingLength = document.getElementsByClassName("aphrase").length;
            let x = 0;
            if (pendingLength > 0) {
                
                for (x=0; x<pendingLength; x++) {
                    //console.log(document.getElementsByClassName("aphrase")[x]);
                    //var lastDiv = document.getElementsByClassName("aphrase")[document.getElementsByClassName("aphrase").length - 1]
                    let lastDiv = document.getElementsByClassName("aphrase")[x];
                    let theLeft = lastDiv.offsetLeft + lastDiv.offsetWidth;
                    var prevLeft = 0;

                    if (x > 0) {
                        var prevDiv = document.getElementsByClassName("aphrase")[x - 1];
                        prevLeft = prevDiv.offsetLeft + prevDiv.offsetWidth;
                    }
                    if (theLeft > 1920 && !lastDiv.classList.contains("scrolling")) {
                        if (prevLeft < 1890) { //1920 (get a little more sapce)
                            lastDiv.classList.add("scrolling");
                            document.getElementById("latest_followers").classList.add("hiding");
                        } else {
                            console.log("broke loop");
                            break;
                        }
                    }
                }
            }
            //document.getElementById("numoutput").innerHTML= checkTimer;
            //addcheckTimer++; // <-- this never seems to do anything?
            requestAnimationFrame(checkDivScroll);
            
        };

        const init = function() {
            console.log("checkDivScroll init");
            requestAnimationFrame(checkDivScroll);
        };

        const start = function() {
            requestAnimationFrame(checkDivScroll);
        };

        return {
            init: init,
            scrollIt: scrollIt,
            checkDivScroll: checkDivScroll,
            start: start
        };
        
    })();

    let headShotType$1;

    const headShotOBJ = (() => {

        

        const toggleCam = function(hType) {
        

            if(hType == "skully") {
                document.getElementById("headshot").classList.remove("headshot");
                document.getElementById("headshot").classList.add("skully");
                headShotType$1 = 2;
                voicebarsOBJ.restart(headShotType$1);
                //console.log("set to skully");
            } else if (hType == "headshot") {
                document.getElementById("headshot").classList.add("headshot");
                document.getElementById("headshot").classList.remove("skully");
                headShotType$1 = 1;
                voicebarsOBJ.restart(headShotType$1);
                //console.log("set to headshot");
            }

        };


        const init = function() {
            console.log("headShotOBJ init");
        };

        return {
            init: init,
            headShotType: headShotType$1,
            toggleCam: toggleCam
        };
    })();

    const configData$2 = configModule.getConfig(); 


    const twitchChatOBJ = (() => {

        const init = function() {

            console.log('Activating Twitch');

            const username = "chenzorama";
            const token = configData$2.OAUTH;
            const channel = "chenzorama";

            console.log(`token: ${token}`);


            const { chat } = new TwitchJs({ token, username, log: { level: "warn" } });

            chat.connect().then(globalUserState => {
                // Do stuff ...
                console.log('CONNECTED!!!');
                chat.join(channel).then(channelState => {
                    // Do stuff with channelState...
                    console.log('joined channel!');
                });
            });

            /*
            const chat = new Chat({
                username,
                token,
                log: { level: "warn" }
            });
            */


            chat.on('*', (message) => {
                const time = new Date(message.timestamp).toTimeString();
                const event = message.event || message.command;
                const channel = message.channel;
                const msg = message.message || "";


                //console.log(message);
                if (message.self) return;
                //console.log(`${time}  - ${event} - ${channel} - ${msg}`);

                

                if (event == "PRIVMSG") {
                    console.log("this should fire the chat scroller...");
                    chatScrollerOBJ.scrollIt(message.username, message.message, message.tags.id);
                    //console.log(message.username + " said: " + message.message);

                    if (message.message === '!scooby') {
                        //if (userstate['display-name'] == "Chenzorama" || userstate['mod']) {
                        headShotOBJ.toggleCam("skully");
                        chat.say(channel, 'Switching To Scooby Level Skull');
                        //} 
                    }

                    if (message.message === '!headshot') {
                        //if (userstate['display-name'] == "Chenzorama" || userstate['mod']) {
                        headShotOBJ.toggleCam("headshot");
                        chat.say(channel, 'Switching To Chenzo Headshot');
                        //} 
                    }
                }
            });
            
        };

        return {
            init: init
        };
        
    })();

    const displayOBJ = (() => {

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
        };

        const addSnake = function(snakeCount) {
            console.log("ADDING snake! George the: " + snakeCount);
            console.log(romanize(snakeCount));
            var george = document.getElementById("george"); 
            george.classList.add("alive");
            document.getElementById("gcount_1").innerHTML = romanize(snakeCount);
            document.getElementById("gcount_2").innerHTML = romanize(snakeCount);
        };

        const removeSnake = function() {
            var george = document.getElementById("george"); 
            george.classList.remove("alive");
        };

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
        };

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

    const configData$3 = configModule.getConfig(); 


    const socket_user_name = 'thbar_obs';
    //const socket_room = 'panel_remote';
    const socket_room = 'teaxc64in';

    let socket = null;

    const remoteOBJ = (() => {

        const handleNoConnect = function(err) {
            console.log('connection error');
            console.log(err);
        };

        const onConnect = function() {
            console.log("Connected to Socket I/O Server!!!");
            socket.emit('joinRoom', {
                name: socket_user_name,
                room: socket_room
            });
        };

        const onToAuxEvent = function(evtData) {
            console.log("received ToAuxEvent!!");
            console.log(evtData);

            if (evtData.event == "playaudio") {
                displayOBJ.playAudio(evtData.target);
            }

            if (evtData.event == "addcrew") {
                console.log("trying to add crew");
                displayOBJ.addCrew(evtData.target);
            }

            if (evtData.event == "removecrew") {
                displayOBJ.removeCrew(evtData.target);
            }

            if (evtData.event == "addsnake") {
                console.log("George Found");
                displayOBJ.addSnake(evtData.target);
            }

            if (evtData.event == "removesnake") {
                console.log("George Died");
                displayOBJ.removeSnake();
            }
        };

        const onAnEvent = function(theEventDat) {
            console.log("received event!!");
            console.log(theEventDat);

            if (theEventDat.event == "shipsunk" || theEventDat.event == "shipresunk" || theEventDat.event == "shipsunk-flag" || theEventDat.event == "shipresunk-flag") {
                displayOBJ.addShipSunk(theEventDat.ship);
            }

            if (theEventDat.event == "playaudio") {
                console.log("I'm here... this should be it?");
                console.log(theEventDat.ship);
                displayOBJ.playAudio(theEventDat.ship);
            }

            if (theEventDat.event == "setAlignment") {
                displayOBJ.adjustAlignment(theEventDat.ship);
            }
        };

        const onMessage = function(message) {
            console.log("- message: " + message.text + " | from: " + message.name);

            var cargs, command;
            var isDo = message.text.substr(0, 3);//.split(" ")[0];
            if (isDo == "do:" && message.name == "thbar") {
                console.log("DO COMMAND");
                var splitMessage = message.text.substr(4).split(" ");
                command = splitMessage[0];
                if (splitMessage.length > 0) {
                    cargs = splitMessage[1];
                }

                if (command == "getcrew") {
                    console.log("Send Crew Status");
                    msg = "current crew: " + displayOBJ.getCrew();
                    remoteOBJ.socket.emit("message", {
                        text: msg,
                        name: remoteOBJ.name
                    });
                }
                

                if (command == "newFollower") {
                    console.log("new follower displayObj call: ");
                    displayOBJ.newFollowerAlert(cargs);
                }

                if (command == "newSubAlert") {
                    console.log("new sub alert! ");
                    displayOBJ.newSubAlert(cargs, "two");
                }


            }
        };



        const init = function() {
            console.log("SERVER: " + configData$3.server);
            socket = io(configData$3.server);
            socket.on('connect_error', handleNoConnect);
            socket.on("connect", onConnect);
            socket.on("message", onMessage);
            socket.on("anEvent", onAnEvent);
            socket.on("toAuxEvent", onToAuxEvent);
        };

        return {
            init: init,
        };
    })();

    voicebarsOBJ.init();
    twitchOBJ.init();
    chatScrollerOBJ.init();
    twitchChatOBJ.init();
    remoteOBJ.init();


    console.log("OVERLAY INIT");

})));
//# sourceMappingURL=overlay.js.map

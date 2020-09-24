

const configData = require('./../config.js');
const TwitchJS = require('twitch-js');
chatScrollerOBJ = require('./chatScrollerOBJ.js');
const headShotOBJ = require('./headShotOBJ.js');

twitchChatOBJ = {

    init: function() {
        console.log('Activating Twitch');
        const options = {
            channels: ["#chenzorama"],
            connection: {
                secure: true
            },
            identity: {
                username: "chenzorama",
                password: configData.OAUTH
            }
        };

        /* const bot = new TwitchJS.client({
            username: "nightbot",
            password: configData.OAUTH
            });
        */


        const client = new TwitchJS.client(options);

        client.on('chat', (channel, userstate, message, self) => {
            console.log(`Message "${message}" received from ${userstate['display-name']}`);
            //console.log(userstate);
            //console.log("client-nonce - " +  userstate['client-nonce'])

            chatScrollerOBJ.scrollIt(userstate['display-name'], message, userstate['client-nonce']);

            // Do not repond if the message is from the connected identity.
            if (self) return;


            if (options.identity && message.substring(0, 8) === '!addcrew') {
                if (userstate['display-name'] == "Chenzorama" || userstate['mod']) {
                const crewname = message.substr(9);//.split(" ")[0];

                var crewDiv = document.getElementById(crewname);
                crewDiv.classList.add("active");

                client.say(channel, crewname + ' added as crew member!');
                } 
            }

            if (options.identity && message.substring(0, 9) === '!sunkboat') {
                if (userstate['display-name'] == "Chenzorama" || userstate['mod']) {
                const boatType = message.substr(10);//.split(" ")[0];
                console.log("sunksunk");

                    if (boatType == "galleon" || boatType == "sloop" || boatType == "brig" ) {
                        console.log("ADDING SINKING BOAT");
                        var sunksDiv = document.getElementById("sunks"); 
                        var boat = document.createElement('div');
                        var type = boatType;
                        boat.classList.add("ship-sinker","sink");
                        boat.innerHTML = '<div class="aship float '+ type + '"><img src="images/sunk/'+type+'.png" /></div>';
                        sunksDiv.appendChild(boat);
                        client.say(channel, boatType + ' sunk!');

                    }
                
                } 
            }

            if (options.identity && message.substring(0, 11) === '!removecrew') {
                if (userstate['display-name'] == "Chenzorama" || userstate['mod']) {
                console.log("removing")
                const crewname = message.substring(12);
                //const who = this.removeCrew(crewInt);

                var crewDiv = document.getElementById(crewname);
                crewDiv.classList.remove("active");

                client.say(channel, crewname + ' removed as crew member!');
                } 
            }

            if (options.identity && message === '!command') {
                // If an identity was provided, respond in channel with message.
                client.say(channel, 'Hello world!');
            }

            if (options.identity && message === '!scooby') {
                //if (userstate['display-name'] == "Chenzorama" || userstate['mod']) {
                headShotOBJ.toggleCam("skully");
                client.say(channel, 'Switching To Scooby Level Skull');
                //} 
            }

            if (options.identity && message === '!headshot') {
                //if (userstate['display-name'] == "Chenzorama" || userstate['mod']) {
                headShotOBJ.toggleCam("headshot");
                client.say(channel, 'Switching To Chenzo Headshot');
                //} 
            }

            if (options.identity && message === '!3') {
                //if (userstate['display-name'] == "Chenzorama" || userstate['mod']) {
                var myAudio = document.getElementById('um3');
                myAudio.play();
                client.say(channel, '3');
                //} 
            }

            if (options.identity && message === '!digs') {
                var myAudio = document.getElementById('digs');
                myAudio.play();
                client.say(channel, 'digs');
            }
        
            if (options.identity && message === '!babyshark') {
                var myAudio = document.getElementById('babyshark');
                myAudio.play();
                client.say(channel, 'baby shark');
            }

        

            if (options.identity && message === '!test') {
                //bot.say(channel, '3');
            }

        
        });

        client.on('join', function(channel, username, self) {
            //User Detected
            console.log(username + " has joined the party"+ " | isSelf: " + self);
        });


        client.on('part', function(channel, username, self) {
            //User Left
            console.log(username + " has left the building" + " | isSelf: " + self);
        });

        // Finally, connect to the channel
        client.connect();
        console.log('---Twitch Activated');
    }
}


module.exports = { 
    init: twitchChatOBJ.init,
};

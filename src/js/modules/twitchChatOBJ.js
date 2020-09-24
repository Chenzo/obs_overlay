

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
                    displayOBJ.addCrew(crewname);
                } 
            }
            if (options.identity && message.substring(0, 11) === '!removecrew') {
                if (userstate['display-name'] == "Chenzorama" || userstate['mod']) {
                    const crewname = message.substring(12);
                    displayOBJ.removeCrew(crewname);
                } 
            }

            if (options.identity && message.substring(0, 9) === '!sunkboat') {
                if (userstate['display-name'] == "Chenzorama" || userstate['mod']) {
                    const boatType = message.substr(10);//.split(" ")[0];
                    if (boatType == "galleon" || boatType == "sloop" || boatType == "brig" ) {
                        console.log("ADDING SINKING BOAT");
                        displayOBJ.addShipSunk(boatType);
                    }
                } 
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
                displayOBJ.playAudio("3");
            }

            if (options.identity && message === '!digs') {
                displayOBJ.playAudio("digs");
            }
        
            if (options.identity && message === '!babyshark') {
                displayOBJ.playAudio("babyshark");
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

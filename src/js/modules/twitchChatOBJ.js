

import {configModule} from './../config.js';
const configData = configModule.getConfig(); 

//const TwitchJS = require('twitch-js');
//import TwitchJs from 'twitch-js'
/* import {TwitchJs} from './vendor/twitch.js'; */ //<script src="./js/vendor/twitch.js"></script>
import {chatScrollerOBJ} from './chatScrollerOBJ.js';
import {headShotOBJ} from './headShotOBJ.js';


export const twitchChatOBJ = (() => {

    const init = function() {

        console.log('Activating Twitch');

        const { Chat } = window.TwitchJs;

        const username = "chenzorama";
        const token = configData.OAUTH;
        const channel = "chenzorama"

        const chat = new Chat({
            username,
            token,
            log: { level: "warn" }
        });

        chat.on('*', (message) => {
            const time = new Date(message.timestamp).toTimeString();
            const event = message.event || message.command;
            const channel = message.channel;
            const msg = message.message || "";


            
            //console.log(message);
            if (message.self) return;
            //console.log(`${time}  - ${event} - ${channel} - ${msg}`);

            

            if (event == "PRIVMSG") {
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

                if (message === '!3') {
                    //displayOBJ.playAudio("3");
                }

                if (message === '!digs') {
                    //displayOBJ.playAudio("digs");
                }
            
                if (message === '!babyshark') {
                    //displayOBJ.playAudio("babyshark");
                }
            }
        });


        setTimeout(() => {
            chat.connect();
        }, 1000);

        setTimeout(() => {
            chat.join(username);
        }, 3000);
        
        //

        /* console.log('Activating Twitch');
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

        const client = new TwitchJs("chenzorama", 'oauth:xkz8a8qk4f5sjm25wldsowxxwz5rnl');

        client.on('chat', (channel, userstate, message, self) => {
            console.log(`Message "${message}" received from ${userstate['display-name']}`);
            //console.log(userstate);
            //console.log("client-nonce - " +  userstate['client-nonce'])

            scrollIt(userstate['display-name'], message, userstate['client-nonce']);

            // Do not repond if the message is from the connected identity.
            if (self) return;


            if (options.identity && message.substring(0, 8) === '!addcrew') {
                if (userstate['display-name'] == "Chenzorama" || userstate['mod']) {
                    const crewname = message.substr(9);//.split(" ")[0];
                    //displayOBJ.addCrew(crewname);
                } 
            }
            if (options.identity && message.substring(0, 11) === '!removecrew') {
                if (userstate['display-name'] == "Chenzorama" || userstate['mod']) {
                    const crewname = message.substring(12);
                    //displayOBJ.removeCrew(crewname);
                } 
            }

            if (options.identity && message.substring(0, 9) === '!sunkboat') {
                if (userstate['display-name'] == "Chenzorama" || userstate['mod']) {
                    const boatType = message.substr(10);//.split(" ")[0];
                    if (boatType == "galleon" || boatType == "sloop" || boatType == "brig" ) {
                        console.log("ADDING SINKING BOAT");
                        //displayOBJ.addShipSunk(boatType);
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
                //displayOBJ.playAudio("3");
            }

            if (options.identity && message === '!digs') {
                //displayOBJ.playAudio("digs");
            }
        
            if (options.identity && message === '!babyshark') {
                //displayOBJ.playAudio("babyshark");
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
        console.log('---Twitch Activated'); */
    }

    return {
        init: init
    };
    
})();
    
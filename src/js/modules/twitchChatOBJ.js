

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

        console.log(`token: ${token}`);


        const { chat } = new TwitchJs({ token, username, log: { level: "warn" } })

        chat.connect().then(globalUserState => {
            // Do stuff ...
            console.log('CONNECTED!!!');
            chat.join(channel).then(channelState => {
                // Do stuff with channelState...
                console.log('joined channel!');
            })
        })

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


            if (message.tags.customRewardId == "d9bedb7f-faf1-41b3-8fa8-a5443cd927bf") {
                //sink that ship reward: 
                console.log("THIS IS SINK THE BOAT DO IT");
                console.log(`${message.tags.displayName} demands we sink the next ship`)
            }

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
        
    }

    return {
        init: init
    };
    
})();
    
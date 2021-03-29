
import {displayOBJ} from './displayOBJ.js';
import {configModule} from './../config.js';
const configData = configModule.getConfig(); 


const socket_user_name = 'thbar_obs';
//const socket_room = 'panel_remote';
const socket_room = 'teaxc64in';

let socket = null;

export const remoteOBJ = (() => {

    const handleNoConnect = function(err) {
        console.log('connection error');
        console.log(err)
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
            console.log("George Found")
            displayOBJ.addSnake(evtData.target);
        }

        if (evtData.event == "removesnake") {
            console.log("George Died")
            displayOBJ.removeSnake();
        }
    }

    const onAnEvent = function(theEventDat) {
        console.log("received event!!");
        console.log(theEventDat);

        if (theEventDat.event == "shipsunk" || theEventDat.event == "shipresunk" ) {
            displayOBJ.addShipSunk(theEventDat.ship);
        }

        if (theEventDat.event == "setAlignment") {
            displayOBJ.adjustAlignment(theEventDat.amount);
        }
    }

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
                console.log("new sub alert! ")
                displayOBJ.newSubAlert(cargs, "two");
            }


        }
    };



    const init = function() {
        console.log("SERVER: " + configData.server);
        socket = io(configData.server);
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


//const displayOBJ = require('./displayOBJ.js');


import {configModule} from './../config.js';
const configData = configModule.getConfig(); 


const socket_user_name = 'thbar_obs';
const socket_room = 'panel_remote';
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

    const onMessage = function(message) {
        console.log("- message: " + message.text);

        var cargs, command;
        var isDo = message.text.substr(0, 3);//.split(" ")[0];
        if (isDo == "do:") {
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
            
            if (command == "addcrew") {
                console.log("addcrew", cargs);
                //displayOBJ.addCrew(cargs);
            }

            if (command == "playaudio") {
                //displayOBJ.playAudio(cargs);
            }

            if (command == "removecrew") {
                //displayOBJ.removeCrew(cargs);
            }

            if (command == "shipsunk") {
                //displayOBJ.addShipSunk(cargs);
            }

            if (command == "setAlignment") {
                console.log("here here");
                //displayOBJ.adjustAlignment(cargs);
            }

            if (command == "newFollower") {
                console.log("new follower displayObj call: ");
                //displayOBJ.newFollowerAlert(cargs);
            }

            if (command == "newSubAlert") {
                console.log("new sub alert! ")
                //displayOBJ.newSubAlert(cargs, "two");
            }


        }
    };

    const init = function() {
        console.log("SERVER: " + configData.server);
        socket = io(configData.server);
        socket.on('connect_error', handleNoConnect);
        socket.on("connect", onConnect);
        socket.on("message", onMessage);
    };

    return {
        init: init,
    };
})();

/*
remoteOBJ = {

    name: 'Panel Host',
    room: 'panel_remote',
    socket: null,


    init: function() {
        console.log("SERVER: " + configData.server);
        remoteOBJ.socket = io(configData.server);
        remoteOBJ.socket.on('connect_error', remoteOBJ.handleNoConnect);
        remoteOBJ.socket.on("connect", remoteOBJ.onConnect);
        remoteOBJ.socket.on("message", remoteOBJ.onMessage);
    },

    handleNoConnect: function(err) {
        console.log('connection error');
        console.log(err)
    },

    onConnect: function() {
        console.log("Connected to Socket I/O Server!!!");
        remoteOBJ.socket.emit('joinRoom', {
            name: remoteOBJ.name,
            room: remoteOBJ.room
        });
    },

    onMessage: function(message) {
        console.log("- message: " + message.text);
        var cargs, command;
        var isDo = message.text.substr(0, 3);//.split(" ")[0];
        if (isDo == "do:") {
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
            
            if (command == "addcrew") {
                displayOBJ.addCrew(cargs);
            }

            if (command == "playaudio") {
                displayOBJ.playAudio(cargs);
            }

            if (command == "removecrew") {
                displayOBJ.removeCrew(cargs);
            }

            if (command == "shipsunk") {
                displayOBJ.addShipSunk(cargs);
            }

            if (command == "setAlignment") {
                console.log("here here");
                displayOBJ.adjustAlignment(cargs);
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

        if (message.text == "soemthing") {
        }
    }

};

module.exports = { 
    init: remoteOBJ.init
};


*/
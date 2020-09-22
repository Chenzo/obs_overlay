
var name = 'Panel Host';
var room = 'panel_remote';
import configData from './../config.js';

console.log("turning on socket.");
console.log(configData.server, configData.server_port);



var socket = io("https://fierce-springs-20115.herokuapp.com/");


socket.on('connect_error', handleNoConnect);

function handleNoConnect(err) {
    console.log('connection error');
    console.log(err)
}

socket.on("connect", function() {
console.log("Connected to Socket I/O Server!");
    socket.emit('joinRoom', {
        name: name,
        room: room
    });
});

socket.on("message", function(message) {
    console.log("message: " + message.text);

    console.log("GOT IT!");

    /* if (twitch_obj) {
        twitch_obj.cansee();
    } */
});

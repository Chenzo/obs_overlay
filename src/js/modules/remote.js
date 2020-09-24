import configData from './../config.js';

var remote_obj = (function(){

    var name = 'Panel Host';
    var room = 'panel_remote';
    var socket;

    console.log("turning on socket.");
    console.log(configData.server, configData.server_port);

    function init() {
        socket = io(configData.server);
        socket.on('connect_error', handleNoConnect);
        socket.on("connect", onConnect);
        socket.on("message", onMessage);
    }

    function handleNoConnect(err) {
        console.log('connection error');
        console.log(err)
    }

    function onConnect() {
        console.log("Connected to Socket I/O Server!");
        socket.emit('joinRoom', {
            name: name,
            room: room
        });
    }

    function onMessage(message) {
        console.log("message: " + message.text);
    
        console.log("GOT IT!");

        if (twitch_obj) {
            twitch_obj.cansee();
        }
    }

    return {
        init: init
    };
}());

module.exports = { 
    init: remote_obj.init
};

//remote_obj.init();
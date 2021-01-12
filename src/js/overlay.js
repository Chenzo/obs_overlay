
/* 
//const remoteOBJ = require("./modules/remoteOBJ");
const displayOBJ = require("./modules/displayOBJ"); */


import {voicebarsOBJ} from './modules/voicebarsOBJ.js';
import {twitchOBJ} from './modules/twitchOBJ.js';
import {chatScrollerOBJ} from './modules/chatScrollerOBJ.js';
import {twitchChatOBJ} from './modules/twitchChatOBJ.js';
import {remoteOBJ} from './modules/remoteOBJ.js';

voicebarsOBJ.init();
twitchOBJ.init();
chatScrollerOBJ.init();
twitchChatOBJ.init();
remoteOBJ.init();

/* 
twitchChatOBJ.init();
remoteOBJ.init(); */

console.log("OVERLAY INIT");

//get twitch stuff

import TwitchJS from 'twitch-js';
import configData from './../config.js';
import './chat_scroller.js';

var twitch_obj = {

    accessToken: 0,

    displayFollowers: function(followerData) {
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
    },

    getAccessToken: function() {

      console.log("Getting twitch access token!!");

      fetch('https://id.twitch.tv/oauth2/token?client_id=' + configData.Client_ID + '&client_secret=' + configData.Client_Secret + '&grant_type=client_credentials', {
        method: 'POST',
      })
      .then(response => response.json())
      .then(data => (
        console.log(data),
        twitch_obj.accessToken = data.access_token,
        console.log("twitch_obj.accessToken: " + twitch_obj.accessToken),
        this.getLatestFollowers())
      )
      .catch(error => 
        console.log("Twitch Fetch Errored: " + error)
      ); 
    },


    getLatestFollowers: function() {

      console.log("VINCE VINCE VINCE");
      console.log(twitch_obj.accessToken);

      fetch('https://api.twitch.tv/helix/users/follows?to_id=' + configData.userID, {
        method: 'GET',
        headers: {
          'Client-ID': configData.Client_ID,
          'Authorization': "Bearer " + twitch_obj.accessToken
        }
      })
      .then(response => response.json())
      .then(data =>
        this.displayFollowers(data)
      )
      .catch(error => 
        console.log("Twitch Fetch Errored: " + error)
      ); 
    },


  
    
    getTwitchStreamerData: function() {
      fetch('https://api.twitch.tv/helix/users?login=lirik', {
        headers: {
          'Client-ID': configData.Client_ID
        }
      })
      .then(response => response.json())
      .then(data =>
        console.log(data)
      )
      .catch(error => 
        console.log("Twitch Fetch Errored: " + error)
      );
    },


    initTwitch() {
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

      chatScroller.init();

      const client = new TwitchJS.client(options);
  
      client.on('chat', (channel, userstate, message, self) => {
        console.log(`Message "${message}" received from ${userstate['display-name']}`);
        console.log(userstate);
        console.log("client-nonce - " +  userstate['client-nonce'])
        chatScroller.scrollIt(userstate['display-name'], message, userstate['client-nonce']);
  

        
        // Do not repond if the message is from the connected identity.
        if (self) return;



        
        if (options.identity && message.substring(0, 8) === '!addcrew') {
          if (userstate['display-name'] == "Chenzorama" || userstate['mod']) {
            const crewname = message.substr(9);//.split(" ")[0];
            //this.addCrew(crewname);

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
            headShot_OBJ.toggleCam("skully");
            client.say(channel, 'Switching To Scooby Level Skull');
          //} 
        }

        if (options.identity && message === '!headshot') {
          //if (userstate['display-name'] == "Chenzorama" || userstate['mod']) {
            headShot_OBJ.toggleCam("headshot");
            client.say(channel, 'Switching To Chenzo Headshot');
          //} 
        }

        if (options.identity && message === '!3') {
          //if (userstate['display-name'] == "Chenzorama" || userstate['mod']) {
            //console.log("3");
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
            console.log("bot try");
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
    },




    init: function() {
      console.log("Twitch INIT");
      this.getAccessToken();
      this.initTwitch();
    }

};



twitch_obj.init();
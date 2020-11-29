
//import configData from './../config.js';
const configData = require('./../config.js');

twitchOBJ = {

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
        //console.log(data),
        twitchOBJ.accessToken = data.access_token,
        //console.log("twitchOBJ.accessToken: " + twitchOBJ.accessToken),
        this.getLatestFollowers())
      )
      .catch(error => 
        console.log("Twitch Fetch Errored: " + error)
      ); 
    },


    getLatestFollowers: function() {

        //console.log(twitchOBJ.accessToken);
  
        fetch('https://api.twitch.tv/helix/users/follows?to_id=' + configData.userID, {
          method: 'GET',
          headers: {
            'Client-ID': configData.Client_ID,
            'Authorization': "Bearer " + twitchOBJ.accessToken
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

    init: function() {
        console.log("Twitch INIT");
        twitchOBJ.getAccessToken();
        //initTwitch();
    }
}



module.exports = { 
    init: twitchOBJ.init
};

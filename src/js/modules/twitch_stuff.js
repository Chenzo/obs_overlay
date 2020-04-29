//get twitch stuff
import configData from '../config.js';
console.log("Twitch Stuff File");

var twitch_obj = {

    temp: function() {
        console.log("Vince vince");
    },

    twitchFetch: function() {
        fetch('https://api.twitch.tv/helix/users/follows?to_id=' + configData.userID, {
          headers: {
            'Client-ID': configData.Client_ID
           }
        })
        .then(response => response.json())
        .then(data =>
          this.setState({ followData: data })
        )
        .catch(error => 
          console.log("Twitch Fetch Errored: " + error)
        );
      },
    
    
      getTwitchData: function() {
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
        console.log("beep boop we're here");
    }


};



twitch_obj.init();
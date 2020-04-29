//get twitch stuff
import configData from './config.js';

var twitch_obj = {

    temp: function() {
        console.log("Vince vince");
    },


    displayFollowers: function(followerData) {
      var followCount = (followerData.data.length < 4) ? followerData.data.length : 3;
      var followHTML = "";
      for (var index = 0; index < followCount; index++) { 
        console.log(followerData.data[index].from_name); 
        if (index != 0) {
          followHTML+= ", ";
        }
        followHTML+= "<span>" + followerData.data[index].from_name + "</span>";
      }
      var followElement = document.getElementById("latestFollowers");
      followElement.innerHTML = followHTML;
    },

    getLatestFollowers: function() {
        fetch('https://api.twitch.tv/helix/users/follows?to_id=' + configData.userID, {
          headers: {
            'Client-ID': configData.Client_ID
           }
        })
        .then(response => response.json())
        .then(data =>
          //this.setState({ followData: data })
          //js-latest-follower
          this.displayFollowers(data)
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
        console.log("Twitch INIT");
        this.getLatestFollowers();
    }


};



twitch_obj.init();
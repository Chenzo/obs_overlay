

/* window.chatScroller = (function(){ 


    

});
 */

var chatScroller = {

    //PrevID = "none",

    scrollIt: function(who, message, id) {
        console.log("BEEP BOOP");
        console.log(who, message, id);


        if (this.PrevID != "none") {
            console.log("PREVIOUS"); 
            console.log(this.PrevID);
        }

        var newDiv = document.createElement("div"); 
        newDiv.id = id;
        this.PrevID = id;
        newDiv.classList.add("aphrase");

        var span = document.createElement('span');
        span.textContent = who + ": ";
        span.classList.add("usr");

        var span2 = document.createElement('span');
        span2.textContent = message;

        newDiv.appendChild(span);
        newDiv.appendChild(span2);
        /* var newContent = document.createTextNode("Hi there and greetings!"); 
        // add the text node to the newly created div
        newDiv.appendChild(newContent);  */

        var currentDiv = document.getElementById("chatSpace"); 
        //document.body.insertBefore(newDiv, currentDiv); 
        currentDiv.appendChild(newDiv);

        newDiv.addEventListener('transitionend', () => {
            console.log('Transition ended');
            newDiv.remove();
        });

        setTimeout(function(){
            console.log("startscrolling");
            newDiv.classList.add("scrolling");
        }, 200);
        

        /* var crewDiv = document.getElementById("phrase");
        crewDiv.classList.add("scrolling"); */
    }
}
  
module.exports = chatScroller;

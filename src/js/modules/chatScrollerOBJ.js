let checkTimer = 0;
let recId = 0;

export const chatScrollerOBJ = (() => {


    let scrollIt = function(who, message, id) {
        console.log(who, message, id);

        var newDiv = document.createElement("div"); 
        newDiv.id = id;
        //this.PrevID = id;
        newDiv.classList.add("aphrase");

        var span = document.createElement('span');
        span.textContent = who + ": ";
        span.classList.add("usr");

        var span2 = document.createElement('span');
        span2.textContent = message;

        newDiv.appendChild(span);
        newDiv.appendChild(span2);

        var currentDiv = document.getElementById("chatSpace"); 
        currentDiv.appendChild(newDiv);

        newDiv.addEventListener('transitionend', () => {
            console.log('Transition ended');
            newDiv.remove();
            if (document.getElementsByClassName("aphrase").length < 1) {
                document.getElementById("latest_followers").classList.remove("hiding");
            }
        });
    };

    let checkDivScroll = function() {
        var pendingLength = document.getElementsByClassName("aphrase").length;

        if (pendingLength > 0) {
            for (x=0; x<pendingLength; x++) {
                //console.log(document.getElementsByClassName("aphrase")[x]);

                //var lastDiv = document.getElementsByClassName("aphrase")[document.getElementsByClassName("aphrase").length - 1]
                var lastDiv = document.getElementsByClassName("aphrase")[x];
                theLeft = lastDiv.offsetLeft + lastDiv.offsetWidth;
                var prevLeft = 0;
                if (x > 0) {
                    var prevDiv = document.getElementsByClassName("aphrase")[x - 1];
                    prevLeft = prevDiv.offsetLeft + prevDiv.offsetWidth;
                }
                if (theLeft > 1920 && !lastDiv.classList.contains("scrolling")) {
                    if (prevLeft < 1890) { //1920 (get a little more sapce)
                        lastDiv.classList.add("scrolling");
                        document.getElementById("latest_followers").classList.add("hiding");
                    } else {
                        console.log("broke loop");
                        break;
                    }
                }
            }
        }

        //document.getElementById("numoutput").innerHTML= checkTimer;
        //addcheckTimer++; // <-- this never seems to do anything?
        recId = requestAnimationFrame(checkDivScroll);
        
    };

    const init = function() {
        console.log("checkDivScroll init");
        recId = requestAnimationFrame(checkDivScroll);
    };

    const start = function() {
        recId = requestAnimationFrame(checkDivScroll);
    };

    return {
        init: init,
        scrollIt: scrollIt,
        checkDivScroll: checkDivScroll,
        start: start
    };
    
})();
    
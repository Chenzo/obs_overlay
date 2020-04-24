

var myThing = document.getElementById("countdown");
var myCount = 1;
var timeoutID;


function updateIt() {
    myThing.innerHTML = "COUNTING: " + myCount;
    myCount++;
    console.log("beep");
    timeoutID = window.setTimeout(updateIt, 1000);
}


timeoutID = window.setTimeout(updateIt, 1000);
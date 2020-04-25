

var myThing = document.getElementById("countdown");
var myCount = 1;
var timeoutID;


function updateIt() {
    myThing.innerHTML = "COUNTING: " + myCount;
    myCount++;
    timeoutID = window.setTimeout(updateIt, 1000);
}



function startUp() {
    makeAngles();
    getAudioTwo();
}

timeoutID = window.setTimeout(startUp, 2000);


/* document.getElementById("headshot").addEventListener("click", function() {
    makeAngles();
    getAudioTwo();
  }, false); */



var rafID,
    audioContext,
    analyser,
    dataArray,
    source;

var canvas = document.getElementById("circle-canvas");
var canvas2 = document.getElementById("circle-canvas-2");
var ctx = canvas.getContext('2d');
var ctx2 = canvas2.getContext('2d');
var width = canvas.width;
var height = canvas.height;
var radius = 100;
var num_items = 40;
var particles = [];

var tick = function() {
    analyser.getByteFrequencyData(dataArray);
    drawBars(ctx, dataArray);
    drawBars(ctx2, dataArray);
    rafId = requestAnimationFrame(tick);
    myThing.innerHTML = "rafId: " + rafId;
}

var drawBars = function(ctx, dataArray) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const [i, s] of dataArray.entries()) {

        var p = particles[i];
        var vol = (s < 120) ? s : 121;
        var ss = Math.abs(vol / 2 );

        if (typeof p != "undefined") {
            var x2 = width/2 + Math.cos(p.angle) * (ss + radius);
            var y2 = height/2 + Math.sin(p.angle) * (ss + radius);

            ctx.beginPath();
            var gradient = ctx.createRadialGradient(250,250,20, 250,250,175);

            gradient.addColorStop("0", "#0e2b28");
            gradient.addColorStop("0.5", "#0e2b28");
            gradient.addColorStop("1.0", "#267e81"); 

            ctx.strokeStyle = gradient;
            ctx.lineWidth = 6;

            ctx.moveTo(p.x, p.y);
            ctx.lineTo(x2, y2);
            ctx.stroke();
        } 

    }
}


function getAudioTwo() { 
    
    navigator.mediaDevices.getUserMedia({
        audio: true
    }).then(stream => {
        // Handle the incoming audio stream
        console.log("GOT THE STREAM!!!");
        // Handle the incoming audio stream
        audioContext = new (window.AudioContext ||
            window.webkitAudioContext)();
         //this.micDelay = this.audioContext.createDelay(0);
        analyser = audioContext.createAnalyser();
        analyser.minDecibels = -90;
        analyser.maxDecibels = -10;
        analyser.smoothingTimeConstant = 0.75; //0.85;
        analyser.fftSize = 128;
        dataArray = new Uint8Array(analyser.frequencyBinCount);
        //var bufferLength = analyser.frequencyBinCount;
        source = audioContext.createMediaStreamSource(stream);
        //this.micDelay.delayTime.value = this.props.audioDelayTime; //somewhere around 1
        source.connect(analyser);

        rafId = requestAnimationFrame(tick);

            console.log("i'm here!!!");
        }, error => {
        // Something went wrong, or the browser does not support getUserMedia
    });

  
}





var makeAngles = function() {
    function radians(deg) {return deg*Math.PI/180;};

    function distributeAngles(me, total) {
        return me/total * 180 - 90;
    }

    for (var i = 0; i < num_items; i++) {
        var angle = radians(distributeAngles(i, num_items));
        particles[i] = {
            x: width/2 + Math.cos(angle) * radius,
            y: height/2 + Math.sin(angle) * radius,
            angle: angle
        }
    }
}

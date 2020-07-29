
var voicebars = (function(){ 
    
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
    var myThing = document.getElementById("countdown");
    var sType = 2;
    //var fftSize = 128;
    //var smoothingTimeConstant = 0.8;

    var smoothingTimeConstant = 0.2;
    var fftSize = 64;

    var tick = function() {
        analyser.getByteFrequencyData(dataArray);
        if (sType == 2) {

            let i = 0;
            let jawi = i + 109
            let topi = 13;
            let alf = 0;
            let soundlimit = 8;
            var pastNub = 0;
            var distancelimit = 3;

            var l = dataArray.length;
            var sum = dataArray.reduce(function(a, b){
                return a + b;
            }, 0);

            var nub = ~~(sum / l);
            document.getElementById("numoutput").innerHTML= nub;

            if (nub > pastNub + distancelimit || nub < pastNub - distancelimit) {
                pastNub = nub;
                nub = (nub - soundlimit < 0) ? 0 : nub - soundlimit;
                jawi = (nub * .75) + 109;
                topi = 13 - (nub/10);
                alf = (nub * 2 ) * .01;
            }

            if (nub > 35) {
                document.getElementById("skull_top_open").classList.remove("hidden");
                document.getElementById("skull_top").classList.add("open");
                document.getElementById("skull_top_closed").classList.add("hidden");
            } else {
                document.getElementById("skull_top_open").classList.add("hidden");
                document.getElementById("skull_top").classList.remove("open");
                document.getElementById("skull_top_closed").classList.remove("hidden");
            }
            document.getElementById("skull_top").style.top = topi + "px";
            document.getElementById("skull_jaw").style.top = jawi + "px";
            document.getElementById("skull_bg").style.opacity = alf;
        } else {
            drawBars(ctx, dataArray);
            drawBars(ctx2, dataArray);
        }
        rafId = requestAnimationFrame(tick);
        myThing.innerHTML = "rafId: " + rafId;
    };


    var getLastIdx = function(dArray) {
        var r = 0;
        for (const [idx, s] of dArray.entries()) {
            if (s > 10) {
                r = idx;
            }
        }
        return r;
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
                var gradient = ctx.createRadialGradient(2100,250,20, 250,250,175);
    
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
    };

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
    };

    var getAudio = function() { 
    
        navigator.mediaDevices.getUserMedia({
            audio: true
        }).then(stream => {
            // Handle the incoming audio stream
            audioContext = new (window.AudioContext ||
                window.webkitAudioContext)();
             //this.micDelay = this.audioContext.createDelay(0);
            analyser = audioContext.createAnalyser();
            analyser.minDecibels = -90;
            analyser.maxDecibels = -10;
            analyser.smoothingTimeConstant = smoothingTimeConstant;
            analyser.fftSize = fftSize;
            dataArray = new Uint8Array(analyser.frequencyBinCount);
            //var bufferLength = analyser.frequencyBinCount;
            source = audioContext.createMediaStreamSource(stream);
            //this.micDelay.delayTime.value = this.props.audioDelayTime; //somewhere around 1
            source.connect(analyser);
    
            window.rafId = requestAnimationFrame(tick);
    
            }, error => {
            // Something went wrong, or the browser does not support getUserMedia
        });
    
    
    };


    var init = function() {
        console.log("INSIDE")
        makeAngles();
        getAudio();

    };
    


    return {
        init : init
    };


})();  


var startTimer = window.setTimeout(voicebars.init, 1000);

headShotOBJ = require('./headShotOBJ');


voicebarsObj = {

    rafID: 0,
    audioContext: null,
    analyser: null,
    dataArray: null,
    source: null,
    canvas: null,
    canvas2: null,
    ctx: null,
    ctx2: null,
    width: null,
    height: null,
    radius: null,
    num_items: null,
    particles: [],
    myThing: null,
    fftSize: null,
    smoothingTimeConstant: null,


    prepType: function() {

        fftSize = 128;
        smoothingTimeConstant = 0.8;

        //console.log("headShotOBJ.headShotType: " + headShotOBJ.headShotType);

        if (headShotOBJ.headShotType == 2) {
            //skull
            smoothingTimeConstant = 0.2;
            fftSize = 64;
        }


    },

    tick: function() {
        voicebarsObj.analyser.getByteFrequencyData(dataArray);
        if (headShotOBJ.headShotType == 2) {

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
                jawi = (nub * .4) + 109;
                topi = 13 - (nub/10);
                alf = (nub *1.5) * .01;
            }

            if (nub > 50) {
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
            voicebarsObj.drawBars(voicebarsObj.ctx, dataArray);
            voicebarsObj.drawBars(voicebarsObj.ctx2, dataArray);
        }
        voicebarsObj.rafId = requestAnimationFrame(voicebarsObj.tick);
        voicebarsObj.myThing.innerHTML = "rafId: " + voicebarsObj.rafId;
    },


    getLastIdx: function(dArray) {
        var r = 0;
        for (const [idx, s] of dArray.entries()) {
            if (s > 10) {
                r = idx;
            }
        }
        return r;
    },

    drawBars: function(ctx, dataArray) {
        ctx.clearRect(0, 0, voicebarsObj.canvas.width, voicebarsObj.canvas.height);
    
        for (const [i, s] of dataArray.entries()) {
    
            var p = voicebarsObj.particles[i];
            var vol = (s < 120) ? s : 121;
            var ss = Math.abs(vol / 2 );
    
            if (typeof p != "undefined") {
                var x2 = voicebarsObj.width/2 + Math.cos(p.angle) * (ss + voicebarsObj.radius);
                var y2 = voicebarsObj.height/2 + Math.sin(p.angle) * (ss + voicebarsObj.radius);
    
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
    },

    makeAngles: function() {
        
        function radians(deg) {return deg*Math.PI/180;};
    
        function distributeAngles(me, total) {
            return me/total * 180 - 90;
        }
    
        for (var i = 0; i < voicebarsObj.num_items; i++) {
            var angle = radians(distributeAngles(i, voicebarsObj.num_items));
            voicebarsObj.particles[i] = {
                x: voicebarsObj.width/2 + Math.cos(angle) * voicebarsObj.radius,
                y: voicebarsObj.height/2 + Math.sin(angle) * voicebarsObj.radius,
                angle: angle
            }
        }
    },

    getAudio: function() { 
    
        navigator.mediaDevices.getUserMedia({
            audio: true
        }).then(stream => {
            // Handle the incoming audio stream
            voicebarsObj.audioContext = new (window.AudioContext ||
                window.webkitAudioContext)();
             //this.micDelay = this.audioContext.createDelay(0);
            voicebarsObj.analyser = voicebarsObj.audioContext.createAnalyser();
            voicebarsObj.analyser.minDecibels = -90;
            voicebarsObj.analyser.maxDecibels = -10;
            voicebarsObj.analyser.smoothingTimeConstant = smoothingTimeConstant;
            voicebarsObj.analyser.fftSize = fftSize;
            dataArray = new Uint8Array(voicebarsObj.analyser.frequencyBinCount);
            //var bufferLength = analyser.frequencyBinCount;
            source = voicebarsObj.audioContext.createMediaStreamSource(stream);
            //this.micDelay.delayTime.value = this.props.audioDelayTime; //somewhere around 1
            source.connect(voicebarsObj.analyser);
    
            voicebarsObj.rafId = requestAnimationFrame(voicebarsObj.tick);
    
            }, error => {
            // Something went wrong, or the browser does not support getUserMedia
        });
    
    
    },


    restart: function() {
        console.log("RESETTING");
        console.log(headShotOBJ.getHeadShotType);
        window.cancelAnimationFrame( voicebarsObj.rafId);
        voicebarsObj.audioContext.close().then(function() {
            console.log("audioContextClosed");
            voicebarsObj.init();
        });
    },

    setInitialValues() {
        voicebarsObj.canvas = document.getElementById("circle-canvas");
        voicebarsObj.canvas2 = document.getElementById("circle-canvas-2");
        voicebarsObj.ctx = voicebarsObj.canvas.getContext('2d');
        voicebarsObj.ctx2 = voicebarsObj.canvas2.getContext('2d');
        voicebarsObj.width = voicebarsObj.canvas.width;
        voicebarsObj.height = voicebarsObj.canvas.height;
        voicebarsObj.radius = 100;
        voicebarsObj.num_items = 40;
        voicebarsObj.myThing = document.getElementById("countdown");
    },

    init: function() {
        console.log("Voice Bars INIT");
        voicebarsObj.setInitialValues();
        voicebarsObj.ctx.clearRect(0, 0, voicebarsObj.canvas.width, voicebarsObj.canvas.height);
        voicebarsObj.ctx2.clearRect(0, 0, voicebarsObj.canvas.width, voicebarsObj.canvas.height);
        voicebarsObj.prepType();
        voicebarsObj.makeAngles();
        voicebarsObj.getAudio();
    }
    

   
}



module.exports = { 
    init: voicebarsObj.init,
    restart: voicebarsObj.restart
};

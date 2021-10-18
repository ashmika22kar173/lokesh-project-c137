status = "";
objects = [];

function preload() {

}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.position(530, 300);
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

}


function start() {
    object = ml5.objectDetector('cocossd', modelloaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    which_object = document.getElementById("input1").value;
   if(objects[i].label == which_object)
   document.getElementById("found_the_object").innerHTML = which_object + " Found";

}



function draw() {
    image(video, 0, 0, 300, 300);
    if (status != "") {
        objectDetector.detect(video,gotresult);
        for (i = 0; i < objects.length; i++) {
            fill("#ff0000");
            lokesh = floor(objects[i].confidence * 100);
            text(objects[i].label + "" + lokesh + "%", objects[i].x, objects[i].y);
            noFill();
            stroke("#ff0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);

            var recall = window.speechSynthesis;
            var voices = recall.getVoices();
          speak_data = objects[i].label;
            var recall = new SpeechSynthesisUtterance(text);
        }
    }
}

function modelloaded() {
    console.log("model loaded");
    status = true;
}

function gotresult(error, results) {
    if (error) {
        console.log(error);
    } else {
        console.log(results);
        objects = results;
    }
}

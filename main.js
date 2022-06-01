
difference = 0;
rightwristX = 0;
leftwristX = 0;


function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(1000,1000);
    canvas.position(560,100);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background("#000000");
    document.getElementById("font-size").innerHTML = "font size of the text will be " + difference + " px";
    textSize(difference);
    fill("white");
    text('Reinier', 50, 400);
}

function modelLoaded(){
    console.log("Model is Loaded");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftwristX = results[0].pose.leftWrist.x;
        rightwristX = results[0].pose.rightWrist.x;
        difference = floor(leftwristX - rightwristX);
    }
}  
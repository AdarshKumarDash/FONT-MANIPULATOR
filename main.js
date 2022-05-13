leftwristx = "";
rightwristx = "";

function setup() {
    canvas = createCanvas(550, 475);
    canvas.position(900, 200);
    div = createDiv();
    div.position(100,200)
    video = createCapture(VIDEO);
    video.parent(div);
    posenet = ml5.poseNet(video, modelloaded);
    posenet.on("pose", getposes);
}

function getposes(result) {
    if (result.length > 0) {
        console.log(result);
        leftwristx = result[0].pose.leftWrist.x;
        rightwristx = result[0].pose.rightWrist.x;
        console.log("Left Wrist X: " + leftwristx + ", " + "Right Wrist X: " + rightwristx);
    }
}

function modelloaded() {
    console.log("Model Successfully Loaded");
}

function draw() {
    background("#04a6eb");
}
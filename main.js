leftwristx = "";
rightwristx = "";
difference = "";

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

function modelloaded() {
    console.log("Model Successfully Loaded");
}

function getposes(result) {
    if (result.length > 0) {
        console.log(result);
        leftwristx = result[0].pose.leftWrist.x;
        rightwristx = result[0].pose.rightWrist.x;
        difference = floor(leftwristx - rightwristx)
        console.log("Left Wrist X: " + leftwristx + ", " + "Right Wrist X: " + rightwristx + ", " + "Difference: " + difference);
    }
}

function draw() {
    background("#04a6eb");
    textSize(difference);
    fill("#FFE787")
    text("Adarsh", 50, 400);
}
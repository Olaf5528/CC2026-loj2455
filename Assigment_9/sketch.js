
let faceMesh;
let options = { maxFaces: 1, refineLandmarks: false, flipped: false };
let video;
let faces = [];


async function setup() {
  createCanvas(640, 480);
    
  // Create the video and hide it
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
  faceMesh = await ml5.faceMesh(options);

  faceMesh.detectStart(video, gotFaces);
}

// Callback function for when faceMesh outputs data

function gotFaces(results) {
// Save the output to the faces variable
  faces = results;
}

function draw() {
 image(video, 0, 0, width, height);
// Draw all the tracked face points
console.log(faces.length);

 if(faces.length > 0) {
  
    let nose = faces[0].keypoints[1];

  let upperLip = faces[0].keypoints[13];
  let lowerLip = faces[0].keypoints[14];

  let mouthDistance = dist(
  upperLip.x, upperLip.y,
  lowerLip.x, lowerLip.y
);
let noseSize = map(mouthDistance, 0, 50, 80, 10, true);

    fill(255, 0, 0);
    noStroke();
    ellipse(nose.x, nose.y, noseSize, noseSize);
  }




}

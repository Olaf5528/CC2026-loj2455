
let video;
let faceMesh;
let faces = [];
let triangles;

// Create arrays that include an ordered list of index values

async function setup() {
  createCanvas(windowWidth, windowHeight);

  // VIDEO
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();

  faceMesh = await ml5.faceMesh({ maxFaces: 1 });
  triangles = faceMesh.getTriangles();

  console.log(triangles);
  faceMesh.detectStart(video, gotFaces);
}

function mousePressed() {
  console.log(faces);
}

function gotFaces(result) {
  faces = result;
}

function draw() {
  translate(width/2, 0);
  background (0);
  image(video, -width/2, 0);

  if (faces.length > 0) {
    for (let face of faces) {

      // Draw keypoints
      // for (let i = 0; i < face.keypoints.length; i++) {
      //   let keypoint = face.keypoints[i];

      //   fill(255, 255, 0);
      //   noStroke();
      //   circle(keypoint.x, keypoint.y, 16);
      // }

      randomSeed(5);
      beginShape(TRIANGLES);

      // Draw triangles
      for (let j = 0; j < triangles.length; j++) {
        let tri = triangles[j];
        let [a, b, c] = tri;

        let pointA = face.keypoints[a];
        let pointB = face.keypoints[b];
        let pointC = face.keypoints[c];

        fill(255);
        noStroke();

        vertex(pointA.x, pointA.y);
        vertex(pointB.x, pointB.y);
        vertex(pointC.x, pointC.y);
      }

      endShape();
    }
  }
}






























// let faceMesh;
// let options = { maxFaces: 1, refineLandmarks: false, flipped: false };
// let video;
// let faces = [];


// async function setup() {
//   createCanvas(640, 480);
    
//   // Create the video and hide it
//   video = createCapture(VIDEO);
//   video.size(640, 480);
//   video.hide();
//   faceMesh = await ml5.faceMesh(options);

//   faceMesh.detectStart(video, gotFaces);
// }

// // Callback function for when faceMesh outputs data

// function gotFaces(results) {
// // Save the output to the faces variable
//   faces = results;
// }

// function draw() {
//  image(video, 0, 0, width, height);
// // Draw all the tracked face points
// console.log(faces.length);

//  if(faces.length > 0) {
  
//     let nose = faces[0].keypoints[1];

//   let upperLip = faces[0].keypoints[13];
//   let lowerLip = faces[0].keypoints[14];

//   let mouthDistance = dist(
//   upperLip.x, upperLip.y,
//   lowerLip.x, lowerLip.y
// );
// let noseSize = map(mouthDistance, 0, 50, 80, 10, true);

//     fill(255, 0, 0);
//     noStroke();
//     ellipse(nose.x, nose.y, noseSize, noseSize);
//   }




// }

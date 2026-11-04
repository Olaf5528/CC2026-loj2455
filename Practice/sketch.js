
let myCamera;

function setup() {
  createCanvas(windowWidth, windowHeight);
   pixelDensity(1);
  myCamera = createCapture(VIDEO);
  video.size(640, 480);
  //myCamera.hide();
}

function draw() {
  background(0);
  

  // exaggerate values based on mouseY
  let exaggeration = floor(map(mouseY, 0, height, 255,0))

  // get a copy of the camera image
  let mImage = myCamera.get();

  mImage.loadPixels();

  // note: i += 4 in the loop update
  for (let i = 0; i < mImage.pixels.length; i += 4){

    // get color values from image
    let r = mImage.pixels[i];
    let g = mImage.pixels[i + 1];
    let b = mImage.pixels[i + 2];

    let maxValue = max(r, g, b);

     // exaggerate the domiant one, but in the mImage
     if (maxValue == r){
      mImage.pixels[i] = exaggeration;
    } else if (maxValue == g){
      mImage.pixels[i + 1] = exaggeration;
    } else if (maxValue == b){
      mImage.pixels[i + 2] = exaggeration;
    }
  }
mImage.updatePixels();
image(mImage, 0, 0);
}









//VIDEOOOOOO

// let video;
// let xOff;
// let yOff;

// async function setup() {
//   createCanvas(windowWidth, windowHeight);

//   video = createVideo("../Content/IMG_2064.MOV");
//   pixelDensity(1);
//   video.autoplay();
//   video.volume(0);
//   video.hide();
//   video.loop();

// }

// function draw() {
//   background(0);
//   video.loadPixels();

//   // read RGB values of a pixel:
//   for( let i = 0; i < video.pixels.length; i+=4){
//     let r = video.pixels[i];
//     let g = video.pixels[i+1];
//     let b = video.pixels[i+2];

//   // if color is close to black, make it red
//   if (r < 65 && g < 65 && b < 65){
//     video.pixels[i] += 191;
//   }
//   }

//   video.updatePixels();


//   // Calculate the center using the current dimensions
//   xOff = (width - video.width) / 2;
//   yOff = (height - video.height) / 2;

//   push();
//   translate(xOff, yOff);
//   image(video, 0, 0);
//   pop();
// }





















/*
let photo;
let xOff;
let yOff;

async function setup() {
  photo = await loadImage("../Content/photo.JPG");

  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);

  console.log("Original size: " + photo.width + " x " + photo.height);

  if (photo.width > width) photo.resize(width, 0);
  if (photo.height > height) photo.resize(0, height);

  xOff = (width - photo.width)/2; 
  yOff = (height - photo.height)/2;
  noLoop();
}

function draw() {
  background(0);

  push();
  translate(xOff, yOff);
  image(photo, 0, 0);
  pop();
}
*/

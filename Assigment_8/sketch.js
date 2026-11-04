let myVideo;
let glitchAmount = 0;
let xOff;
let yOff;

async function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);

  myVideo = await createCapture(VIDEO);
  myVideo.size(640, 480);
  myVideo.hide();

  xOff = (width - myVideo.width) / 2;
  yOff = (height - myVideo.height) / 2;
}

function draw() {
  background(0);

  myVideo.loadPixels();

  if (myVideo.pixels.length === 0) return;

  for (let y = 0; y < myVideo.height; y++) {
    for (let x = 0; x < myVideo.width; x++) {

      let i = (x + y * myVideo.width) * 4;

      let r = myVideo.pixels[i];
      let g = myVideo.pixels[i + 1];
      let b = myVideo.pixels[i + 2];

      let gray = (r + g + b) / 3;

      let shift = floor(glitchAmount);

      let redX = constrain(x + shift, 0, myVideo.width - 1);
      let blueX = constrain(x - shift, 0, myVideo.width - 1);

      let redI = (redX + y * myVideo.width) * 4;
      let blueI = (blueX + y * myVideo.width) * 4;

      let red = myVideo.pixels[redI];
      let blue = myVideo.pixels[blueI + 2];

      let amount = constrain(glitchAmount / 40, 0, 1);

      
      myVideo.pixels[i] = gray * (1 - amount) + red * amount;
      myVideo.pixels[i + 1] = gray * (1 - amount) + g * amount;
      myVideo.pixels[i + 2] = gray * (1 - amount) + blue * amount;
      myVideo.pixels[i + 3] = 255;
    }
  }

  myVideo.updatePixels();


  image(myVideo, xOff, yOff);


  glitchAmount *= 0.95;
}

function mousePressed() {
  glitchAmount = 40;
}
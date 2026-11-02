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

  xOff = (window - photo.width)/2; 
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

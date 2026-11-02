
let video;
let glitchAmount = 0;

async function setup() {
  let canvas = createCanvas(640, 480);
  canvas.position(
    (windowWidth - width) / 2,
    (windowHeight - height) / 2
  );
  pixelDensity(1);

  video = await createCapture(VIDEO);
  video.size(640, 480);
  video.hide();

}

function draw() {
  
  background(0);
  translate(xOff, yOff);
  // create pixel array for the grabber
  video.loadPixels();

  if (video.pixels.length === 0) return;

  loadPixels();

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {

      let i = (x + y * width) * 4;

      let r = video.pixels[i];
      let g = video.pixels[i + 1];
      let b = video.pixels[i + 2];

      let gray = (r + g + b) / 3;

      // Separate color channels when glitching
      let shift = floor(glitchAmount);

      let redX = constrain(x + shift, 0, width - 1);
      let blueX = constrain(x - shift, 0, width - 1);

      let redI = (redX + y * width) * 4;
      let blueI = (blueX + y * width) * 4;

      let red = video.pixels[redI];
      let blue = video.pixels[blueI + 2];

      let amount = constrain(glitchAmount / 40, 0, 1);

      pixels[i] = lerp(gray, red, amount);
      pixels[i + 1] = lerp(gray, g, amount);
      pixels[i + 2] = lerp(gray, blue, amount);
      pixels[i + 3] = 255;
    }
  
  }

  updatePixels();

  // Slowly return to grayscale
  glitchAmount *= 0.95;
}

function mousePressed() {
  glitchAmount = 40;
}
let mic;
let fft;
let shapes = [];
let micStarted = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  colorMode(HSB, 360, 100, 100);

  // 1. Initialize FFT analyzer with 256 bands
  fft = new p5.FFT(256);

  // 2. Create 100 shapes
  for (let i = 0; i < 200; i++) {
    shapes.push(new GeoShape());
  }
}

function draw() {
  background(0, 0, 100); // White background

  if (micStarted) {
    let spectrum = fft.analyze(); // Get spectrum data

    // Split frequency into low, mid, and high energy values (0.0 to 1.0)
    let lowVal = energy(spectrum, 20, 250);      // Bass for circles
    let midVal = energy(spectrum, 250, 2000);    // Mids for triangles
    let highVal = energy(spectrum, 2000, 12000); // Highs for rects

    for (let shape of shapes) {
      shape.update(lowVal, midVal, highVal);
      shape.display();
    }
  } else {
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(20);
    text(
      "Click anywhere to start mic audio visualizer!",
      width / 2,
      height / 2
    );
  }
}

// Class to handle shape creation and audio reactivity
class GeoShape {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.type = random(['circle', 'triangle', 'rect']);
    this.baseSize = random(15, 30);
    this.size = this.baseSize;
    this.offsetY = 0;
    this.color = color(random(360), 85, 90);
  }

  update(lowVal, midVal, highVal) {
    if (this.type === 'circle') {
      // Circles react to low bass frequencies
      this.size = this.baseSize + map(lowVal, 0, 1, 0, 80);

    } else if (this.type === 'triangle') {
      // Triangles pop upward on mid frequencies
      this.offsetY = map(midVal, 0, 1, 0, -40);

    } else if (this.type === 'rect') {
      // Rectangles scale up on high frequencies
      this.size = this.baseSize + map(highVal, 0, 1, 0, 60);
    }
  }

  display() {
    push();
    translate(this.x, this.y + this.offsetY);
    fill(this.color);
    noStroke();

    if (this.type === 'circle') {
      circle(0, 0, this.size);

    } else if (this.type === 'triangle') {
      let s = this.size;
      triangle(
        -s / 2, s / 2,
        s / 2, s / 2,
        0, -s / 2
      );

    } else if (this.type === 'rect') {
      rect(0, 0, this.size, this.size);
    }

    pop();
  }
}

// Average energy between frequency ranges
function energy(spectrum, lowHz, highHz) {
  let nyquist = getAudioContext().sampleRate / 2;

  let lo = floor((lowHz / nyquist) * spectrum.length);

  let hi = min(
    spectrum.length - 1,
    ceil((highHz / nyquist) * spectrum.length)
  );

  let sum = 0;

  for (let i = lo; i <= hi; i++) {
    sum += spectrum[i];
  }

  let avg = sum / (hi - lo + 1);

  return constrain(
    map(20 * Math.log10(avg + 1e-6), -100, -10, 0, 1),
    0,
    1
  );
}

// Mic setup on click
async function mousePressed() {
  if (!micStarted) {
    await userStartAudio();

    mic = new p5.AudioIn();
    mic.disconnect(); // Avoid audio feedback

    await mic.start();
    mic.connect(fft);

    micStarted = true;
  }
}


// let mic;
// let meter;
// let shapes = [];

// function setup() {
//   createCanvas(600, 400);
//   rectMode(CENTER);
//   colorMode(HSB, 360, 100, 100);

//   // 1. Initialize mic and disconnect from speakers to avoid feedback
//   mic = new p5.AudioIn();
//   mic.disconnect();

//   // 2. Connect mic to an Amplitude meter to measure loudness
//   meter = new p5.Amplitude();
//   mic.connect(meter);

//   // Create 100 shapes
//   for (let i = 0; i < 200; i++) {
//     shapes.push(new GeoShape());
//   }
// }

// function draw() {
//   background(0, 0, 100); // White background in HSB mode

//   // 3. Get live microphone volume
//   let volume = meter.getLevel();

//   // 4. Pass volume into each shape's display function
//   for (let shape of shapes) {
//     shape.display(volume);
//   }

//   fill(0);
//   noStroke();
//   textSize(16);
//   text("Microphone volume: " + volume.toFixed(3), 20, 30);
// }

// class GeoShape {
//   constructor() {
//     this.x = random(width);
//     this.y = random(height);
//     this.type = random(['circle', 'square', 'triangle']);
//     this.baseSize = random(15, 35);
//     this.color = color(random(360), 80, 90);
//   }

//   display(vol) {
//     fill(this.color);
//     noStroke();

//     // Dynamically calculate size using map based on live mic volume
//     let currentSize = this.baseSize + map(vol, 0, 0.3, 0, 60, true);

//     if (this.type === 'circle') {
//       circle(this.x, this.y, currentSize);

//     } else if (this.type === 'square') {
//       square(this.x, this.y, currentSize);

//     } else if (this.type === 'triangle') {
//       let s = currentSize;

//       triangle(
//         this.x, this.y - s / 2,
//         this.x - s / 2, this.y + s / 2,
//         this.x + s / 2, this.y + s / 2
//       );
//     }
//   }
// }

// async function mousePressed() {
//   await userStartAudio();
//   await mic.start();
// }

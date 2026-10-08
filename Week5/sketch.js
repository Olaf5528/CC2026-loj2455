

let xPos;
let yPos;

let seed = 36748;
let inc = .08;
let noiseVal ;
let bDoExportSvg = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  xPos = 75;
  yPos = 75;
  noiseVal = random()
  noLoop();
}


function star5(x, y){

  strokeWeight(5);
  stroke(0, 255, 0);
  noFill();
  let rot = 3 * PI / 2 * noise(noiseVal);
  noiseVal += inc;
  rotate(rot);
  beginShape();

  vertex(xPos, yPos - 120);
  vertex(xPos + 26, yPos - 50);
  vertex(xPos + 100, yPos - 50);
  vertex(xPos + 50, yPos);
  vertex(xPos + 70, yPos + 90);
  vertex(xPos, yPos + 50);
  vertex(xPos - 70, yPos + 90);
  vertex(xPos - 50, yPos);
  vertex(xPos - 100, yPos - 50);
  vertex(xPos - 26, yPos - 50);
  vertex(xPos, yPos - 120)

  endShape();
}

function keyPressed() {
  if (key == "r"){
    seed = floor(random(13001));
  }
    if (key == 's'){ 
    bDoExportSvg = true; 
    redraw();
  }
}

function draw() {
  if (bDoExportSvg){
    beginRecordSvg("myPlot"+seed+".svg");
  }
  background(0);
  let offSet = -40
  for(let x = 0; x < width - offSet; x += 190){
    for (let y = 0; y < height - offSet; y += 190){
  push();
  translate(x, y);
  star5();
  pop();
    }
  }
  if (bDoExportSvg){
  endRecordSvg();
  bDoExportSvg = false;
  }
}




/*
vertex(xPos, yPos - 120);
  vertex(xPos + 26, yPos - 50);
    vertex(xPos + 26, yPos - 50);
    vertex(xPos + 100, yPos - 50);
vertex(xPos + 100, yPos - 50);
  vertex(xPos + 50, yPos);
   vertex(xPos + 50, yPos);
    vertex(xPos + 70, yPos + 90);
vertex(xPos + 70, yPos + 90);
  vertex(xPos, yPos + 50);
    vertex(xPos, yPos + 50);
     vertex(xPos - 70, yPos + 90);
vertex(xPos - 70, yPos + 90);
  vertex(xPos - 50, yPos);
   vertex(xPos - 50, yPos);
    vertex(xPos - 100, yPos - 50);
vertex(xPos - 100, yPos - 50);
  vertex(xPos - 26, yPos - 50);
    vertex(xPos - 26, yPos - 50);
    vertex(xPos, yPos - 120)
*/
//let x = 50
//let y = 50
let seed = 55373;
let inc = .01;
let noiseVal ;
let bDoExportSvg = false;

function setup() {
  createCanvas(576, 384);
  noiseVal = random()
  noLoop();
}

function drawTrian(){
  stroke(0);
  noFill();
  let rot = TWO_PI * noise(noiseVal);
  noiseVal += inc;
  rotate(rot);
  triangle(-32, 32, 0, -32, 32, 32);
}

function keyPressed() {
    seed = floor(random(13001));
    if (key == 's'){ 
    bDoExportSvg = true; 
    redraw();
  }
}

function draw() {
   if (bDoExportSvg){
    beginRecordSvg("myPlot"+seed+".svg");
  }
  background(255);
  let offSet = 40
   for(let x = 50; x < width - offSet; x += offSet){
    for (let y = 50; y < height  - offSet; y += offSet){
      
    push();
    //scale(2);
    translate(x, y);
    drawTrian();
    pop();
    }
  }
  if (bDoExportSvg){
  endRecordSvg();
  bDoExportSvg = false;
  }
  
}

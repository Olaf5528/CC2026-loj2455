let xPos = width;
let yPos = height;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  background(0);

  stroke(159, 24, 22);
  strokeWeight(20);


  beginShape(LINES);
  vertex(100, 100);
  vertex(200,200);
  vertex(200, 200);
  vertex(300, 200)

  endShape();

}

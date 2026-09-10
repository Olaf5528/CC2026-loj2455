

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(186, 85, 211);
}

function draw() {
  rectMode(CENTER);
  noStroke();
  rect(100,100, 50,50);
  stroke();
  strokeWeight(1);
  ellipse(100,100, 50,50);
  quad(100, 100, 150, 100, 150, 150, 100, 150);
  strokeWeight(5);

}

function mousePressed() {
  
}
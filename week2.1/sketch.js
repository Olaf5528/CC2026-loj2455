function setup() {
  createCanvas(windowWidth, windowHeight);
  background(245, 11, 11);
 
}

function draw() {
  
  noStroke();

  push();
  fill(255);
  translate(- 400, 0);
  rect(windowWidth/5, windowHeight/5, windowWidth + 20 , windowHeight/5);
  pop();
  
  push();
  fill(255);
  translate( -400, 0);
  rect(windowWidth/5 ,windowHeight/5 + 400, windowWidth + 20 , windowHeight/5);
  pop();

  fill('blue');
  triangle(windowWidth/2, windowHeight/2, 0, 0, 0, windowHeight);
  

  let centerX = 300;
  let centerY = 500;

  fill(255);

  beginShape();

 // TOP
vertex(centerX, centerY - 200);

// TOP-RIGHT inner
vertex(centerX + 50, centerY - 50);

// RIGHT
vertex(centerX + 200, centerY);

// BOTTOM-RIGHT inner
vertex(centerX + 50, centerY + 50);

// BOTTOM
vertex(centerX, centerY + 200);

// BOTTOM-LEFT inner
vertex(centerX - 50, centerY + 50);

// LEFT
vertex(centerX - 200, centerY);

// TOP-LEFT inner
vertex(centerX - 50, centerY - 50);


  endShape(CLOSE);
}
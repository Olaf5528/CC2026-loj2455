
function setup() {
  createCanvas(300, 300);
  noLoop();
}

function draw() {
   // PARAMETERIZING (USING VARIABLES)
  background(220, 10, 120);
  let centerX = width / 2;
  let centerY = height / 2;

  let minDim = min(width, height);

  noFill();
  stroke(255);
  strokeWeight(32);
  strokeCap(SQUARE);

  arc(centerX, centerY, minDim, minDim, -PI / 3, PI / 6);
  arc(centerX, centerY, minDim, minDim, PI / 2, PI);

  arc(centerX, centerY, 300, 300, 0.9 * PI, PI / 3);
  arc(centerX, centerY, 300, 300, PI - 1.5, PI - 1);

  arc(centerX, centerY, 200, 200, PI / 4, PI);

  arc(centerX, centerY, 100, 100, PI / 10, 0.9);
}



/*
// ROTATE AND TRANSLATE
  angleMode(DEGREES);
  rectMode(CENTER);
  noStroke();
  push();
  translate(100, 100);
  rotate(45);
  rect(0, 0, 200);
  pop();
  //rotate(127);
  rect(300, 300, 200);
/*

// SHAPES
  //rectMode(CENTER);
  //noStroke();
  //fill(255);
  //rect(100,100, 50,50);
  //stroke('blue');
  //strokeWeight(1);
  //fill(200, 200, 10);
  //ellipse(100,100, 50,50);
  //noFill();
  //fill(10, 200, 200, 100);
  //quad(100, 100, 200, 110, 150, 150, 100, 150);
  //noStroke();
  //strokeWeight(5);
  //point(10, 200);
//*/
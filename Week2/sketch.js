let cDiam = 50;

let xOffset = 50;
let xSpacing = 60;

let yOffset = 50;
let ySpacing = 60;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  //For loop
  background(220, 0, 150);
  noStroke();

  for (let xPos = xOffset; xPos <= width - xOffset; xPos += xSpacing) {
    for (let yPos = yOffset; yPos <= height - yOffset; yPos += ySpacing) {
      for (let vDiam = cDiam; vDiam >= 5; vDiam -= 10) {
        fill(4 * vDiam, xPos, yPos);
        ellipse(xPos, yPos, vDiam);
      }
    }
  }
}






/* NESTED LOOP
let cDiam = 25;

let xOffset = 50;
let xSpacing = 50;

let yOffset = 50;
let ySpacing = 50;

background(220, 0, 150);

 for (let xPos = xOffset; xPos <= width - xOffset; xPos += xSpacing) {
   ellipse(xPos, height / 2, cDiam);
}

for (let yPos = yOffset; yPos <= height - yOffset; yPos += ySpacing) {
  ellipse(width / 2, yPos, cDiam);
}

}




  /*
   // PARAMETERIZING (USING VARIABLES)
  background(220, 10, 120);
  fill(255);
  ellipse(mouseX, mouseY, 50, 50);
}

/*
background(220, 10, 120);
  centerX = 150;
  centerY = 150;

  noFill();
  stroke(255);
  strokeWeight(32);
  strokeCap(SQUARE);

  arc(centerX, centerY, 400, 400, -PI / 3, PI / 6);
  arc(centerX, centerY, 400, 400, PI / 2, PI);

  arc(centerX, centerY, 300, 300, 0.9 * PI, PI / 3);
  arc(centerX, centerY, 300, 300, PI - 1.5, PI - 1);

  arc(centerX, centerY, 200, 200, PI / 4, PI);

  arc(centerX, centerY, 100, 100, PI / 10, PI);

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
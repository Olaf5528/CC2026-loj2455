
let cDiam= 100
let xSpacing = 90
let xOffset = 0

let ySpacing = 90
let yOffset = 0


function setup() {
  createCanvas(windowWidth, windowHeight);

}


function draw() {
  background(153, 204, 255);
  for(let x = 0;xOffset+  x * xSpacing < width + 50; x++){
    for (let y = 0; yOffset + y * ySpacing < height + 50 ; y++){
    noStroke();
    fill(204,255,204);
    circle(xOffset+  x * xSpacing, yOffset + y * ySpacing, cDiam);
    }
  }
}



















/*
function setup() {
  createCanvas(windowWidth, windowHeight);

}


function draw() {
  background(100, 100, 300);
  for (let x = 1; x < 20; x += 1){
    for (let y = 1; y < 20; y +=1){
      fill(0);
      noStroke();
      rect(x*50, y*50, x*y);
    }
  }


for (let x = 1; x < 20; x += 1){
    for (let y = 1; y < 20; y +=1){
      push();
      translate(x*50+100, y*50);
      rotate(PI/4);
      fill(255);
      rect(0, 0, x*y);
      pop();
    }
}
}
*/
/*
function draw() {
  background(0,0, 85);

  noFill();
  for (let i = 0; i<50; i++){
    stroke(360*(i/50), 100, 100);
    ellipse(width/2, height/2,i*10+2)
  }

  for (let i = 0; i<50; i++){
    stroke(360*(i/50), 100, 100);
    ellipse(width/3, height/3,i*10+2)
  }

  for (let i = 0; i<50; i++){
    stroke(360*(i/50), 100, 100);
    push();
    ellipse((width/3)*2, height/3,i*10+2);
    pop();
  }

   for (let i = 0; i<50; i++){
    stroke(360*(i/50), 100, 100);
    push();
    ellipse(width/3, (height/3)*2,i*10+2);
    pop();
  }


   for (let i = 0; i<50; i++){
    stroke(360*(i/50), 100, 100);
    push();
    ellipse((width/3)*2, (height/3)*2,i*10+2);
    pop();
  }
  
  for (let i = 0; i<50; i++){
    stroke(360-(360*(i/50)), 100, 100);
    ellipse(mouseX, mouseY,i*10+2)
  }
}
*/
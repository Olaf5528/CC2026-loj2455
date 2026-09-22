/*
let x =0;
let incX = 0.1;

let y = 0;
let incY = 0.025;

//wobbly
function setup() {
createCanvas(windowWidth, windowHeight);
strokeWeight(2);
noFill();
}

function draw() {
  //background(220);
  let xPos = ((sin(x)+1)/2)*width;
  let yPos = ((cos(y)+1)/2)*height;
  fill(0);
  noStroke(0);
    ellipse(xPos, yPos, 50);
  if(frameCount%20 == 0){
    noFill();
    stroke(10);
    ellipse(xPos, yPos, 50);
  }
  //console.log(sin(x));
  x += incX;
  y += incY;
}
*/

/*
let rot = 0.0;
//Loop the loop
function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  noStroke();

}

function draw() {
  background(0);

   
  fill(255);
  rectMode(CENTER);
  //for(thing to check, what to check against, what to do when you are done with a loop)
  for(let x = 0; x <9; x++){
    for(let y = 0; y < 7; y++){
      fill(360*(x*y/70), 100, 100);
      push();
      translate(x*180 + 25, y*180+25 );
      scale(frameCount%100/50);
      rotate(rot);
      rect(0,0, 130);
      pop();
      rot= 0.02;
     
    }
  }
  let modded = frameCount%10;
  rot =0.0;
  console.log('raw framecount: '+ frameCount + ', mod frame:' + modded);
  if (frameCount%100 == 0){
    noLoop();
  }
  //noLoop();
}
*/


//Loops_2
function setup() {
  createCanvas(800, 600);
  colorMode(HSB);
}

function draw() {
  background(0,0, 85);

  noFill();
  for (let i = 0; i<50; i++){
    stroke(360*(i/50), 100, 100);
    ellipse(width/2, height/2,i*10+2)
  }

  for (let i = 0; i<50; i++){
    stroke(360-(360*(i/50)), 100, 100);
    ellipse(mouseX, mouseY,i*10+2)
  }
}



/*
//Loops_1
function setup() {
  createCanvas(800, 600);
  
}

function draw() {
  background(220);

  //for(thing to check, what to check against, what to do when you are done with a loop)
  for(let i = 0; i<=8; i++){
  // do the loop here
    ellipse(i*100 + 50,100, i*10 + 10);
    //console.log(i)
  }
  noLoop();
  //ellipse(100, 100,100);
  //ellipse(200, 100,100);
  //ellipse(300, 100,100);
  //ellipse(400, 100,100);
}
*/
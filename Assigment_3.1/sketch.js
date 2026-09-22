
//Assigment_3.1
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
      translate(x*180, y*180);
      rotate(PI/4);
      rect(0,0, 130);
      pop();
     
    }
  }
}


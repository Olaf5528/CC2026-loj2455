
//Assigment_3.2
let rot = 0.0;
//Loop the loop
function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

}

function draw() {
  background(128, 128, 128);

   
  fill(130, 200, 229);
  ellipseMode(CENTER);
  //for(thing to check, what to check against, what to do when you are done with a loop)
  for(let x = 0; x <10; x++){
    for(let y = 0; y < 10; y++){
      for (let i= 0; i < 10; i++){
      push();
      translate(x*200, y*200);
      rotate(rot);
      ellipse(50,50, 70);
      fill(0);
      ellipse(100,100, i*8);
      pop();
      rot+= PI / 4;
      noLoop();
      }
    }
  }
}

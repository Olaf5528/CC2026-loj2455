//Condition
let sqSize, sqX, sqY;
let circleXpos;
let xDir;

function setup(){
    createCanvas(800, 600);
    sqX = width/2;
    sqY = height/2;
    sqSize = 100;
    rectMode(CENTER);
    circleXpos = width/2;
    xDir = 1;
}

function draw(){
    background(220);
    if (mouseX < width/2){
        fill(0);
        console.log('mouse id on the left')
    }else{
        fill(255)
    }
    if (mouseY < 200){
        noStroke();
        // or in a if statement ||
    } else if(mouseY >= 200 && mouseY<400){
        stroke(127);
        strokeWeight(2);
    } else {
        stroke(127);
        strokeWeight(20);
    }
    rect(sqX, sqY, sqSize);
    
    noStroke();
    fill(200, 200, 10);
    circle(circleXpos, height/2, 50);
    circleXpos += xDir;
    if(circleXpos >= width || circleXpos <= 0){
        xDir*= -1;
    }
}




/*
let cDiam = 25;
let xOffset = 50;
let xSpacing = 50;
let numCircles = 7;
let yPos = 200;

function setup(){
    createCanvas(windowWidth, windowHeight);
    noLoop();
}

function draw(){
    background(220, 0, 150);

    for (let xPos = xOffset; xPos <= width - xOffset; xPos += xSpacing) {
        ellipse(xPos, yPos, cDiam);
    }

}
*/



let pMapper;
let leftQuad;
let rightQuad;
let balls = [];
let numBalls = 20;

let evaQuad; // one face
let numB = 20;
let min = 20;
let max = 50;
let bubbles = [];

let ballx;
let bally;



function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    pMapper = createProjectionMapper(this);
    

    // create two quads
    //leftQuad = pMapper.createQuadMap(400, 400);
    rightQuad = pMapper.createQuadMap(400, 400);
    evaQuad = pMapper.createQuadMap(400, 400);
     myQuad = pMapper.createQuadMap(400, 400);
    // if you want to position items in your sketch
    // do so with the quad you're targeting
    for (i = 0; i < numB; i++){
        bubbles.push({
            x: random(0, evaQuad.width), y: random(0, evaQuad.height),
            xSpeed: random(0, 5), ySpeed: random(0, 5),
            size: random(min, max),
            r: random(255), g: random(255), bl: random(255), trans: random(25, 200)
        });
    }
     ballx = myQuad.width/2;
    bally = random(myQuad.height);

}
//     // create array of circles
//     for (let i = 0; i < numBalls; i++) {
//         let oneBall = {
//             x: random(leftQuad.width),
//             y: random(leftQuad.height),
//             d: random(20, 100)
//         };
//         balls.push(oneBall);
//     }
// }


function draw() {
    background(0);

    // each quad runs its own function
    //leftQuad.displaySketch(dots);
    rightQuad.displaySketch(OlafStripes);
     evaQuad.displaySketch(evaDrawing);
     myQuad.displaySketch(myDrawing);

}

// p5.mapper passes an offscreen canvas (mySketch) into this function
function evaDrawing(evaSketch) {
    // anything drawn on this surface needs 'mySketch.' in front of it
    evaSketch.background(18, 35, 59);
    // evaSketch.stroke(0);
    // evaSketch.strokeWeight(4);
    // evaSketch.line(0, 0, 400, 400); // diagonal line across the quad
    evaSketch.noStroke();
    // evaSketch.fill(0);
    
    
    for(b of bubbles){
        evaSketch.fill(b.r, b.g, b.bl, b.trans);
        evaSketch.ellipse(b.x, b.y, b.size, b.size);
        b.x += b.xSpeed;
        b.y += b.ySpeed;
        if((b.x > evaQuad.width || b.x < 0)){
            b.xSpeed *= -1;
        } else if(b.y > evaQuad.height || b.y < 0){
            b.ySpeed *= -1;
        }
    }
    // evaSketch.ellipse(ballx, evaQuad.height/2, 150);
    // ballx += 1;
    // if(ballx>evaQuad.width+75)ballx=-75;
}

// function dots(mySketch) {
//     mySketch.background("aliceblue");  
//     mySketch.noStroke();
//     mySketch.fill(180, 10, 220, 40);
//     for (let i = 0; i < numBalls; i++) {
//         mySketch.ellipse(balls[i].x, balls[i].y, balls[i].d);
//         //balls[i].x += random(-1, 1);
//     }
// }

function OlafStripes(yourSketch) {
    yourSketch.background("blue");
    yourSketch.stroke();
    yourSketch.strokeWeight(5);
    for (let i = 0; i < 400; i += 40) {
        yourSketch.line(i, 0, i, 400);
    }
         for (let i = 0; i < 400; i += 40) {
          yourSketch.line(0, i, 400, i);
    }
}


function myDrawing(mySketch) {
    // anything drawn on this surface needs 'mySketch.' in front of it
    mySketch.background("#3e5c4a");
    mySketch.stroke("#1b3a2a");
    mySketch.strokeWeight(5);
    for (let y = -70; y < 400; y += 30) {
      mySketch.strokeWeight(y / 40);
      mySketch.line(0, y, 400, y + 70);
  }
    mySketch.noStroke();
    mySketch.fill(255);
    mySketch.ellipse(ballx, bally, 40);
    ballx += 7.5;
    if(ballx>myQuad.width+75){
        ballx=-75;
        bally = random(myQuad.height);
    }
}

function keyPressed() {
    switch (key) {
        case "c":
            pMapper.toggleCalibration();
            break;
        case "f":
            let fs = fullscreen();
            fullscreen(!fs);
            break;
        case "l":
            pMapper.load("maps/map.json");
            break;
        case "s":
            pMapper.save("map.json");
            break;
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
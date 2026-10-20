
let hora;
let min;
let sec;
let start_second;
let m_bg;
let time_of_day;
let sun_hue, sun_sat, sun_bri;
let day_amount; 

function setup() {
createCanvas(windowWidth, windowHeight);
angleMode(DEGREES);
previous_hour =  hour();
m_bg= 0; 
colorMode(HSB,360,100,100);
}

function moon(){
 //let smoothSec = (millis() % 60000) / 1000;
 //let moon_time = (time_of_day + 6) % 24;
  let angleMoon = map(sec, 0, 59, -90, 90);

 fill(210, 50, 100);
 noStroke();
 rotate(angleMoon);
 ellipse(0, -600,150);
}

function sun(){
 let angleSun = map(min, 0, 59, - 90 , + 90);
 fill(50, 90, 100);
 noStroke();
 rotate(angleSun);
 ellipse(0, -600,200);
}

function oceanWaves(amplitude, position, speed,hue, sat, bri){

  fill(hue, sat, bri);
  noStroke();
  beginShape();
  for (let x = 0; x < width; x += 10) {
   let xMov = map(x, 0, width, 0, 1080);
    let y = sin(xMov+ frameCount * speed) * amplitude + height * position;
    vertex(x, y);
   }
   vertex(width, height);
    vertex(0, height);
   endShape(CLOSE);
}

function cloud(x, y) {
  fill(0, 0, 100);
  noStroke();

  ellipse(x, y, 100, 50);
  ellipse(x - 35, y + 10, 70, 40);
  ellipse(x + 35, y + 10, 70, 40);
  ellipse(x, y - 20, 70, 60);
}


function draw() {

 hora = hour();
 min = minute();
 sec = second();

time_of_day=hora+min/60+sec/3600;
//time_of_day = (millis()/1000) % 2; 

let angle = map(time_of_day, 0, 24, 0, 180);

// Create a smooth day/night transition
day_amount = sin(angle);

sun_hue = map(day_amount, 0, 1, 10, 30);
sun_sat = map(day_amount, 0, 1, 60, 35);
sun_bri = map(day_amount, 0, 1, 15, 100);


background(sun_hue,sun_sat, sun_bri);


push();

  translate(windowWidth/2, height * 0.8);

  push();
  sun();
  pop();

  push();
  moon();
  pop();

pop();


// Back layer — Light Ocean Blue
 oceanWaves(35,	0.70, 0.1, 194, 97, 61);
 // Middle layer — Deep Ocean Blue
 oceanWaves(40, 0.75, 0.15,202, 100, 37);
 // Front layer — Dark Ocean Blue
 oceanWaves(45,	0.80, 0.2, 206, 100, 30);
 
print(time_of_day);

let cloudX = (frameCount * 0.5) % (width + 200) - 100;

cloud(cloudX, height * 0.25);
cloud(cloudX + 300, height * 0.15);
}

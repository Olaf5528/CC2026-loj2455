let data;
let dataObject;

let recordType;
let val;

let stepValues = [];

async function setup() {
  createCanvas(windowWidth, windowHeight);
  
// Load the XML asynchronously in p5.js v2 setup
  dataObject = await loadXML('./Assets/step_count_two_month_averages.xml');

  // Get ALL child elements by leaving parentheses empty
  data = dataObject;

  // Get all the inner records/tags inside
  let records = data.getChildren('Period');

  for (let i = 0; i < records.length; i++){
  val = records[i].getNum('average_daily_steps');
  stepValues.push(val); 
  }
  // Check how many items were added to your array 
 console.log("Number of XML records:", records.length);

  // // Print the tag name of each child to see what's inside
  // for (let i = 0; i < data.length; i++) {  
  // console.log("Found tag:", data[i].getName());
  // }
 noLoop();
}

function drawFootprint(size){

  beginShape();

splineVertex(-size * 0.15, size * 0.4);   // Heel control point
splineVertex(-size * 0.15, size * 0.4);   // Heel bottom
splineVertex( size * 0.15, size * 0.4);   // Outer heel
splineVertex( size * 0.18, 0);            // Outer edge
splineVertex( size * 0.22, -size * 0.35); // Ball of foot (outer)
splineVertex( 0, -size * 0.45);           // Top edge under toes
splineVertex(-size * 0.12, -size * 0.35); // Ball of foot (inner)
splineVertex(-size * 0.02, 0);            // Inner arch
splineVertex(-size * 0.15, size * 0.4);   // Heel back
splineVertex(-size * 0.15, size * 0.4);   // Control point

endShape();

// 2. Graduated Toes (Big toe to Pinky toe)
ellipse(-size * 0.15, -size * 0.56, size * 0.18, size * 0.22); // Big toe
ellipse(-size * 0.03, -size * 0.58, size * 0.14, size * 0.17); // 2nd toe
ellipse( size * 0.08, -size * 0.55, size * 0.12, size * 0.15); // 3rd toe
ellipse( size * 0.17, -size * 0.50, size * 0.10, size * 0.13); // 4th toe
ellipse( size * 0.24, -size * 0.43, size * 0.08, size * 0.10); // Pinky toe
}



function draw() {
  background(255);
  stroke(0);// Outline for footprint shapes

  for (let i = 0; i < stepValues.length; i++){

    // Access the single step number for index i
    let currentStep = stepValues[i];
    let footprintSize = map(currentStep, 1798, 12846, 50, 100);

    // Default color safety net 
    //fill('#42A5F5');

    if (currentStep  >= 1798 && currentStep <= 3640){
      fill('#42A5F5');
    } else if (currentStep  >=  3641 && currentStep <= 5480) {
      fill('#66BB6A');
    } else if (currentStep  >=  5481 && currentStep <= 7320){
      fill('#B39DDB');
    } else if (currentStep >=  7321 && currentStep <= 9160){
      fill('#FDD835');
    } else if (currentStep  >=  9161 &&currentStep <= 11000){
      fill('#FB8C00');
    } else if (currentStep  >=  11001 && currentStep <= 12846) {
      fill('#E53935');
    }
    let angle = i * 0.39; // Controls spiral tightness 
    let radius = 30 + i * 8; // Grows radius outward

    let x = width / 2 + cos(angle) * radius; 
    let y = height / 2 + sin(angle) * radius;
    //let x = map(i, 0, stepValues.length, 50, width - 50);
    push(); 
    noStroke();
    translate(x, y); 
    rotate(angle + HALF_PI); // Rotates footprint to face outward 
    drawFootprint(footprintSize); 
    pop();
  } 
  // Title and information - Top left corner
push();

fill(0);
noStroke();
textAlign(LEFT, TOP);

textSize(28);
text("My Step Count", 30, 30);

textSize(14);
text("A Portrait of My Movement | 2019–2026", 30, 70);

textSize(12);
text("Source: Apple Health", 30, 100);
text("44 footprints | 2 months per footprint", 30, 120);
text("Average daily steps: 1,798–12,846", 30, 140);

pop();
}


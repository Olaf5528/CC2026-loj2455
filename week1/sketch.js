// change the quotes in this array. Be mindful of the quotation marks!
// this is the only part of the file you need to edit!

const quotes = [
  { text: "Using code to explore, experiment, and create different forms of media and art.", source: "ScottTim Rodenbröker" },
  { text: "Bringing coding and art together for creative expression rather than just functionality.", source: "Coding + Art" },
  { text: "Code to generate and transform images, sounds, data, and other creative forms.", source: "Creating Media" },
  { text: "A community of artists and creatives who collaborate and share ideas through code.", source: "Creative Community" },
  { text: "Code to translate the digital world into everyday experiences.", source: "Everyday Experience" },
  { text: "NOT standard computer science", source: "Montana Media" },
  { text: "If programming a game is like writing a book, creative coding is writing a poem.", source: "The Guidebook" },
  { text: "Creatively express ideas and create interactive experiences.", source: "Medium" }
];
// no need to edit anything below this line! 
// if you have made an error, you can check your history to see what might have gone wrong

// a variable that holds the current quote
let current = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Seed with millis() so each page load gives a different quote.
  randomSeed(millis());
  textSize(35);
  textFont("Serif");
  fill(255);
  // calls the function to pick a quote
  pickQuote();
}

function pickQuote() {
  // take a random number and use that to identify what quote to use
  current = quotes[floor(random(quotes.length))];
}

function draw() {
  background(186, 85, 211); // set the background color
  drawQuote();  // draw the quote on screen
}

function drawQuote() {   // draw text
  textAlign(CENTER, CENTER);
  text("Creative Coding is.....", width / 2, height / 2 - 48);
  textStyle(BOLD);
  text("'" + current.text + "'", width / 2, height / 2);
  textAlign(RIGHT, CENTER);
  text("-" + current.source, width - 100, height - 100);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function newQuote() {
  pickQuote();
  redraw();
}

function mousePressed() {
  newQuote();
}

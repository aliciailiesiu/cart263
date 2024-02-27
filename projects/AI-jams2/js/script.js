/**
 * AI jams
 * Alicia iliesiu
 * 
 * drawing simulation where you can draw with your index finger , select new things to draw, and finish your drawing, u can also erase ! NOTICE I have not been able to make the drawings totally disappear since I am using createGraphics
 */

"use strict";

// Current state of program
let state = `loading`; // loading, running
// User's webcam
let video;
// The name of our model
let modelName = `Handpose`;
// Handpose object (using the name of the model for clarity)
let handpose;
// The current set of predictions made by Handpose once it's running
let predictions = [];

let webcamRatio = {
  x: undefined,
  y: undefined
};

//extra canvas using createGraphics to let me draw on canvas 
let extraCanvas = undefined;

//the list of things to draw
let instructions = [
    `draw a heart!`,
    `draw a flower!`,
    `draw a cat!`,
    `draw a cupcake!`
];

//stores the current instruction we want to display, it starts at zero because it is the first index of the array
let currentInstruction = instructions[0];

//background color
let bgColor = {
    r: 252,
    g: 252,
    b: 245
};

//red button
let redButton = {
    x: 560,
    y: 60,
    size: 40,
    fill : {
        r: 255,
        g: 0,
        b: 0
    }
}

//blue button
let blueButton = {
    x:560,
    y:150,
    size:40,
    fill : {
        r:0,
        g:0,
        b:255
    }
}

/**
Starts the webcam and the Handpose
*/
function setup() {
  createCanvas(600, 600);

  //creates extra canvas that will make it possible to draw
  extraCanvas = createGraphics(600,600);
  extraCanvas.background(bgColor.r, bgColor.g, bgColor.b);

  // Start webcam
  video = createCapture(VIDEO, videoReady);
}

/*Called when webcam is ready, starts ml5
*/
function videoReady() {
  video.hide();

  // Calculate the ratio of the canvas to the
  // the webcam
  webcamRatio.x = width / video.elt.videoWidth;
  webcamRatio.y = height / video.elt.videoHeight;

  // Start the Handpose model and switch to our running state when it loads
  handpose = ml5.handpose(video, {
    flipHorizontal: true
  }, function () {
    // Switch to the running state
    state = `running`;
  });

  // Listen for prediction events from Handpose and store the results in our
  // predictions array when they occur
  handpose.on(`predict`, function (results) {
    predictions = results;
  });
}

/**
Handles the states of the program: loading, running, done
*/
function draw() {
  if (state === `loading`) {
    loading();
  } else if (state === `running`) {
    running();
    instructionSet();
    displayButton();
  }
  else if (state === `done`) {
    done();
  }
}
 
/**
Displays a simple loading screen with the loading model's name
*/
function loading() {
  background(255);

  push();
  textSize(32);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  text(`Loading ${modelName}...`, width / 2, height / 2);
  pop();
}

/**
Displays the webcam.
If there is a hand it outlines it and highlights the tip of the index finger
*/
function running() {
  // Check if there currently predictions to display
  if (predictions.length > 0) {
    // Technically there will only be ONE because it only detects ONE hand
    // Get the hand predicted
    let hand = predictions[0];
    // Highlight it on the canvas
    highlightHand(hand);
  }

}

/**
Provided with a detected hand it highlights the tip of the index finger
*/
function highlightHand(hand) {  
  // Display a circle at the tip of the index finger
  let index = hand.annotations.indexFinger[3];
  // Whenever we want to use X/Y from Handpose we need to convert it from
  // pixels referring to the webcam space into the canvas space, so we
  // multiply by the ratio we calculated for this
  let indexX = index[0] * webcamRatio.x;
  let indexY = index[1] * webcamRatio.y;
  push();
  extraCanvas.fill(0);
  extraCanvas.noStroke();
  extraCanvas.ellipse(indexX, indexY, 10);
  pop();
 

  image(extraCanvas,0,0)

  //check the distance between index finger and red button
  let d= dist(indexX, indexY, redButton.x, redButton.y);
  if (d < redButton.size/2) {
      state = `done`
  }

  //check the distance between index finger and blue button
  let d2= dist(indexX, indexY, blueButton.x, blueButton.y);
  if (d2 < blueButton.size/2) {
      state = `running`
      currentInstruction = random(instructions);
  }
}

//erases drawing
function eraser() {
    push();
    fill(bgColor.r, bgColor.g, bgColor.b);
    stroke(255)
    ellipse(mouseX, mouseY, 90);
    pop();
}

//displays the current instruction
function instructionSet() {
    
    //display instruction
    push();
    textAlign(CENTER, CENTER);
    textSize(32);
    fill(0);
    text(currentInstruction, width/2, height/6 )
    //I was not able to make the drawings disappear after the index is back on sight))))))):
    textSize(20);
    text(`mouse press to erase!`,width/2, height/4)
    pop();
}

function displayButton() {
    
    //display red button
    push();
    fill(redButton.fill.r, redButton.fill.g, redButton.fill.b);
    noStroke();
    ellipse(redButton.x, redButton.y, redButton.size);
    pop();

    //display blue button
    push();
    fill(blueButton.fill.r, blueButton.fill.g, blueButton.fill.b);
    noStroke();
    ellipse(blueButton.x, blueButton.y, blueButton.size);
    pop();

    //text of buttons
    push();
    textAlign(CENTER);
    textSize(10);
    fill(255);
    text(`done`, redButton.x, redButton.y )
    text(`another\n one`,blueButton.x, blueButton.y )
}

function done() {
    background(0);

    //text display 
    push();
    fill(255);
    textSize(32);
    textAlign(CENTER)
    text(`well done are you picasso???`, width/2, height/2);
    pop();
}

//function called when mouse is being pressed, erases current drawing
function mouseDragged() {
    eraser();
    console.log(`erasing`)
}


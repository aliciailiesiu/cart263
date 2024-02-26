/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
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

/**
Starts the webcam and the Handpose
*/
function setup() {
  createCanvas(640, 480);

  // Start webcam and hide the resulting HTML element
  video = createCapture(VIDEO);
  video.hide();

  // Start the Handpose model and switch to our running state when it loads
  handpose = ml5.handpose(video, {
    flipHorizontal: true
  }, function() {
    // Switch to the running state
    state = `running`;
  });

  // Listen for prediction events from Handpose and store the results in our
  // predictions array when they occur
  handpose.on(`predict`, function(results) {
    predictions = results;
  });
}

/**
Handles the two states of the program: loading, running
*/
function draw() {
    background(255);

  if (state === `loading`) {
    loading();
  }
  else if (state === `running`) {
    running();
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
  let indexX = index[0];
  let indexY = index[1];
  push();
  fill(255, 255, 0);
  noStroke();
  ellipse(indexX, indexY, 50);
  pop();
}

















































// "use strict";

// //webcam
// let video = undefined;

// //poseNet model
// let poseNet = undefined;

// //store data of current pose
// let pose = undefined;

// /**
//  * Description of setup
// */
// function setup() {
//     createCanvas(640,480);

//     //captures the video stream from webcam and u hide the html element with hide 
//     video = createCapture(VIDEO);
//     video.hide();

//     //load poseNet model
//     poseNet = ml5.poseNet(video, function() {
//         console.log(`model loaded`);
//     });
//     poseNet.on(`pose`, gotPoses);
// }

// function gotPoses(poses) {
//     console.log(poses);
//     if (poses.lenght > 0) {
//         pose = poses[0].pose;
//     }
// }


// /**
//  * Description of draw()
// */
// function draw() {
//     image(video, 0, 0);

//     if (pose) {
//         fill(255,0,0);
//         ellipse(pose.nose.x, pose.nose.y, 64);
//         console.log(`red dot here`)
//     }

    


    
// }
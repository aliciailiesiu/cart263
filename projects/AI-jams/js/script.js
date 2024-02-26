/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */


"use strict";

// Current state of program
let state = `loading`; // loading, running, done, restart, stop
// User's webcam
let video;
// The name of our model
let modelName = `Handpose`;
// Handpose object (using the name of the model for clarity)
let handpose;
// The current set of predictions made by Handpose once it's running
let predictions = [];

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

let pointerX = undefined;
let pointerY = undefined;

// let colr, colb, colg;
// let canvas2;
// let prevtop = null;
// let prevleft = null;
// let leftArr = [];
// let topArr = [];
// let leftAvg, topAvg;
// let pointerX, pointerY, middle, ring;
// let thumbX, thumbY, middleX, ringX;
// let pinchDistance;
// let fPainting = false;

/**
Starts the webcam and the Handpose
*/
function setup() {
  createCanvas(600, 600);

//   canvas2 = createGraphics(width, height);

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
    background(252, 252, 245);

  if (state === `loading`) {
    loading();
  }
  else if (state === `running`) {
    running();
    instructionSet();

  }

//   colr = random(0, 255);
//   colb = random(0, 255);
//   colg = random(0, 255);

  
//   for (let i = 0; i < predictions.length; i++) {
//     const prediction = predictions[i];
//     canvas2.strokeWeight(10);
//     for (let j = 0; j < prediction.landmarks.length; j++) {
//       const keypoint = prediction.landmarks[j];
//       fill(0, 255, 0);
//       noStroke();
      
//       pointerX = prediction.landmarks[8][0];
//       pointerY = prediction.landmarks[8][1];
    
//       thumbX = prediction.landmarks[4][0];
//       thumbY = prediction.landmarks[4][1];


//       middleX = prediction.landmarks[14][0];
//       middle = prediction.landmarks[14][1];

//       ringX = prediction.landmarks[16][0];
//       ring = prediction.landmarks[16][1];
    
//       pinchDistance = dist(thumbX,thumbY,pointerX,pointerY);
//     }



  
//   //Draw a line when only index is pointing. Show we're ready by making the dot red
//   if (middle < ring) {
//     fPainting = true;
//     fill(255,0,0);
//     //ready to finger paint
//     ellipse(pointerX, pointerY, 10, 10);
//     if (pointerX < width) {
//       getaverages();
//       canvas2.stroke(colr, colg, colb);
//       if (leftArr.length > 2 && prevleft>0) {
//         canvas2.line(prevleft, prevtop, leftAvg, topAvg);
//         if (prevleft > 0) {
//           prevleft = leftAvg;
//           prevtop = topAvg;
//         } else {
//             prevleft = pointerX;
//             prevtop = pointerY;
//         }
//       }
//     } 
//   }

//   else { //index is not the only finger out
//     //If the hand is extended, don't draw
//     fPainting = false;
//     fill(255);
//     ellipse(pointerX, pointerY, 10, 10);
//     leftArr.length = 0;
//     topArr.length = 0;
//     leftAvg = 0;
//     topAvg = 0;
//     prevleft = pointerX;
//     prevtop = pointerY;
//   }
//   }


// function getaverages() {

// if (leftArr.length > 3) {
//   leftArr.splice(0, 1);
//   topArr.splice(0, 1);
// }

// if (pointerX > 0 ) {
//   leftArr.push(pointerX);
//   topArr.push(pointerY);
// }
// let leftSum = 0;
// let topSum = 0;
// for (let i = 0; i < leftArr.length; i++) {
//   leftSum = leftSum + leftArr[i];
//   topSum = topSum + topArr[i];
// }
// leftAvg = leftSum / leftArr.length;
// topAvg = topSum / topArr.length;
// // console.log ("leftSum: " + leftSum +  " " + leftArr.length);



// }
// }

/**
Displays a simple loading screen with the loading model's name
*/
function loading() {
  background(bgColor.r, bgColor.g, bgColor.b);

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
  ellipse(indexX, indexY, pmouseX, pmouseY);
  pop();

  
}
}
            
//     //A function to draw ellipses over the detected keypoints
//     // function drawKeypoints() {
//     //   for (let i = 0; i < predictions.length; i += 1) {
//         // const prediction = predictions[i];
//     //     for (let j = 0; j < prediction.landmarks.length; j += 1) {
//         //   const keypoint = predictions.landmarks[j];
//           let indexX = index[0];
//             let indexY = index[1];
//           fill(0, 255, 0);
//           noStroke();
//             ellipse(indexX, indexY, 10, 10);
         
//         }
//     // }
            
  
// // }



//displays the current instruction
function instructionSet() {
    //get the element of array in current index
    
    //display instruction
    push();
    textAlign(CENTER, CENTER);
    textSize(32);
    fill(0);
    text(currentInstruction, width/2, height/6 )
    pop();
}

// mousePressed() moves to the next line in the soliloquy unless we've reached the end
function mousePressed() {
    currentInstruction = random(instructions);
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
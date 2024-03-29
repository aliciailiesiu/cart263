/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

//speech output
const speechRecognizer = new p5.SpeechRec();
let currentSpeech = `?`;

function setup() {
    createCanvas(500,500);

    speechRecognizer.onResult = handleSpeechInput;
    speechRecognizer.start();
}

function draw() {
    background(200,80,97);

    textAlign(CENTER,CENTER);
    textSize(24);
    text(currentSpeech, width/2, height/2);
}

function handleSpeechInput() {
    currentSpeech = speechRecognizer.resultString;
}
































//voice input
// const speechSynthesizer = new p5.Speech();

// function setup() {
//     createCanvas(500,500);
   
//     //synthesis settings
//     speechSynthesizer.setPitch(1);
//     speechSynthesizer.setRate(1);
//     speechSynthesizer.setVoice(`Google UK English Male`);

//     console.log(speechSynthesizer.listVoices());

// }

// function draw() {
//     background(212,102,157);
   
// }

// function mousePressed() {
//     //say something
//     speechSynthesizer.speak(`hello bitch`);
// }

















// // 1. Create a speech recognition object
// let speechRecognizer = new p5.SpeechRec();

// // Called at the start of the program
// function setup() {
//     // 2. Tell the program the function to call if the recognizer hears something
//     speechRecognizer.onResult = handleResult;
//     // 3. Tell the recognizer to start listening
//     speechRecognizer.start();
// }

// // Called when the recognizer has heard something
// function handleResult() {
//     // 4. Check if there is definitely a result
//     if (speechRecognizer.resultValue === true) {
//         // 5. If there is, print it out in the console
//         console.log(speechRecognizer.resultString);
//         // (e.g. speechRecognizer.resultString has what was said inside it)
//     }
// }
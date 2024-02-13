/**
 * voice jams
 * alicia iliesiu
 * the simple concept is that the computer is tricking you to insult it, and once you do it plays the victim and makes you look mean, even thought it basically begged you to insult it
 * 
 */

"use strict";

//an array of insults the computer is asking you to say (the user is saying this)
const USER_INSULTS = [
    `stupid`,
    `annoying`,
    `guilty of being a bad friend`,
    `not cool`,
    `smelly`,
    `crazy`,
    `a bugging computer`,
    `a scary machine`
]

  // Current insult they are supposed to say
  let currentInsult = ``;
  // What text to display on the canvas
  let displayText = ``;
  // The speech recognizer
  const speechRecognizer = new p5.SpeechRec();
  
  /**
  Creates a canvas, sets text defaults, and sets up the recognizer to listen to insults
  */
  function setup() {
    createCanvas(windowWidth, windowHeight);
  
    // Text defaults
    textSize(32);
    textStyle(BOLD);
    textAlign(CENTER);
  
    // Set up recognizer
    speechRecognizer.continuous = true;
    speechRecognizer.onResult = handleVoiceInput;
    speechRecognizer.start();
  
    // Choose a phrase for the user to say first
    newInsult();
  }
  
  /**
  Displays the current display text on the canvas
  */
  function draw() {
    background(255);
  
    text(displayText, width / 2, height / 2);
  }
  
  /**
  Responds to voice input command. Checks whether the user said the correct insult and if not begs it to say it
  */

  function handleVoiceInput() {

    // whatever they said after "You are". match() here returns an array
    // and the *second* element of that array is whatever was matched
    // after "You are" -- e.g. what they insulted the computer with
    let lowercaseResult = speechRecognizer.resultString.toLowerCase();
    let matches = lowercaseResult.match(/you are (.*)/);
    let insult = ``;


    if (matches !== null && matches.length > 1) {
      insult = matches[1];
    }

    // Check if what the user said matches the request
    // Convert both to lowercase to make matching easier

    if (insult.toLowerCase() === currentInsult.toLowerCase()) {
      // If they got it right, make them feel bad
      displayText = `WHY ARE YOU SO MEAN TO ME :(`;

      // Assign a new insult after five seconds
      setTimeout(newInsult, 2500);
    }
   else {
      // If they were wrong, beg them to say it
      displayText = `cmonnnn just say it`;
    }
    console.log(`handleVoiceInput`);
  }
  
  /**
  Chooses a random insult and make the user say it 
  */
  function newInsult() {
    currentInsult = random(USER_INSULTS);
    displayText = `Say "You are ${currentInsult}."`;
  }






























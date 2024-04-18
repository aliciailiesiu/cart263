/**
I am from nowhere
Alicia Iliesiu

this is a prototype of my final project (see project proposal)
*/

"use strict";

const speechSynthesizer = new p5.Speech();


// We create a JavaScript object to configure our Phaser 3 game
let config = {
    
    type: Phaser.AUTO,
    //game dimension
    width: 800,
    height: 600,
    physics: {
      default: 'arcade',
    },
    backgroundColor: 'rgb(255,255,255)',
    scene: [Boot,Romania, Canada, Intro, RoConvo]
  };
  
  //game configuartion
  let game = new Phaser.Game(config);
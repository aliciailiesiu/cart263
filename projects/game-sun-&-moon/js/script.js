/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

// We create a JavaScript object to configure our Phaser 3 game
let config = {
    
    type: Phaser.AUTO,
    //game dimension
    width: 800,
    height: 600,
    physics: {
      default: 'arcade',
    },
    backgroundColor: 'rgb(255,255,0)',
    scene: [Boot,Play]
  };
  
  // Here we actually create the game using this configuration!
  let game = new Phaser.Game(config);
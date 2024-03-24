/**
Finding the one piece
Alicia Iliesiu

the game is about a pirate trying to find a treasure , there are bombs he needs to avoid and because of his pirate nature he will of course find and drink some alcohol, when he drinks he gets pretty drunk and it gets harder to control him 
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
    backgroundColor: 'rgb(125, 110, 25)',
    scene: [Boot,Play,Lose,Win]
  };
  
  //game configuartion
  let game = new Phaser.Game(config);
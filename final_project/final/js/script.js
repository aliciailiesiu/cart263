/**
where do I belong
Alicia Iliesiu

this is meant to mimic a funny and light experience about the dichotomy of being a child of immigrants, I am born in Canada, but I relate more as a Romanian. When I am here people make me feel like a stranger and vice versa when I am in Romania, which made me question where do I really belong if both don't recognize me as a part of them? This leads to funny conversations and stereotypes about both countries, I made it playful and fun.
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
    backgroundColor: 'rgb(255,255,255)',
    scene: [Boot,Romania, Canada, Intro, RoConvo, RoMoney, CanConvo]
  };
  
  //game configuartion
  let game = new Phaser.Game(config);
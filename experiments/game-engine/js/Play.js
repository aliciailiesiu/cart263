class Play extends Phaser.Scene {

    // NOTE: As we know, the constructor is called when an object is created with this class
    // but in Phaser 3 we don't actually do much with it! We just make sure that we give
    // the scene a "key" via its parent which we'll need to use to refer to it in our program.
    constructor() {
      super({
        key: `play`
      });
    }
  
        create() {
            
            this.wall = this.add.sprite(100, 100, `wall`);
            this.avatar = this.add.sprite(200, 200, `avatar`);

            this.createAnimations();

            this.avatar.play(`avatar-moving`);
          


          }
    
  
    // NOTE: The update() method is a lot like the p5.js draw() function, it's called once
    // every animation frame
    update() {
    //   // Let's put in another message...
    //   console.log("Play scene updated!");
    }

    createAnimations() {
        this.anims.create({
            key: `avatar-moving`,
            frames: this.anims.generateFrameNumbers(`avatar`, {
              start: 0,
              end: 5
            }),
            frameRate: 24,
            repeat: -1
          });

          this.anims.create({
            key: `avatar-idle`,
            frames: this.anims.generateFrameNumbers(`avatar`, {
              start: 0,
              end: 0
            }),
            frameRate: 24,
            repeat: -1
          });
    }
  }
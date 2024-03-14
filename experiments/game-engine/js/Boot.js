class Boot extends Phaser.Scene {

    constructor() {
      super({
        // NOTE: We need to use an appropriate and different key!
        key: `boot`
      });
    }

      // NOTE: we add the preload() method to tell Phaser 3 we want to preload
  // asset files here
  preload() {
    // NOTE: we use special loading methods to load files into our program
    // Here we're using the special "load" property of the scene to load
    // a simple image. The parameters are
    // - The "key" we will use to refer to this asset later
    // - The path to the image asset
    // EXAMPLE: https://phaser.io/examples/v3/view/loader/image/load-image
    this.load.image(`wall`, `assets/images/wall.png`);


    this.load.spritesheet(`avatar`, `assets/images/avatar.png`, {
        // Our animation uses 32x32 pixel frames
        frameWidth: 32,
        frameHeight: 32,
        // Our animation has 4 frames, so the final frame number is 3, counting from 0
        endFrame: 5
      });
  

    // NOTE: now that we're loading an actual file, we need to wait until everything
    // loads before switching to the next scene. We use the "complete" event listener
    // of the loader to do this.
    // Note the use of an ARROW FUNCTION so that we can still use "this" correctly
    // inside the event handler!
    // EXAMPLE: https://phaser.io/examples/v3/view/loader/loader-events/load-progress
    this.load.on(`complete`, () => {
      // Switch to the Play scene
      this.scene.start(`play`);
    });
  }
  
    create() {
        // NOTE: Adding a loading message to the scene on creation
    let loadingTextStyle = {
        fontFamily: "sans-serif",
        fontSize: "40px",
        fill: "#ffffff",
        align: "center"
      };
      let loadingString = `Loading...`;
      this.loadingText = this.add.text(100, 100, loadingString, loadingTextStyle);
  
    }
  
    update() {
  
    }
  }
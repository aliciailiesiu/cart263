class Boot extends Phaser.Scene {

    constructor() {
      super({
        key: `boot`
      });
    }

  preload() {
    //loading my pixel art in the game
    this.load.image(`ro_1`, `assets/images/ro_1.png`);
    this.load.image(`ro_2`, `assets/images/ro_2.png`);
    this.load.image(`ro_3`, `assets/images/ro_3.png`);
    this.load.image(`ro_4`, `assets/images/ro_4.png`);
    this.load.image(`ro_me`, `assets/images/ro_me.png`);

    this.load.on(`complete`, () => {
      // for the prototype we will start with the scene ro since can will be very similar but in real simulation it will start with an intro
      this.scene.start(`romania`);
    });
  }
  
    create() {
        // Adding a loading message to the scene on creation
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
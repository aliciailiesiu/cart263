class Boot extends Phaser.Scene {

    constructor() {
      super({
        key: `boot`
      });
    }

  preload() {
    this.load.image(`treasure`, `assets/images/treasure.png`);
    this.load.image(`whiskey`, `assets/images/whiskey.png`);
    this.load.image(`pirate`, `assets/images/pirate.png`);
    this.load.image(`obstacle`, `assets/images/obstacle.png`);
    this.load.image(`bomb`, `assets/images/bomb.png`);

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
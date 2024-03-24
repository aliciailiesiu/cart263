class Lose extends Phaser.Scene {

    constructor() {
      super({
        key: `lose`
      });
    }
  
    create() {
  
        let loadingTextStyle = {
            fontFamily: "sans-serif",
            fontSize: "40px",
            fill: "#ffffff",
            align: "center"
          };
          let loadingString = `YOU EXPLODED AND DIED`;
          this.loadingText = this.add.text(150,200 ,loadingString, loadingTextStyle);
      
    }
  
    update() {
    }
  }
  
  
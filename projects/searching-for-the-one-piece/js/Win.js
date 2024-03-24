class Win extends Phaser.Scene {

    constructor() {
      super({
        key: `win`
      });
    }
  
    create() {
  
        let loadingTextStyle = {
            fontFamily: "sans-serif",
            fontSize: "20px",
            fill: "#ffffff",
            align: "center"
        };
        let loadingString = `HOI HOI YOU FOUND THE TREASURE`;
        this.loadingText = this.add.text(150,250, loadingString, loadingTextStyle);  
    }
  
    update() {
    }
  }
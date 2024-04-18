class Intro extends Phaser.Scene {

    constructor() {
        super({
        key: `intro`
        });
    }


    create() {
        // Adding a loading message to the scene on creation
        let loadingTextStyle = {
            fontFamily: "sans-serif",
            fontSize: "40px",
            fill: "#000000",
            align: "center"
        };
        let screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        let screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;
        let loadingString = `Loading...`;
        this.loadingText = this.add.text(screenCenterX, screenCenterY, loadingString, loadingTextStyle). setOrigin(0.5);
    }
  
    update() {
  
    }
}
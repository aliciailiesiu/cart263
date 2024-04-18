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
        //source for aligning text in the middle of the screen : https://stephengarside.co.uk/blog/phaser-3-center-text-in-middle-of-screen/#:~:text=First%20we%20declare%20a%20couple%20of%20constants%20to,it%20by%20using%20the%20setOrigin%20property%20to%200.5.
        let screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        let screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;
        let loadingString = `Welcome to WHERE DO I BELONG, where the rich tapestry of cultural duality unfolds before you. In this immersive experience, you step into the shoes of a character navigating the complex dichotomy of being Romanian by heritage and born in the vibrant landscapes of Canada.`;
        this.loadingText = this.add.text(screenCenterX, screenCenterY, loadingString, loadingTextStyle). setOrigin(0.5);
    }
  
    update() {
  
    }
}
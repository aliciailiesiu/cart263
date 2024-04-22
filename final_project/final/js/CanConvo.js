class CanConvo extends Phaser.Scene {

  constructor() {
    super({
      key: `canConvo`
    });

    //implementing speech to the scene
    this.speechSynthesizer = new p5.Speech();
  }

  create() {

    //my answers
    let myAnswers = ["", "Je suis roumaine oui" , "Oui c'est très probable", "C'EST BON J'AI COMPRIS", "HEY", "ARRÊTE OH LA LA", "J'EN AI MARRE"];
    let index = 0;
    //source for aligning text in the middle of the screen : https://stephengarside.co.uk/blog/phaser-3-center-text-in-middle-of-screen/#:~:text=First%20we%20declare%20a%20couple%20of%20constants%20to,it%20by%20using%20the%20setOrigin%20property%20to%200.5.
    let screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
    let screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;
    this.title = this.add.text(screenCenterX, screenCenterY, 'Repeat these to experience how people do not understand you', { fontFamily: 'Arial', fontSize: 20, color: '000000' }). setOrigin(0.5);

    //what happens when pointer is down
    this.input.on('pointerdown', () => {
      
      //voice speaking
      console.log(this.speechSynthesizer.listVoices())
      this.speechSynthesizer.setVoice(`Microsoft George`);
      this.speechSynthesizer.speak(`tu as un accent`);
          
      //my answers continue each time i press the pointer down
      index++;
      this.title.setText(myAnswers[index]);

      //when I dont have anymore answers the scene changes back to can
      if (index >= 7) {
        this.scene.start(`canada`);
      }
    });

    this.currentSpeech = ``;
  }
}
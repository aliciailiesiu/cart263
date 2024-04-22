class RoConvo extends Phaser.Scene {

    constructor() {
      super({
        key: `roConvo`
      });

      // The speech recognizer
      // this.speechRecognizer = new p5.SpeechRec();
      this.speechSynthesizer = new p5.Speech();

    }

    
    create() {

        let myAnswers = ["", " Sunt din Bistrita (I am from Bistrita)" , "Sunt nӑscutӑ in canada (I am born in Canada)", "Ok..."];
        let index = 0;
        //source for aligning text in the middle of the screen : https://stephengarside.co.uk/blog/phaser-3-center-text-in-middle-of-screen/#:~:text=First%20we%20declare%20a%20couple%20of%20constants%20to,it%20by%20using%20the%20setOrigin%20property%20to%200.5.
        let screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        let screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;
        this.title = this.add.text(screenCenterX, screenCenterY, 'Repeat these to experience how people do not understand you', { fontFamily: 'Arial', fontSize: 20, color: '000000' }). setOrigin(0.5);


        this.input.on('pointerdown', () =>
        {
          console.log(this.speechSynthesizer.listVoices())
          this.speechSynthesizer.setVoice(`Google português do Brasil`);
          this.speechSynthesizer.speak(`Che?`);
          

            index++;
            //  Or use the setText method if you need method chaining:
            this.title.setText(myAnswers[index]);

            if (index >= 4) {
              this.scene.start(`romania`);
            }
        });

        this.currentSpeech = ``;

        
    }
  }
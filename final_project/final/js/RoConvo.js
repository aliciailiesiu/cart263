class RoConvo extends Phaser.Scene {

    constructor() {
      super({
        key: `roConvo`
      });


      this.speechSynthesizer = new p5.Speech();
      // console.log(this.speechSynthesizer.listVoices());
      // this.speechSynthesizer.setPicth(3);

    }

    
    create() {
      console.log(this.speechSynthesizer.listVoices());
      this.speechSynthesizer.setVoice(`Google polski`);

        this.answer = [
          `sunt din bistrita!`,
          `sunt nӑscutӑ in Canada`,
          `Ok..`]


        this.index = 0;
        let title = this.add.text(100, 200, '', { fontFamily: 'Arial', fontSize: 64, color: '#00ff00' });

        this.input.on('pointerdown', () =>
        {
            this.index++;
            // //  Or use the setText method if you need method chaining:
            // title.setText(this.answer[this.index]);
        });
    
      this.speechSynthesizer.speak(`Din ce parte din Romania esht ?`);
      }
    }

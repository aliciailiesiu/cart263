class RoConvo extends Phaser.Scene {

    constructor() {
      super({
        key: `roConvo`
      });

      this.speechSynthesizer = new p5.Speech();
      console.log(this.speechSynthesizer.listVoices());

    }

    
    create() {
        
    }
}
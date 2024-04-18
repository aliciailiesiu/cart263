class RoConvo extends Phaser.Scene {

    constructor() {
      super({
        key: `roConvo`
      });
    }

    
    create() {
        console.log(speechSynthesizer.listVoices());
        
    }
}
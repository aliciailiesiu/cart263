class Canada extends Phaser.Scene {

    constructor() {
      super({
        key: `canada`
      });
    }
    
    create() {
        this.createFlag();
    }

    createFlag() {
        this.ro_flag = this.physics.add.sprite(300, 300, `ro_flag`);
    }
}
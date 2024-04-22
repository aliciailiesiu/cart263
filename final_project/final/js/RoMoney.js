class RoMoney extends Phaser.Scene {

    constructor() {
      super({
        key: `roMoney`
      });
    }

    create() {
        this.createMoney();
        this.createMe();

        //creating keybord input
        this.cursors = this.input.keyboard.createCursorKeys();
    
    }

    createMoney() {
        //creating the crowd 1
        this.moneys = this.physics.add.group({
        // All obstacles use this key
        key: `money`,
        // Create money
        quantity: 50,
        collideWorldBounds: true,

        });
  
        this.moneys.children.each(function (money) {
        let x = Phaser.Math.Between(0, this.sys.canvas.width);
        let y = Phaser.Math.Between(0, this.sys.canvas.height);
        // Set the position of the current obstacle
        money.setPosition(x, y);
        }, this);

        this.physics.add.overlap(this.mee, this.moneys, this.collect, null, this);

    }

    collect() {
        this.scene.start("romania");
    }


    createMe() {
        //creating me
        this.mee = this.physics.add.sprite(5, 400, `ro_me`);
        //I can't get out of the screen
        this.mee.setCollideWorldBounds(true);
}

update() {
    this.handleInput();

}

handleInput() {
    // EXAMPLE: https://phaser.io/examples/v3/view/input/keyboard/cursor-keys
    if (this.cursors.left.isDown) {
    this.mee.setVelocityX(-300);
    }
    else if (this.cursors.right.isDown) {
    this.mee.setVelocityX(300);
    }
    else {
    // If neither left or right are pressed, stop moving on x
    this.mee.setVelocityX(0);
    }
    if (this.cursors.up.isDown) {
    this.mee.setVelocityY(-300);
    }
    else if (this.cursors.down.isDown) {
    this.mee.setVelocityY(300);
    }
    else {
    // If neither up or down are pressed, stop moving on y
    this.mee.setVelocityY(0);
    }
}

}
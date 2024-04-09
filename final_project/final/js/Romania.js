class Romania extends Phaser.Scene {

    constructor() {
      super({
        key: `romania`
      });
    }
  
    create() {
  
        //making the sprites
        this.createCrowd_1();
        this.createCrowd_2();
        this.createCrowd_3();
        this.createCrowd_4();
        this.createMe();
  
        //creating keybord input
        this.cursors = this.input.keyboard.createCursorKeys();
    }
  
    createCrowd_1() {
        //creating the crowd 1
        this.crowds_1 = this.physics.add.group({
        // All obstacles use this key
        key: `ro_1`,
        // immovable: true,
        // Create 80 obstacles
        quantity: 800,
        });
  
        this.crowds_1.children.each(function (crowd_1) {
        let x = Phaser.Math.Between(0, this.sys.canvas.width);
        let y = Phaser.Math.Between(0, this.sys.canvas.height);
        // Set the position of the current obstacle
        crowd_1.setPosition(x, y);
        }, this);
  
        // //making obstacle collide with pirate
        // this.physics.add.collider(this.pirate, this.obstacles);
    }
  
    createCrowd_2() {
        //creating the crowd 1
        this.crowds_2 = this.physics.add.group({
        // All obstacles use this key
        key: `ro_2`,
        // immovable: true,
        // Create 80 obstacles
        quantity: 800,
        });
  
        this.crowds_2.children.each(function (crowd_2) {
        let x = Phaser.Math.Between(0, this.sys.canvas.width);
        let y = Phaser.Math.Between(0, this.sys.canvas.height);
        // Set the position of the current obstacle
        crowd_2.setPosition(x, y);
        }, this);
  
        // //making obstacle collide with pirate
        // this.physics.add.collider(this.pirate, this.obstacles);
    }
  
    createCrowd_3() {
        //creating the crowd 1
        this.crowds_3 = this.physics.add.group({
        // All obstacles use this key
        key: `ro_3`,
        // immovable: true,
        // Create 80 obstacles
        quantity: 800,
        });
  
        this.crowds_3.children.each(function (crowd_3) {
        let x = Phaser.Math.Between(0, this.sys.canvas.width);
        let y = Phaser.Math.Between(0, this.sys.canvas.height);
        // Set the position of the current obstacle
        crowd_3.setPosition(x, y);
        }, this);
  
        // //making obstacle collide with pirate
        // this.physics.add.collider(this.pirate, this.obstacles);
    }
  
    createCrowd_4() {
        //creating the crowd 1
        this.crowds_4 = this.physics.add.group({
        // All obstacles use this key
        key: `ro_4`,
        // immovable: true,
        // Create 80 obstacles
        quantity: 800,
        });
  
        this.crowds_4.children.each(function (crowd_4) {
        let x = Phaser.Math.Between(0, this.sys.canvas.width);
        let y = Phaser.Math.Between(0, this.sys.canvas.height);
        // Set the position of the current obstacle
        crowd_4.setPosition(x, y);
        }, this);
  
        // //making obstacle collide with pirate
        // this.physics.add.collider(this.pirate, this.obstacles);
    }
    createMe() {
        //creating the pirate 
        this.me = this.physics.add.sprite(5, 400, `ro_me`);
        //I can't get out of the screen
        this.me.setCollideWorldBounds(true);
    }
  
    update() {
        this.handleInput();
    }
  
    handleInput() {
        // EXAMPLE: https://phaser.io/examples/v3/view/input/keyboard/cursor-keys
        if (this.cursors.left.isDown) {
        this.me.setVelocityX(-300);
        }
        else if (this.cursors.right.isDown) {
        this.me.setVelocityX(300);
        }
        else {
        // If neither left or right are pressed, stop moving on x
        this.me.setVelocityX(0);
        }
        if (this.cursors.up.isDown) {
        this.me.setVelocityY(-300);
        }
        else if (this.cursors.down.isDown) {
        this.me.setVelocityY(300);
        }
        else {
        // If neither up or down are pressed, stop moving on y
        this.me.setVelocityY(0);
        }
    }
}
  
  
  
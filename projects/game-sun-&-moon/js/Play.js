class Play extends Phaser.Scene {

    constructor() {
      super({
        key: `play`
      });
    }
  
    create() {
  
        //speed and direction 
        this.leftSpeed = -300;
        this.rightSpeed = 300;
        this.upSpeed = -300;
        this.downSpeed = 300;
  
        //making the sprites
        this.createPirate();
        this.createObstacles();
        this.createBombs();
        this.createWhiskeys();
        this.createTreasure();
  
        //creating keybord input
        this.cursors = this.input.keyboard.createCursorKeys();
    }
  
    createObstacles() {
        //creating the many obstacles
        this.obstacles = this.physics.add.group({
        // All obstacles use this key
        key: `obstacle`,
        immovable: true,
        // Create 80 obstacles
        quantity: 80,
        });
  
        this.obstacles.children.each(function (obstacle) {
        let x = Phaser.Math.Between(0, this.sys.canvas.width);
        let y = Phaser.Math.Between(0, this.sys.canvas.height);
        // Set the position of the current obstacle
        obstacle.setPosition(x, y);
        }, this);
  
        //making obstacle collide with pirate
        this.physics.add.collider(this.pirate, this.obstacles);
    }
  
    createBombs() {
        //creating the many bombs
        this.bombs = this.physics.add.group({
        // All bombs use this key
        key: `bomb`,
        // Create 20 bombs
        quantity: 20,
        });
        this.bombs.children.each(function (bomb) {
        let x = Phaser.Math.Between(0, this.sys.canvas.width);
        let y = Phaser.Math.Between(0, this.sys.canvas.height);
        // Set the position of the current bomb
        bomb.setPosition(x, y);
        }, this);
        this.physics.add.overlap(this.pirate, this.bombs, this.lose, null, this);
    }
  
    //scene changes when pirate touches a bomb
    lose(pirate, bombs) {
        this.scene.start("lose");
    }
    createWhiskeys() {
        //creating the many whiskeys
        this.whiskeys = this.physics.add.group({
        // All whiskeys use this key
        key: `whiskey`,
        // Create 25 whiskeys
        quantity: 25,
        });
        this.whiskeys.children.each(function (whiskey) {
        let x = Phaser.Math.Between(0, this.sys.canvas.width);
        let y = Phaser.Math.Between(0, this.sys.canvas.height);
        // Set the position of the current whiskey
        whiskey.setPosition(x, y);
        }, this);
  
        //overlap of whiskey and pirate
        this.physics.add.overlap(this.pirate, this.whiskeys, this.collectItem, null, this);
    }
  
    createPirate() {
        //creating the pirate 
        this.pirate = this.physics.add.sprite(5, 400, `pirate`);
        // this.pirate.play(`pirate-moving`);
        //pirate can't get out of the screen
        this.pirate.setCollideWorldBounds(true);
    }
  
    createTreasure() {
        //creating the treasure
        this.treasure = this.physics.add.sprite(300,200, `treasure`);
        this.physics.add.overlap(this.pirate, this.treasure, this.win, null, this);
    }
  
    //scene changes when the treasure is found
    win(pirate, treasure) {
        this.scene.start("win");
        pirate.setTint(0xff0000);
    }
  
    update() {
        this.handleInput();
    }
  
    //when the whiskey is touched , pirate has weird sense of direction and whiskey disappears
    collectItem(pirate, whiskey) {
        //pirate starts getting even more drunk and starts getting weird and hard to manoeuver 
        this.leftSpeed = Math.random() * 100;
        this.rightSpeed = Math.random() * -50;
        this.upSpeed = Math.random() * 90;
        this.downSpeed = Math.random() * -150;
        pirate.setTint(0xff0000);
        //whiskey disappears when touched as if the pirate collected the whiskey 
        whiskey.destroy();
    }
  
    handleInput() {
        // EXAMPLE: https://phaser.io/examples/v3/view/input/keyboard/cursor-keys
        if (this.cursors.left.isDown) {
        this.pirate.setVelocityX(this.leftSpeed);
        }
        else if (this.cursors.right.isDown) {
        this.pirate.setVelocityX(this.rightSpeed);
        }
        else {
        // If neither left or right are pressed, stop moving on x
        this.pirate.setVelocityX(0);
        }
        if (this.cursors.up.isDown) {
        this.pirate.setVelocityY(this.upSpeed);
        }
        else if (this.cursors.down.isDown) {
        this.pirate.setVelocityY(this.downSpeed);
        }
        else {
        // If neither up or down are pressed, stop moving on y
        this.pirate.setVelocityY(0);
        }
    }
}
  
  
  
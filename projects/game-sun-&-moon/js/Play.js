class Play extends Phaser.Scene {

    constructor() {
      super({
        key: `play`
      });
    }
  
    create() {

        this.createObstacles();
        this.createBombs();
        // this.createWhiskeys();
        this.createTreasure();
        this.createPirate();

    //creating animation 
    // this.createAnimations();

        //creating keybord input
        this.cursors = this.input.keyboard.createCursorKeys();
        }
    
    createObstacles() {
        //creating the many obstacles
        this.obstacles = this.physics.add.group({
         // All obstacles use this key
        key: `obstacle`,
        // Create 20 obstacles
        quantity: 20,
        });
        this.obstacles.children.each(function(obstacle) {
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
        // Create 10 bombs
        quantity: 10,
        });
        this.bombs.children.each(function(bomb) {
        let x = Phaser.Math.Between(0, this.sys.canvas.width);
        let y = Phaser.Math.Between(0, this.sys.canvas.height);
        // Set the position of the current bomb
        bomb.setPosition(x, y);
        }, this);
    }

    createWhiskeys() {
        //creating the many whiskeys
        this.whiskeys = this.physics.add.group({
        // All whiskeys use this key
        key: `whiskey`,
        // Create 5 whiskeys
        quantity: 5,
        });
        this.whiskeys.children.each(function(whiskey) {
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
        this.pirate = this.physics.add.sprite(200, 200, `pirate`);
        //when pirate is not moving
        // this.pirate.play(`pirate-moving`);
        //pirate can't get out of the screen
        this.pirate.setCollideWorldBounds(true);
    }

    createTreasure() {
        //creating the treasure
        this.treasure = this.physics.add.sprite(200, 200, `treasure`);

    }

    update() {
        this.handleInput();
    }

    // createAnimations() {
    //     this.anims.create({
    //         key: `pirate-moving`,
    //         frames: this.anims.generateFrameNumbers(`pirate`, {
    //           start: 0,
    //           end: 0
    //         }),
    //         frameRate: 24,
    //         repeat: -1
    //       });
    //     }


    collectItem(whiskeys, item) {
        // NOTE: We'll keep it simple by just removing the collectable from the scene
        // using its .destroy() method!
        item.destroy();
      }



    handleInput() {
        // EXAMPLE: https://phaser.io/examples/v3/view/input/keyboard/cursor-keys
        if (this.cursors.left.isDown) {
          this.pirate.setVelocityX(-300);
        }
        else if (this.cursors.right.isDown) {
          this.pirate.setVelocityX(300);
        }
        else {
          // If neither left or right are pressed, stop moving on x
          this.pirate.setVelocityX(0);
        }
    
        if (this.cursors.up.isDown) {
          this.pirate.setVelocityY(-300);
        }
        else if (this.cursors.down.isDown) {
          this.pirate.setVelocityY(300);
        }
        else {
          // If neither up or down are pressed, stop moving on y
          this.pirate.setVelocityY(0);
        }
    }
}



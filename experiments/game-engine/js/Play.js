class Play extends Phaser.Scene {

    // NOTE: As we know, the constructor is called when an object is created with this class
    // but in Phaser 3 we don't actually do much with it! We just make sure that we give
    // the scene a "key" via its parent which we'll need to use to refer to it in our program.
    constructor() {
      super({
        key: `play`
      });
    }
  
        create() {
            
            // this.wall = this.physics.add.sprite(100, 100, `wall`);
            // this.wall.setImmovable(true);

            this.walls = this.physics.add.group({
                // All walls should use the wall image key
                key: `wall`,
                // Make all the walls created immovable
                immovable: true,
                // Create 16 walls
                quantity: 20,
              });
              this.walls.children.each(function(wall) {
                let x = Phaser.Math.Between(0, this.sys.canvas.width);
                let y = Phaser.Math.Between(0, this.sys.canvas.height);
                // Set the position of the current wall
                wall.setPosition(x, y);
                // Set the tint of the current wall
                wall.setTint(`0xdd3333`);
                // Note how we pass "this" as the second argument to .each() so that we can use the class'
                // methods and properties if needed
              }, this);

            // this.collectable = this.physics.add.sprite(300, 300, `wall`);
            // this.collectable.setTint(`0x3333dd`);

            this.collectables = this.physics.add.group({
                key: 'wall',
                quantity: 70
              });
          
              this.collectables.children.each(function(collectable) {
                let x = Phaser.Math.Between(0, this.sys.canvas.width);
                let y = Phaser.Math.Between(0, this.sys.canvas.height);
                collectable.setPosition(x, y);
                collectable.setTint(`0x3333dd`);
              }, this);

            this.avatar = this.physics.add.sprite(200, 200, `avatar`);
            this.avatar.setTint(`0xdd3333`);


            this.createAnimations();

            // this.avatar.setVelocityX(100);
            this.avatar.play(`avatar-idle`);
            this.avatar.setCollideWorldBounds(true);

            this.physics.add.collider(this.avatar, this.walls);
            this.physics.add.overlap(this.avatar, this.collectables, this.collectItem, null, this);


            this.cursors = this.input.keyboard.createCursorKeys();
          }
    
  
    // NOTE: The update() method is a lot like the p5.js draw() function, it's called once
    // every animation frame
    update() {
        this.handleInput();
    }


    collectItem(avatar, item) {
        // NOTE: We'll keep it simple by just removing the collectable from the scene
        // using its .destroy() method!
        item.destroy();
      }


    createAnimations() {
        this.anims.create({
            key: `avatar-moving`,
            frames: this.anims.generateFrameNumbers(`avatar`, {
              start: 0,
              end: 5
            }),
            frameRate: 24,
            repeat: -1
          });

          this.anims.create({
            key: `avatar-idle`,
            frames: this.anims.generateFrameNumbers(`avatar`, {
              start: 0,
              end: 0
            }),
            frameRate: 24,
            repeat: -1
          });
    }


    handleInput() {
        // NOTE: We can now check which keys are pressed and set the velocity of our
        // avatar sprite accordingly.
        // EXAMPLE: https://phaser.io/examples/v3/view/input/keyboard/cursor-keys
        if (this.cursors.left.isDown) {
          this.avatar.setVelocityX(-300);
        }
        else if (this.cursors.right.isDown) {
          this.avatar.setVelocityX(300);
        }
        else {
          // If neither left or right are pressed, stop moving on x
          this.avatar.setVelocityX(0);
        }
    
        if (this.cursors.up.isDown) {
          this.avatar.setVelocityY(-300);
        }
        else if (this.cursors.down.isDown) {
          this.avatar.setVelocityY(300);
        }
        else {
          // If neither up or down are pressed, stop moving on y
          this.avatar.setVelocityY(0);
        }

         // If either x or y velocity isn't zero, that the avatar is moving
    if (this.avatar.body.velocity.x !== 0 || this.avatar.body.velocity.y !== 0) {
        // NOTE: That we include a second argument of "true" to tell the animation system
        // to ignore this instruction if the animation is already playing. This avoids
        // having the animation get constantly interrupted as the player moves
        // DOCS: https://newdocs.phaser.io/docs/3.53.1/Phaser.GameObjects.Sprite#play
        this.avatar.play(`avatar-moving`, true);
      }
      // Otherwise it's not moving
      else {
        this.avatar.play(`avatar-idle`, true);
      }
    }
  }

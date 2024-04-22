class Canada extends Phaser.Scene {

    constructor() {
      super({
        key: `canada`
      });
    }
    
    create() {
      //making the sprites
        this.createMe();
        this.createFlag();
        this.createCrowd_1();
        this.createCrowd_2();
        this.createCrowd_3();
        this.createCrowd_4();
        this.createConversation();
        this.createSnowflakes();
        
  
        //creating keybord input
        this.cursors = this.input.keyboard.createCursorKeys();
    }

    createSnowflakes() {
      //from pippin buried-alive: https://github.com/pippinbarr/cart263/blob/a0eae0b7cfd9e864e6e5c645b7224b96efcdec1f/examples/game-engine/buried-alive/js/Play.js
    // Create a group of snowflakes
    this.snowflakes = this.physics.add.group({
      // Image key to use
      key: `snowflake`,
      // How many
      quantity: 300,
      // Gravity (how fast will they start and continue to fall)
      gravityY: 5,
      // Mass (how heavy are they)
      mass: 10
    });
  
    //random placement
    this.snowflakes.children.each(function (snowflake) {
      let x = Phaser.Math.Between(0, this.sys.canvas.width);
      let y = Phaser.Math.Between(0, this.sys.canvas.height);
      // Set the position of the current obstacle
      snowflake.setPosition(x,y);
      }, this);

  }

    createMe() {
      //creating me
      this.me = this.physics.add.sprite(5, 400, `can_me`);
      //I can't get out of the screen
      this.me.setCollideWorldBounds(true);
    }

    createFlag() {
      //when you touch this flag it makes you change de scene to Romania
        this.ro_flag = this.physics.add.sprite(300, 300, `ro_flag`);
        this.physics.add.overlap(this.me, this.ro_flag, this.canada, null, this);
    }

    //scene changes to romania when flag is touched
    canada(me, flag) {
      this.scene.start("romania");
    }

    createCrowd_1() {
      //creating the crowd 1
      this.crowds_1 = this.physics.add.group({
      // All obstacles use this key
      key: `can_1`,
      // Create 400
      quantity: 400,
      collideWorldBounds: false,
      // How much they bounce when they hit something
      bounceX: 0.5,
      bounceY: 0.5,
      // How quickly do they slow down while moving
      dragX: 50,
      dragY: 50
      });

      //random placement
      this.crowds_1.children.each(function (crowd_1) {
      let x = Phaser.Math.Between(0, this.sys.canvas.width);
      let y = Phaser.Math.Between(0, this.sys.canvas.height);
      // Set the position of the current obstacle
      crowd_1.setPosition(x, y);
      }, this);

      //colliders to make things more bouncy
      this.physics.add.collider(this.me, this.crowds_1);
      this.physics.add.collider(this.crowds_1, this.crowds_1);
  }

  createCrowd_2() {
      //creating the crowd 1
      this.crowds_2 = this.physics.add.group({
      // All obstacles use this key
      key: `can_2`,
      // Create 400
      quantity: 400,
      collideWorldBounds: false,
      // How much to they bounce when they hit something
      bounceX: 0.5,
      bounceY: 0.5,
      // How quickly do they slow down while moving
      dragX: 50,
      dragY: 50
      });

      //random placement
      this.crowds_2.children.each(function (crowd_2) {
      let x = Phaser.Math.Between(0, this.sys.canvas.width);
      let y = Phaser.Math.Between(0, this.sys.canvas.height);
      // Set the position of the current obstacle
      crowd_2.setPosition(x, y);
      }, this);

      //colliders to make things bounce
      this.physics.add.collider(this.me, this.crowds_2);
      this.physics.add.collider(this.crowds_2, this.crowds_2);
  }

  createCrowd_3() {
      //creating the crowd 1
      this.crowds_3 = this.physics.add.group({
      // All obstacles use this key
      key: `can_3`,
      // Create 400 obstacles
      quantity: 400,
      collideWorldBounds: false,
      // How much to they bounce when they hit something
      bounceX: 0.5,
      bounceY: 0.5,
      // How quickly do they slow down while moving
      dragX: 50,
      dragY: 50
      });

      //random placement
      this.crowds_3.children.each(function (crowd_3) {
      let x = Phaser.Math.Between(0, this.sys.canvas.width);
      let y = Phaser.Math.Between(0, this.sys.canvas.height);
      // Set the position of the current obstacle
      crowd_3.setPosition(x, y);
      }, this);

     //colliders for bounce
      this.physics.add.collider(this.me, this.crowds_3);
      this.physics.add.collider(this.crowds_3, this.crowds_3);
  }

  createCrowd_4() {
      //creating the crowd 1
      this.crowds_4 = this.physics.add.group({
      // All obstacles use this key
      key: `can_4`,
      // Create 400 obstacles
      quantity: 400,
      collideWorldBounds: false,
      // How much to they bounce when they hit something
      bounceX: 0.5,
      bounceY: 0.5,
      // How quickly do they slow down while moving
      dragX: 50,
      dragY: 50
      });

      //random placement
      this.crowds_4.children.each(function (crowd_4) {
      let x = Phaser.Math.Between(0, this.sys.canvas.width);
      let y = Phaser.Math.Between(0, this.sys.canvas.height);
      // Set the position of the current obstacle
      crowd_4.setPosition(x, y);
      }, this);

      //make things more bouncy
      this.physics.add.collider(this.me, this.crowds_4);
      this.physics.add.collider(this.crowds_4, this.crowds_4);
  }

  //sprite for convo
  createConversation() {
    this.conversation = this.physics.add.sprite(250, 450, `conversation`);
    this.physics.add.overlap(this.me, this.conversation, this.convo, null, this);
  }

  //scene changes to convo when convo sprite is touched
  convo() {
    this.scene.start("canConvo");
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
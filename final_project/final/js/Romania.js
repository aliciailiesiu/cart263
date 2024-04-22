class Romania extends Phaser.Scene {

    constructor() {
      super({
        key: `romania`
      });
    }
  
    create() {
  
        //making the sprites
        this.createMe();
        this.createFlag();
        this.createMoney();
        this.createConversation();
        this.createCrowd_1();
        this.createCrowd_2();
        this.createCrowd_3();
        this.createCrowd_4();
        
  
        //creating keybord input
        this.cursors = this.input.keyboard.createCursorKeys();
    }
  
    createCrowd_1() {
        //creating the crowd 1
        this.crowds_1 = this.physics.add.group({
        // All obstacles use this key
        key: `ro_1`,
        // Create 80 obstacles
        quantity: 400,
        collideWorldBounds: false,
        // How much to they bounce when they hit something?
        bounceX: 0.5,
        bounceY: 0.5,
        // How quickly do they slow down while moving?
        dragX: 50,
        dragY: 50
        });
  
        this.crowds_1.children.each(function (crowd_1) {
        let x = Phaser.Math.Between(0, this.sys.canvas.width);
        let y = Phaser.Math.Between(0, this.sys.canvas.height);
        // Set the position of the current obstacle
        crowd_1.setPosition(x, y);
        }, this);
  
        // Add colliders between the avatar and the happiness, and the happiness and itself
        // so that we get lots of fun bouncy physics for free!
        this.physics.add.collider(this.me, this.crowds_1);
        this.physics.add.collider(this.crowds_1, this.crowds_1);
    }
  
    createCrowd_2() {
        //creating the crowd 1
        this.crowds_2 = this.physics.add.group({
        // All obstacles use this key
        key: `ro_2`,
        // immovable: true,
        // Create 80 obstacles
        quantity: 400,
        collideWorldBounds: false,
        // How much to they bounce when they hit something?
        bounceX: 0.5,
        bounceY: 0.5,
        // How quickly do they slow down while moving?
        dragX: 50,
        dragY: 50
        });
  
        this.crowds_2.children.each(function (crowd_2) {
        let x = Phaser.Math.Between(0, this.sys.canvas.width);
        let y = Phaser.Math.Between(0, this.sys.canvas.height);
        // Set the position of the current obstacle
        crowd_2.setPosition(x, y);
        }, this);
  
        // Add colliders between the avatar and the happiness, and the happiness and itself
        // so that we get lots of fun bouncy physics for free!
        this.physics.add.collider(this.me, this.crowds_2);
        this.physics.add.collider(this.crowds_2, this.crowds_2);
    }
  
    createCrowd_3() {
        //creating the crowd 1
        this.crowds_3 = this.physics.add.group({
        // All obstacles use this key
        key: `ro_3`,
        // immovable: true,
        // Create 80 obstacles
        quantity: 400,
        collideWorldBounds: false,
        // How much to they bounce when they hit something?
        bounceX: 0.5,
        bounceY: 0.5,
        // How quickly do they slow down while moving?
        dragX: 50,
        dragY: 50
        });
  
        this.crowds_3.children.each(function (crowd_3) {
        let x = Phaser.Math.Between(0, this.sys.canvas.width);
        let y = Phaser.Math.Between(0, this.sys.canvas.height);
        // Set the position of the current obstacle
        crowd_3.setPosition(x, y);
        }, this);
  
        // Add colliders between the avatar and the happiness, and the happiness and itself
        // so that we get lots of fun bouncy physics for free!
        this.physics.add.collider(this.me, this.crowds_3);
        this.physics.add.collider(this.crowds_3, this.crowds_3);
    }
  
    createCrowd_4() {
        //creating the crowd 1
        this.crowds_4 = this.physics.add.group({
        // All obstacles use this key
        key: `ro_4`,
        // immovable: true,
        // Create 80 obstacles
        quantity: 400,
        collideWorldBounds: false,
        // How much to they bounce when they hit something?
        bounceX: 0.5,
        bounceY: 0.5,
        // How quickly do they slow down while moving?
        dragX: 50,
        dragY: 50
        });
  
        this.crowds_4.children.each(function (crowd_4) {
        let x = Phaser.Math.Between(0, this.sys.canvas.width);
        let y = Phaser.Math.Between(0, this.sys.canvas.height);
        // Set the position of the current obstacle
        crowd_4.setPosition(x, y);
        }, this);
  
        // Add colliders between the avatar and the happiness, and the happiness and itself
        // so that we get lots of fun bouncy physics for free!
        this.physics.add.collider(this.me, this.crowds_4);
        this.physics.add.collider(this.crowds_4, this.crowds_4);
    }


    createFlag() {
        this.can_flag = this.physics.add.sprite(550, 200, `can_flag`);
        this.physics.add.overlap(this.me, this.can_flag, this.canada, null, this);
    }

     //scene changes to canada when flag is touched
     canada(me, flag) {
        this.scene.start("canada");
    }

    createMe() {
        //creating me
        this.me = this.physics.add.sprite(5, 400, `me_avoid`);
        //I can't get out of the screen
        this.me.setCollideWorldBounds(true);
    }

    createConversation() {
        this.conversation = this.physics.add.sprite(250, 450, `conversation`);
        this.physics.add.overlap(this.me, this.conversation, this.convo, null, this);
    }
  
    convo() {
        this.scene.start("roConvo");
    }
  
    createMoney() {
        this.money = this.physics.add.sprite(400, 350, `money`);
        this.physics.add.overlap(this.me, this.money, this.cash, null, this);
    }

    cash() {
        this.scene.start("roMoney");
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
  
  
  
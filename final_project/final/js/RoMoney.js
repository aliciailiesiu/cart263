class RoMoney extends Phaser.Scene {

    constructor() {
      super({
        key: `roMoney`
      });
    }

    create() {
        this.createMe();
        this.createMoney();
        this.createButton();
        this.createText();
       
    }

    createText() {
        // Adding a loading message to the scene on creation
        let loadingTextStyle = {
            fontFamily: "sans-serif",
            fontSize: "25px",
            fill: "#000000",
            align: "center"
        };
        let loadingString = `'And since people here think Canadians'
                            ' are so rich, collect this money '
                            'to make the stereotypes true`;
        this.loadingText = this.add.text(20, 100, loadingString, loadingTextStyle);
    }
    createMoney() {
        //creating the crowd 1
        this.moneys = this.physics.add.group({
        // All obstacles use this key
        key: `money`,
        // Create money
        quantity: 800,
        collideWorldBounds: true,

        });
  
        this.moneys.children.each(function (money) {
        let x = Phaser.Math.Between(0, this.sys.canvas.width);
        let y = Phaser.Math.Between(0, this.sys.canvas.height);
        // Set the position of the current obstacle
        money.setPosition(x, y);
        }, this);

        this.physics.add.overlap(this.mee, this.moneys, this.collectMoney, null, this);

    }

    collectMoney(mee, money) {
        money.destroy();
    }


    createMe() {
        //creating me
        this.mee = this.physics.add.sprite(5, 400, `ro_me`);
        //I can't get out of the screen
        this.mee.setCollideWorldBounds(true);
}

    createButton() {
        //creating keybord input
        this.cursors = this.input.keyboard.createCursorKeys();

        let button = this.add.text(720, 480, 'Go back', {
             fontFamily: 'Arial',
             fontSize: '10px',
             color: '#ffffff',
             align: 'center',
             fixedWidth: 50,
             backgroundColor: '#EA72B2'
        }).setPadding(5)
 
        button.setInteractive({ useHandCursor: true });
 
        button.on('pointerover', () => {
             button.setBackgroundColor('#FEC1E2');
        });
 
        button.on('pointerout', () => {
             button.setBackgroundColor('#EA72B2');
        });
 
        button.on('pointerdown', () => {
             this.scene.start(`romania`);
        });
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
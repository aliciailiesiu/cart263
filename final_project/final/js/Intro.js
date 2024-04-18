class Intro extends Phaser.Scene {

    constructor() {
        super({
        key: `intro`
        });
    }



    // create ()
    // {
    //     let myArray = ["something", "yes hahah", "weee arrays"];
    //     let index = 0;
    //     const title = this.add.text(100, 200, 'Static Text Object', { fontFamily: 'Arial', fontSize: 64, color: '#00ff00' });

    //     this.input.on('pointerdown', () =>
    //     {
    //         index++;
    //         //  Or use the setText method if you need method chaining:
    //         title.setText(myArray[index]);

    //         if (index >= 3) {
    //             this.scene.start(`romania`);
    //         }
    //     });
       
    // }

        create ()
    {
        //button code from: https://labs.phaser.io/edit.html?src=src\game%20objects\text\simple%20text%20button.js
        let buttonRo = this.add.text(400, 200, 'Romania', {
            fontFamily: 'Arial',
            fontSize: '32px',
            color: '#ffffff',
            align: 'center',
            fixedWidth: 260,
            backgroundColor: '#EA72B2'
        }).setPadding(32)

        buttonRo.setInteractive({ useHandCursor: true });

        buttonRo.on('pointerover', () => {
            buttonRo.setBackgroundColor('#FEC1E2');
        });

        buttonRo.on('pointerout', () => {
            buttonRo.setBackgroundColor('#EA72B2');
        });

        buttonRo.on('pointerdown', () => {
            this.scene.start(`romania`);
        });
        
        let buttonCan = this.add.text(100, 200, 'Canada', {
            fontFamily: 'Arial',
            fontSize: '32px',
            color: '#ffffff',
            align: 'center',
            fixedWidth: 260,
            backgroundColor: '#EA72B2'
        }).setPadding(32)

        buttonCan.setInteractive({ useHandCursor: true });

        buttonCan.on('pointerover', () => {
            buttonCan.setBackgroundColor('#FEC1E2');
        });

        buttonCan.on('pointerout', () => {
            buttonCan.setBackgroundColor('#EA72B2');
        });

        buttonCan.on('pointerdown', () => {
            this.scene.start(`canada`);
        });

    }









        // // Adding a loading message to the scene on creation
        // let introTextStyle = {
        //     fontFamily: "sans-serif",
        //     fontSize: "30px",
        //     fill: "#000000",
        //     align: "center"
        // };
        // //source for aligning text in the middle of the screen : https://stephengarside.co.uk/blog/phaser-3-center-text-in-middle-of-screen/#:~:text=First%20we%20declare%20a%20couple%20of%20constants%20to,it%20by%20using%20the%20setOrigin%20property%20to%200.5.
        // let screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        // let screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;
        // let introString = `Welcome to "WHERE DO I BELONG?",'
        //                 ' where the rich tapestry of cultural duality unfolds before you.'
        //                 ' In this immersive experience, you step into the shoes of a character '
        //                 ' navigating the complex dichotomy of being Romanian by heritage and born '
        //                 in the vibrant landscapes of Canada.'`;
        // this.introText = this.add.text(screenCenterX, screenCenterY, introString, introTextStyle). setOrigin(0.5);

        // this.input.once('pointerdown', () =>
        // {

        //     //  Or use the setText method if you need method chaining:
        //     introString.setText('Hello world', 'bye');

        // });

      
    // }
  
    update() {
  
    }
}
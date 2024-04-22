class RoConvo extends Phaser.Scene {

    constructor() {
      super({
        key: `roConvo`
      });

      // The speech recognizer
      this.speechRecognizer = new p5.SpeechRec();

    }

    
    create() {

      this.speechRecognizer.onResult = this.handleSpeechInput();
      this.speechRecognizer.continuous = true;
      this.speechRecognizer.start();

      this.add.text(100,200,this.currentSpeech,{ fontFamily: 'Arial', fontSize: 30, color: '#00ff00' });

      // let myArray1 = ["", "Din ce parte din Romania esti", "Dar ai un accent", "ah deci nu est romanca"];
      //   let index1 = 0;
      //   const title1 = this.add.text(100, 200, 'Speak with fellow romanian', { fontFamily: 'Arial', fontSize: 30, color: '#00ff00' });

      //   let myArray2 = ["", " Sunt din bistrita", "sunt nascuta in canada", "ok..."];
      //   let index2 = 0;
      //   const title2 = this.add.text(100, 400, 'repeat these to make conversation', { fontFamily: 'Arial', fontSize: 30, color: '#00ff00' });


      //   this.input.on('pointerdown', () =>
      //   {
      //       index1++;
      //       //  Or use the setText method if you need method chaining:
      //       title1.setText(myArray1[index1]);

      //       index2++;
      //       //  Or use the setText method if you need method chaining:
      //       title2.setText(myArray2[index2]);
      //   });

      //   this.currentSpeech = ``;
    }

    update() {
      this.handleSpeechInput();
    }

    handleSpeechInput() {
      this.currentSpeech = this.speechRecognizer.resultString;
      
    
    }
}
  //       this.answer = [
  //         `sunt din bistrita!`,
  //         `sunt nӑscutӑ in Canada`,
  //         `Ok..`]


  //       // this.index = 0;
  //       // let title = this.add.text(100, 200, '', { fontFamily: 'Arial', fontSize: 64, color: '#00ff00' });

  //       // this.input.on('pointerdown', () =>
  //       // {
  //       //     this.index++;
  //       //     //  Or use the setText method if you need method chaining:
  //       //     title.setText(this.answer[this.index]);
  //       // });
    
  //     // Current insult they are supposed to say
  //     this.currentInsult = ``;
  //     // What text to display on the canvas
  //     this.displayText = ``;

  //     // Set up recognizer
  //   this.speechRecognizer.continuous = true;
  //   this.speechRecognizer.onResult = this.handleVoiceInput;
  //   this.speechRecognizer.start();
  
  //   // Choose a phrase for the user to say first
  //   this.newInsult();
  //   this.handleVoiceInput();

  //   // Adding a loading message to the scene on creation
  //   let loadingTextStyle = {
  //     fontFamily: "sans-serif",
  //     fontSize: "40px",
  //     fill: "#ffffff",
  //     align: "center"
  // };
  // this.loadingText = this.add.text(100, 100, this.displayText, loadingTextStyle);
  //     }

  //     handleVoiceInput() {

  //       // whatever they said after "You are". match() here returns an array
  //       // and the *second* element of that array is whatever was matched
  //       // after "You are" -- e.g. what they insulted the computer with
  //       this.lowercaseResult = this.speechRecognizer.resultString.toLowerCase();
  //       this.matches = this.lowercaseResult.match(/da (.*)/);
  //       this.insult = ``;
    
    
  //       if (this.matches !== null && this.matches.length > 1) {
  //         this.insult = this.matches[1];
  //       }
    
  //       // Check if what the user said matches the request
  //       // Convert both to lowercase to make matching easier
    
  //       if (this.insult.toLowerCase() === this.currentInsult.toLowerCase()) {
  //         // If they got it right, make them feel bad
  //         this.displayText = `Oh se vede ca nu esti de aici`;
    
  //         // // Assign a new insult after five seconds
  //         // setTimeout(newInsult, 2500);
  //         this.input.on('pointerdown', () =>
  //         {this.newInsult})
  //       }
  //      else {
  //         // If they were wrong, beg them to say it
  //         this.displayText = `ce????`;
  //       }
  //       console.log(`handleVoiceInput`);
  //     }
      
  //     /**
  //     Chooses a random insult and make the user say it 
  //     */
  //     newInsult() {
  //       this.currentInsult = this.answer++;
  //       this.displayText = `Say " ${this.currentInsult}."`;
  //     }
    
    // }
  

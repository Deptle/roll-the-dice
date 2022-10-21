import { Component } from '@angular/core';
import { Player } from './player';
import {deselectPlayer, selectPlayer} from './utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  // "Creating" the players
  firstPlayer = new Player(1);
  secondPlayer = new Player(2);

  // Starting Variables
  gameID = 0;
  isGameStarted = this.gameID !== 0;
  selectedDice = 0;
  selectedPlayer = this.secondPlayer;
  maxPoints = 100;

  startNewGame = () => {
    // Making sure that no other game is currently started
    this.isGameStarted = this.gameID !== 0;
    if(!this.isGameStarted) {
      // Updating Game ID
      this.gameID++;
      this.isGameStarted = this.gameID !== 0;

      // Starting the first round
      this.startNewRound();
    } else {
      let canStartNewGame = confirm("You're currently playing an unfinished game. Are you sure you want to start another one? All unsaved progress will be permanently erased.");
      if(canStartNewGame) {
        this.endGame();
        this.startNewGame();
      }
    }
  };
  endGame = () => {
    // Reseting everything
    this.firstPlayer = new Player(1);
    this.secondPlayer = new Player(2);

    this.selectedPlayer = this.secondPlayer;

    this.gameID = 0;
    this.isGameStarted = this.gameID !== 0;

    this.selectedDice = 0;

    deselectPlayer(1);
    deselectPlayer(2);
  };

  startNewRound = () => {
    // Reseting the dice
    this.selectedDice = 0;

    // Checking if a game was started
    this.isGameStarted = this.gameID !== 0;
    if(this.isGameStarted) {
      switch(this.selectedPlayer.id) {
        case 1:
          this.selectedPlayer = this.secondPlayer;
          selectPlayer(this.selectedPlayer);
          break;

        case 2:
          this.selectedPlayer = this.firstPlayer;
          selectPlayer(this.selectedPlayer);
          break;

        default:
          console.error("Failed to start a new round: Unexpected Player ID.");
          break;
      }
    }
  };

  rollDice = () => {
    if(this.isGameStarted) {
      let tempRoundScore = 0;
      let randomDiceNumber = Math.floor(Math.random() * 6) + 1; // Unsafe but will do the trick just fine
      this.selectedDice = randomDiceNumber;
      if(randomDiceNumber === 1) { // Player loses
        // Reseting the player's Round score
        this.selectedPlayer.roundScore = 0;

        // Starting a new round
        this.startNewRound();
        return;
      }
      // Updating the player's Round score
      tempRoundScore+= randomDiceNumber;
      this.selectedPlayer.roundScore+= this.selectedDice;
    }
  }

  // Hold
  hold = (player: Player) => {
    // Making sure a game is currently being played
    if(!this.isGameStarted) {
      return;
    }

    // Making sure that the player has done something before holding
    if(this.selectedPlayer.roundScore === 0) {
      return;
    }

    // Adding the player's *Round* score to the player's *Game* score
    player.gameScore+= player.roundScore;

    // Reseting the player's Round score
    player.roundScore = 0;

    // Checking if the player has won the game before starting the new round
    if(player.gameScore >= this.maxPoints) {
      alert("Player " + player.id + " has won the game!");
      this.endGame();
      return;
    }

    // Starting a new round
    this.startNewRound();
  };

  ngAfterViewInit() {
  }
}

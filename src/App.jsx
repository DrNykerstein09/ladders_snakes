import React from "react";
import "./styles.css";
import { SetPlayers } from "./SetPlayers";
import { Layout } from "./Layout";
import { Ledger } from "./Ledger";
import Dice from "./Dice";
import { snakePositions, ladderPositions } from "./SnakeAndLadderPositions";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numOfPlayers: 2,
      hidePlayerSelection: false,
      mistake: 0,
    };
  }
  updateNumberOfPlayers = (e) => {
    this.setState({
      numOfPlayers: e.target.value,
      invalidNumOfPlayers: e.target.value > 4 || e.target.value < 2,
    });
  };
  initializeGame = () => {
    let playersState = {};
    for (let i = 1; i <= this.state.numOfPlayers; i++) {
      playersState[`P${i}`] = {
        currentPosition: 0,
      };
    }
    this.setState({
      showLayout: true,
      hidePlayerSelection: true,
      ...playersState,
      chanceToRollDice: "P1",
    });
  };
  updateChanceToRollDice = () => {
    const currentChance = this.state.chanceToRollDice;
    const playerIndex = currentChance.split("")[1];
    if (playerIndex.toString() === this.state.numOfPlayers.toString()) {
      this.setState({
        chanceToRollDice: "P1",
      });
    } else {
      this.setState({
        chanceToRollDice: `P${Number(playerIndex) + 1}`,
      });
    }
  };
  updateMistake = () => {
    this.setState({
      mistake: this.state.mistake + 1,
    });
  };
  checkSnakeOrLadder = () => {
    const currentChance = this.state.chanceToRollDice;
    const currentPlayerPostion = this.state[currentChance].currentPosition;
    snakePositions.forEach((obj) => {
      if (obj.currentPosition === currentPlayerPostion) {
        alert(
          `Bad Luck Player ${currentChance}! Snake caught you - Going to position ${obj.gotoPosition}`
        );
        this.setState({
          [currentChance]: {
            currentPosition: obj.gotoPosition,
          },
        });
      }
    });
    ladderPositions.forEach((obj) => {
      if (obj.currentPosition === currentPlayerPostion) {
        alert(
          `Great Player ${currentChance}! Ladder taking u to position ${obj.gotoPosition}`
        );
        this.setState({
          [currentChance]: {
            currentPosition: obj.gotoPosition,
          },
        });
      }
    });
  };
  updatePlayerPosition = () => {
    const currentChance = this.state.chanceToRollDice;
    const currentPlayerPostion = this.state[currentChance].currentPosition;
    if (
      currentPlayerPostion + this.state.diceValue >= 100 ||
      this.state.mistake === 3
    ) {
      if (this.state.mistake === 3) {
        alert(`Game Over`);
        this.setState({
          numOfPlayers: 2,
          hidePlayerSelection: false,
          showLayout: false,
        });
        return;
      } else {
        alert(`Game Over !!! Congrats ${currentChance}`);
        this.setState({
          numOfPlayers: 2,
          hidePlayerSelection: false,
          showLayout: false,
        });
        return;
      }
    }
    this.setState(
      {
        [currentChance]: {
          currentPosition: currentPlayerPostion + this.state.diceValue,
        },
      },
      this.checkSnakeOrLadder
    );
  };
  rollDice = (num) => {
    this.setState(
      {
        diceValue: num,
      },
      this.updatePlayerPosition
    );
    this.updateChanceToRollDice(); // to be called last setTimeout
  };

  getNamesofPlayers = () => {
    let str = "";
    for (let i = 1; i <= this.state.numOfPlayers; i++) {
      str = str + ` P${i}`;
    }
    return str;
  };

  render() {
    const {
      numOfPlayers,
      invalidNumOfPlayers,
      showLayout,
      hidePlayerSelection,
    } = this.state;
    return (
      <div className="App">
        <div className="left-container">
          <h1>Serpientes y escaleras (para nerds)</h1>
          {!hidePlayerSelection && (
            <SetPlayers
              invalidNumOfPlayers={invalidNumOfPlayers}
              numOfPlayers={numOfPlayers}
              updateNumberOfPlayers={this.updateNumberOfPlayers}
              showLayout={this.initializeGame}
            />
          )}
          {showLayout && (
            <>
              <p>Los jugadores son {this.getNamesofPlayers()}</p>
              <Dice rollDice={this.rollDice} />
            </>
          )}
          <Ledger />
        </div>
        <div className="right-container">
          {showLayout && (
            <Layout
              updatedState={this.state}
              updateMistake={this.updateMistake}
              mistake={this.mistake}
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;

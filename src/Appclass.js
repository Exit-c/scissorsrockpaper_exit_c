import './App.css';
import BoxClass from './component/BoxClass';
import rockUrl from './images/rock.png';
import scissorsUrl from './images/scissors.png';
import paperUrl from './images/paper.png';
import React, { Component } from 'react';

const choice = {
  rock: {
    name: 'Rock',
    img: rockUrl,
  },
  scissors: {
    name: 'Scissors',
    img: scissorsUrl,
  },
  paper: {
    name: 'Paper',
    img: paperUrl,
  },
};

export default class Appclass extends Component {
  // constructor - 컴포넌트가 생성되자마자 호출이 되는 함수
  constructor(props) {
    super(props);
    this.state = {
      userSelect: null,
      comSelect: null,
      userName: '',
      comName: '',
      userResult: '',
      comResult: '',
      userColor: '',
      comColor: '',
    };
  }

  playBtn = (userChoice) => {
    let computerChoice = this.randomChoice();
    let youResult = this.judgement(choice[userChoice], computerChoice);
    let computerResult = this.comJudgement(youResult);
    this.setState({
      userSelect: choice[userChoice],
      comSelect: computerChoice,
      userName: choice[userChoice].name,
      comName: computerChoice.name,
      userResult: youResult,
      comResult: computerResult,
      userColor: youResult,
      comColor: computerResult,
    });
  };
  comJudgement = (result) => {
    return result === 'win' ? 'lose' : result === 'tie' ? 'tie' : 'win';
  };
  judgement = (user, computer) => {
    if (user.name === computer.name) {
      return 'tie';
    } else if (user.name === 'Rock')
      return computer.name === 'Scissors' ? 'win' : 'lose';
    else if (user.name === 'Scissors')
      return computer.name === 'Paper' ? 'win' : 'lose';
    else if (user.name === 'Paper')
      return computer.name === 'Rock' ? 'win' : 'lose';
  };

  randomChoice = () => {
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  };

  render() {
    return (
      <div>
        <h1>클래스형 컴포넌트</h1>
        <div className="main">
          <BoxClass
            title="You"
            item={this.state.userSelect}
            name={this.state.userName}
            result={this.state.userResult}
            color={this.state.userColor}
          />
          <BoxClass
            title="Computer"
            item={this.state.comSelect}
            name={this.state.comName}
            result={this.state.comResult}
            color={this.state.comColor}
          />
        </div>
        <div className="main">
          <button onClick={() => this.playBtn('rock')}>가위</button>
          <button onClick={() => this.playBtn('scissors')}>바위</button>
          <button onClick={() => this.playBtn('paper')}>보</button>
        </div>
      </div>
    );
  }
}

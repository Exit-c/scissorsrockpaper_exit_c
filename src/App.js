import './App.css';
import rockUrl from './images/rock.png';
import scissorsUrl from './images/scissors.png';
import paperUrl from './images/paper.png';
import Box from './component/Box';

import { useState } from 'react';

// 유저는 박스 두개를 볼 수 있다.(타이틀, 사진, 결과).
// 유저는 박스 하단에 가위바위보 버튼을 볼 수 있다.
// 버튼을 클릭하면 클릭한 아이템이 유저 박스에 보인다.
// 버튼을 클릭하면 컴퓨터 아이템은 랜덤하게 선택이 된다.
// 3번 4번의 아이템을 가지고 누가 이겼는지 승패를 나눈다.
// 박스 테두리가 결과에 따라 색이 변한다. 지면 빨간색, 이기면 초록색, 비기면 검정색이 보인다.

//가위바위보 객체 생성
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

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [userName, setUserName] = useState(null);
  const [comName, setComName] = useState(null);
  const [result, setResult] = useState('');
  const [comResult, setComResult] = useState('');
  const [userColor, setUserColor] = useState('');
  const [comColor, setComColor] = useState('');

  const playBtn = (userChoice) => {
    //가위바위보 이미지 전달
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    //가위바위보 이름 전달
    const name = choice[userChoice].name;
    setUserName(name);
    setComName(computerChoice.name);
    //승리,패배,무승부 결과값 전달
    let userResult = judgement(choice[userChoice], computerChoice);
    setResult(userResult);
    let computerResult = comJudgement(userResult);
    setComResult(computerResult);
    //승리,패배,무승부 결과에 따른 색 변경
    setUserColor(userResult);
    setComColor(computerResult);
  };

  // 컴퓨터의 결과값("win", "lose", "tie") - 유저의 결과값의 반대값
  const comJudgement = (result) => {
    return result === 'win' ? 'lose' : result === 'tie' ? 'tie' : 'win';
  };

  //유저의 결과값("win", "lose", "tie")
  const judgement = (user, computer) => {
    if (user.name === computer.name) {
      return 'tie';
    } else if (user.name === 'Rock')
      return computer.name === 'Scissors' ? 'win' : 'lose';
    else if (user.name === 'Scissors')
      return computer.name === 'Paper' ? 'win' : 'lose';
    else if (user.name === 'Paper')
      return computer.name === 'Rock' ? 'win' : 'lose';
  };

  // 컴퓨터의 가위바위보 랜덤 선택 함수
  const randomChoice = () => {
    let itemArray = Object.keys(choice); // choice객체의 키값을 가져옴
    let randomItem = Math.floor(Math.random() * itemArray.length); // 객체의 수만큼 랜덤번호도출
    let final = itemArray[randomItem];
    return choice[final];
  };

  return (
    <div>
      <h1>함수형 컴포넌트</h1>
      <div className="main">
        <Box
          title="You"
          item={userSelect}
          name={userName}
          result={result}
          color={userColor}
        />
        <Box
          title="Computer"
          item={computerSelect}
          name={comName}
          result={comResult}
          color={comColor}
        />
      </div>
      <div className="main">
        <button onClick={() => playBtn('scissors')}>가위</button>
        <button onClick={() => playBtn('rock')}>바위</button>
        <button onClick={() => playBtn('paper')}>보</button>
      </div>
    </div>
  );
}

export default App;

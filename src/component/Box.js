import React from 'react';

const Box = (props) => {
  return (
    <div className={`box ${props.color}`}>
      <h1>{props.title}</h1>
      <h2>{props.name}</h2>
      <img className="item-img" src={props.item && props.item.img} />
      {/* props.item로 가드값을 넣어줘야함 이유는 state 초기값이 null이기 때문에 img를 불러올 수 없기 때문 */}
      <p>{props.result}</p>
    </div>
  );
};

export default Box;

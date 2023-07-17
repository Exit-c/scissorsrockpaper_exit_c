import React, { Component } from 'react';

export default class BoxClass extends Component {
  render() {
    return (
      <div className={`box ${this.props.color}`}>
        <h1>{this.props.title}</h1>
        <h2>{this.props.name}</h2>
        <img
          className="item-img"
          src={this.props.item && this.props.item.img}
        />
        <p>{this.props.result}</p>
      </div>
    );
  }
}

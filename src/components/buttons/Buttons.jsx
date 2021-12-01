import React, { Component } from 'react';
// import {addVote} from '../statistics/Statistics';

class Buttons extends Component {
  render() {
    const { label1, label2, label3, addVote } = this.props;
    return (
      <div>
        <button type="button" onClick={addVote}>{label1}</button>
        <button type="button" onClick={addVote}>{label2}</button>
        <button type="button" onClick={addVote}>{label3}</button>
      </div>
    )
  }
}

export default Buttons

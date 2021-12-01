import React, { Component } from 'react';
// import Buttons from '../buttons/Buttons';
import Statistics from '../statistics/Statistics';
// import styles from './Feedback.module.css';

class Feedback extends Component {
  
  render() {
    return (
      <div>
        <h1 className="title">Please leave a feedback</h1>
        {/* <Buttons label1={"Good"} label2={"Neutral"} label3={"Bad"} addVote={this.addGoodOpinion}/> */}
        <h2 className="subtitle">Statistics</h2>
        <Statistics />
      </div>
    )
  }
}

export default Feedback

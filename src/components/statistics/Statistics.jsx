import React, { Component } from "react";
import style from "./Statistics.module.css";

class Statistics extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    percentage: 0,
  };

  addGoodOpinion = (evt) => {
    this.setState((state, props) => ({
      ...state,
      good: state.good + 1,
    }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  addNeutralOpinion = (evt) => {
    this.setState((state, props) => ({
      ...state,
      neutral: state.neutral + 1,
    }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  addBadOpinion = (evt) => {
    this.setState((state, props) => ({
      ...state,
      bad: state.bad + 1,
    }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  // countTotalFeedback = ({good, neutral, bad}) => good + neutral + bad;
  countTotalFeedback = () => {
    this.setState((state) => ({
      ...state,
      total: state.good + state.neutral + state.bad,
    }));
  };

  countPositiveFeedbackPercentage = () => {
    this.setState((state) => ({
      ...state,
      percentage: (state.good / state.total) * 100,
    }));
  };

  render() {
    // const { statValue } = this.props;
    return (
      <div className={style.container}>
        <h1 className="title">Please leave a feedback</h1>
        <div>
          <button
            type="button"
            onClick={this.addGoodOpinion}
            className={style.positive}>
            Good
          </button>
          <button
            type="button"
            onClick={this.addNeutralOpinion}
            className={style.buttons}>
            Neutral
          </button>
          <button
            type="button"
            onClick={this.addBadOpinion}
            className={style.negative}>
            Bad
          </button>
        </div>
        <h2 className="subtitle">Statistics</h2>
        <p>
          Good: <span>{this.state.good}</span>
        </p>
        <p>
          Neutral: <span>{this.state.neutral}</span>
        </p>
        <p>
          Bad: <span>{this.state.bad}</span>
        </p>
        <p>
          Total: <span>{this.state.total}</span>
        </p>
        <p>
          Positive feedback: <span>{Math.round(this.state.percentage)}%</span>
        </p>
      </div>
    );
  }
}

export default Statistics;

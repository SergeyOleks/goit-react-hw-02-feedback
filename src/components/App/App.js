import css from 'components/App/App.module.css';

import { Component } from 'react';
import Section from 'components/Section/Section';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    countTotal: 0,
    positivePercent: 0,
  };

  countTotalFeedback = () => {
    this.setState({
      countTotal: (this.state.countTotal = this.state.countTotal + 1),
    });
  };

  onLeaveFeedback = event => {
    const { name } = event.target;

    this.setState({
      [name]: (this.state[name] = this.state[name] + 1),
    });
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countPositiveFeedbackPercentage = () => {
    const { good, countTotal } = this.state;
    const positivePercent = good > 0 ? Math.ceil((good / countTotal) * 100) : 0;
    this.setState({
      positivePercent: positivePercent,
    });
  };

  render() {
    const { good, neutral, bad, countTotal, positivePercent } = this.state;

    return (
      <div className="App">
        <Section title="Pleace leave feedback" />
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={this.onLeaveFeedback}
        />

        {countTotal > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotal}
            positivePercent={positivePercent}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    );
  }
}

export default App;

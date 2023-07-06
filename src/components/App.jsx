import { useState } from 'react';

import Section from 'components/section';
import Statistics from 'components/statistics';
import FeedbackOptions from 'components/feedbackOptions';
import Notification from 'components/notificationMessage';

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const feedbackCounter = option => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [option]: prevFeedback[option] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;

    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const percent = feedback.good / countTotalFeedback();
    return percent === 0 ? 0 : Math.round(percent * 100);
  };

  // const total = countTotalFeedback();

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={feedback} onLeaveFeedback={feedbackCounter} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </>
  );
};

export default App;

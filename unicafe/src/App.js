import React, { useState } from 'react';

const Header = () => {
  return <h1>give feedback</h1>;
};

const Title = () => {
  return <h2>statistics</h2>;
};

const Statistics = (props) => {
  return (
    <>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
    </>
  );
};

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <Header />
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <Title />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;

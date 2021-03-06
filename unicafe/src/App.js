import React, { useState } from 'react';

const Header = () => {
  return <h1>give feedback</h1>;
};

//button with event handler click and text
const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const Title = () => {
  return <h2>statistics</h2>;
};

//statistic table format
const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  );
};

//component display statistics
const Statistics = (props) => {
  const good = props.good;
  const neutral = props.neutral;
  const bad = props.bad;
  const all = good + neutral + bad;
  const score = good * 1 + neutral * 0 + bad * -1;
  const average = score / all;
  const positive = (good / all) * 100 + ' %';

  if (all === 0) {
    return <p>No feedback given</p>;
  } else {
    return (
      <>
        <table>
          <tbody>
            <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={neutral} />
            <StatisticLine text="bad" value={bad} />
            <StatisticLine text="all" value={all} />
            <StatisticLine text="average" value={average} />
            <StatisticLine text="positive" value={positive} />
          </tbody>
        </table>
      </>
    );
  }
};

const App = () => {
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

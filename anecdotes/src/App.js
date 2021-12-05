import React, { useState } from 'react';

//pour faire step 2 voir array method fill
const Title = (props) => {
  return <h2>{props.text}</h2>;
};

const Anecdote = (props) => {
  return <p>{props.anecdotes[props.selected]}</p>;
};

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ];
  const votes = [...anecdotes].fill(0);
  const [selected, setSelected] = useState(0);

  console.log(votes);
  return (
    <div>
      <Title text="Anecdote of the day *~(^o^)~*" />
      <Anecdote anecdotes={anecdotes} selected={selected} />
      <Button text="vote !" handleClick={() => (votes[selected] += 1)} />
      <Button
        text="Random anecdotes"
        handleClick={() =>
          setSelected(Math.floor(Math.random() * anecdotes.length))
        }
      />
      <Title text="Most popular Anecdote from votes" />
    </div>
  );
};

export default App;

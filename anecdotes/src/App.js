import React, { useState } from 'react';

const Title = (props) => {
  return <h2>{props.text}</h2>;
};

const Anecdote = (props) => {
  return (
    <>
      <p>{props.anecdotes[props.selected]}</p>
      <p>has {props.votes[props.selected]} votes</p>
    </>
  );
};

const Popular = (props) => {
  const maxVote = Math.max(...props.votes);
  const maxIndex = [...props.votes].indexOf(maxVote);
  return (
    <>
      <p>{props.anecdotes[maxIndex]}</p>
      <p>has {maxVote} votes</p>
    </>
  );
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

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState([...anecdotes].fill(0));

  const handleVote = () => {
    let up = [...votes];
    up[selected] += 1;
    setVotes(up);
  };

  console.log(votes);

  return (
    <div>
      <Title text="Anecdote of the day *~(^o^)~*" />
      <Anecdote anecdotes={anecdotes} selected={selected} votes={votes} />
      <Button text="vote !" handleClick={handleVote} />
      <Button
        text="Random anecdotes"
        handleClick={() =>
          setSelected(Math.floor(Math.random() * anecdotes.length))
        }
      />
      <Title text="Most popular Anecdote from votes" />
      <Popular anecdotes={anecdotes} selected={selected} votes={votes} />
    </div>
  );
};

export default App;

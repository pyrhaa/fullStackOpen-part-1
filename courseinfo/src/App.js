import React from 'react';

const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Part = (props) => {
  const arrayPart = props.parts;
  const exercices = arrayPart.map((el) => el.exercises);
  const parts = arrayPart.map((el) => el.name);
  return (
    <>
      <p>
        {parts} {exercices}
      </p>
    </>
  );
};

const Content = (props) => {
  return (
    <div>
      <Part parts={props.parts} />
    </div>
  );
};

const Total = (props) => {
  return (
    <p>
      Number of exercises{' '}
      {props.exercises1 + props.exercises2 + props.exercises3}
    </p>
  );
};

const App = () => {
  const course = 'Half Stack application development';
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default App;

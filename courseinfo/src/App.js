import React from 'react';

const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Part = (props) => {
  const arrayPart = props.parts;
  // const exercices = arrayPart.map((el) => el.exercises);

  const parts = arrayPart.map((el) => {
    return <li key={el.name}>{el.name + ' ' + el.exercises}</li>;
  });

  console.log(parts);
  return <>{parts}</>;
};

const Content = (props) => {
  return (
    <div>
      <p>
        <Part parts={props.parts} />
      </p>
    </div>
  );
};

const Total = (props) => {
  const exercices = props.parts.map((el) => el.exercises);
  const [first, second, third] = exercices;
  const sum = first + second + third;
  return <p>Number of exercises {sum}</p>;
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

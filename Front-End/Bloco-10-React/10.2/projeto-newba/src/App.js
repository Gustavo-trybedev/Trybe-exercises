import './App.css';
import React, { Component } from 'react';


const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}
const tasks = ['Learn React', 'Learn Angular', 'Learn Vue'];

class App extends Component {
  render() {
    return (
    <ul>
      { tasks.map(task => Task(task)) }
    </ul>
  );
};
}

export default App;

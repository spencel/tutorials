import React, { Component } from 'react';
import TaskSteps from './components/TaskSteps.js';
import taskStepsData from './data.json';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    //console.log( taskStepsData );
    return (
      <div className="App">
        <header className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <TaskSteps taskStepsData={ taskStepsData } />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './app.css';
import Table from './Table';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { username: null };
  }

  componentDidMount() {
    fetch('/api/test')
      .then(res => res.json())
      .then(user => {
        this.setState({ username: user.username })
      });
  }

  render() {
    return (
      <div>
        {this.state.username ? (
          <div>
            <h1>Hello {this.state.username}</h1>
            <Table />
          </div>
        ) : (
          <h1>Loading.. please wait!</h1>
        )}
      </div>
    );
  }
}

import React, { Component } from 'react';
import './App.css';
import { render } from 'react-dom';

class App extends Component {
  render() {
    const name = 'Kirin'
    const loading = false

    return (
      <div className="App">
        <h1>My App</h1>
        {loading ? (<h4>Loading...</h4>) : (<h1>Hello {name}</h1>)}
      </div>
    );
  }
}

export default App;

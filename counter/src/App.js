import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      number: 0
    }
  }

  addNumber = ()=>{
    this.setState({
      number: this.state.number + 1
    })
  }

  remNumber = () => {
    this.setState({
      number: this.state.number - 1
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.number}</h1>
        <button onClick={this.addNumber}>+1</button>
        <button onClick={this.remNumber}>-1</button>

      </div>
    );
  }
}

export default App;

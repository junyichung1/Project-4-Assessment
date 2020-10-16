import React, { Component } from 'react';
import './App.css';
import CircleSelector from '../src/components/CircleSelector/CircleSelector'
import Circles from '../src/components/Circles/Circles'

const circles = [1, 2, 3, 4]

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedCircle: ''
    };
  }

  handleColorSelection = (num) => {
    this.setState({selectedCircle: num})
    console.log(num)
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector 
          handleColorSelection={this.handleColorSelection}
          circles={circles}
          selectedCircle={this.state.selectedCircle}
          />
          <Circles 
          selectedCircle={this.state.selectedCircle}
          />

        
        </main>
      </div>
    );
  }
}

export default App;
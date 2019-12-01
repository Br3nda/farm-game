import React from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';

class Garden extends React.Component {
  state = {
    rows: [1, 2, 3],
  };

  render() {
    return (
        <div className="game-area">
        {this.state.rows.map(function(row, i){
            return <GardenRow key={i} row={row}/>;
        })}
        </div>
      );
  }
}

class GardenRow extends React.Component {
  state = {
    squares: [1, 2, 3],
  };

  render() {
    return (
        <div className="garden-row">
          {this.state.squares.map(function(square, i){
              return <GardenSquare key={i} square={square}/>;
          })}
        </div>
      );
  }
}

let GRASS = 0;
let DIRT=1;
let PLANTS = ['pumpkin', 'potatoes', 'radish', 'tomato', 'carrot', 'wheat'];

class GardenSquare extends React.Component {
  state = {
    square_state: GRASS,
    plant_name: undefined
  };

  className = () => {
    if(this.state.plant_name != undefined) {
      return `square ${this.state.plant_name}`
    }
    if (this.state.square_state == GRASS)
      return 'square grass';
    if (this.state.square_state == DIRT)
      return 'square dirt';
    return 'square';
  }

  handleClick = (e) => {
    let current_state = this.state.square_state;
    if (current_state != DIRT){
      this.setState({square_state: current_state+1});
    }
    else {
      let min = 0; let max=1;
      var random = Math.floor(10 * Math.random() * (+max - +min) + +min);
      console.log(random);
      let plant_name = PLANTS[random];
      console.log(plant_name);
      this.setState({plant_name})
      if (plant_name == undefined)
        this.setState({square_state: GRASS})
    }
    e.preventDefault();
  }

  render() {
    return (
      <div className={this.className()} onClick={this.handleClick}></div>
    );
  }
}

class App extends React.Component {
  render() {
    return (

      <div className="App">
        <header className="App-header">
          <h1>farm</h1>
          <Garden />
        </header>
      </div>
    );
  }
}

export default App;

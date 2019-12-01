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
        <div class="game-area">
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
        <div class="garden-row">
          {this.state.squares.map(function(square, i){
              return <GardenSquare key={i} square={square}/>;
          })}
        </div>
      );
  }
}


class GardenSquare extends React.Component {
  render() {
    return (
      <div class="square grass"></div>
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

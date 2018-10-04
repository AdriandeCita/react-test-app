import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Films from "./components/Films";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header
            characters={[{
                img: '',
                name: 'Luke Skywalker'
            },{
                img: '',
                name: 'R2D2'
            },{
                img: '',
                name: 'C3PO'
            }]}
        />
        <Films/>
      </div>
    );
  }
}

export default App;

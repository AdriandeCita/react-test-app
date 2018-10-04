import React, { Component } from 'react';
import Header from "./components/Header";
import Films from "./components/Films";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Films/>
      </div>
    );
  }
}

export default App;

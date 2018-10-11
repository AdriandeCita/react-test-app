import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import LoaderFilmList from "./components/LoaderFilmList";
import ModalRoot from "./containers/ModalRoot";
import Modal from "react-modal";

Modal.setAppElement(document.getElementById('root'));

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <LoaderFilmList/>
          <ModalRoot/>
      </div>
    );
  }
}

export default App;

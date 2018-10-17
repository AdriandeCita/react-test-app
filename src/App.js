import React, {Component} from 'react';
import './App.css';
import Header from "./components/Header";
import MovieListLoader from "./components/MovieListLoader";
import ModalRoot from "./containers/ModalRoot";
import Modal from "react-modal";

Modal.setAppElement(document.getElementById('root'));

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <MovieListLoader/>
                <ModalRoot/>
            </div>
        );
    }
}

export default App;

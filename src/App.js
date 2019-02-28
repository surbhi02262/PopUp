import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Popup from './Popup'

class App extends Component {
  state= {
    open: false
  }

  handleOPopup = () => {
    this.setState({open: true})
  }
  handleClose = () => {
    this.setState({open: false})
  }
  render() {
    const {open} = this.state
    return (
      <div className="App">
        <Popup isOpen={open} content={[{name: 'saurav'}]} closePop={this.handleClose} />
        <button className="open-popup-btn" onClick={() => this.handleOPopup()}>Open Pop Up</button>
      </div>
    );
  }
}

export default App;

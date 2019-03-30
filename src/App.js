import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header"

class App extends Component {
  render() {
    return (
        <div className="container">
          <div className="row">
            <div className="col-xs-1">
              <Header/>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-1">
              <h1>Hello World</h1>
            </div>
          </div>
        </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header"

class App extends Component {
  render() {
    const user = {
      name:"michael",
      family:["jenny","rain","sam"]
    };

    return (
        <div className="container">
          <div className="row">
            <div className="col-xs-1">
              <Header uid = {1} sex = {"male"} user = {user}>
                  <h1>this is child node</h1>
              </Header>
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

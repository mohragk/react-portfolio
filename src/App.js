import React, { Component } from "react";
import "./App.css";
import Main from "./Main"
import Downloads from "./Downloads"


import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>

        <Switch>
            <Route path="/" component={Main} exact/>
            <Route path="/downloads" exact >
              <Downloads dark title="downloads"></Downloads>
            </Route>
            <Route component={Error}/>
           </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;


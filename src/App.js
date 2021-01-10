import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom'

import './App.css';

import Home from "./pages/home/home.page";
import Detail from "./pages/detail/detail.page";
import Profile from "./pages/profile/profile.page";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/detail" component={Detail} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

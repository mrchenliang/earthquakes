import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import Home from "./pages/home/home.page";
// import Detail from "./pages/detail/detail.page";
// import Profile from "./pages/profile/profile.page";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
            <Route path="/" component={Home} />
            <Route path="/home" component={Home} />
            {/* <Route path="/detail" component={Detail} /> */}
            {/* <Route path="/profile" component={Profile} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

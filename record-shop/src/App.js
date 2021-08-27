// import React from "react";
import ReadyPlayer from "./ReadyPlayer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { Contact } from "./Contact";
import Genre from "./Genre";
import { Navigation } from "./components/Player/Navigation";
import React, { useState } from "react";
import Cart from "./Cart";
import Login from "./Login";

const App = () => {
  return (
    <div className="App">
      <>
        <BrowserRouter>
          <div className="theme">
            <Navigation />
          </div>
          <Switch>
            <Route exact path="/" component={Home} />

            <Route exact path="/about" component={About} />

            <Route path="/genre" component={Genre} />

            <Route exact path="/contact" component={Contact} />

            <Route exact path="/cart" component={Cart} />

            <Route exact path="/login" component={Login} />

            <ReadyPlayer />
          </Switch>
        </BrowserRouter>
      </>
    </div>
  );
};

export default App;

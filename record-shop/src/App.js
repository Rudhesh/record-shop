import React from "react";
import ReadyPlayer from "./ReadyPlayer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { Contact } from "./Contact";
import { Genre } from "./Genre";
import { Navigation } from "./components/Player/Navigation";
import { Cart } from "./Cart";
import Theme from "./components/Theme";

const App = () => {
  return (
    <BrowserRouter>
      <div className="theme">
        {/* <Theme /> */}
        <Navigation />
      </div>
      <Switch>
        <>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/genre">
            <Genre />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <ReadyPlayer />
        </>
      </Switch>
    </BrowserRouter>
  );
};

export default App;

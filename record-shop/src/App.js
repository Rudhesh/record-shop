import React from "react";
import ReadyPlayer from "./ReadyPlayer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { Contact } from "./Contact";
import Genre from "./Genre";
import { Navigation } from "./components/Player/Navigation";

const App = () => {
  return (
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

          <ReadyPlayer />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;

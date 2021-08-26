// import React from "react";
import ReadyPlayer from "./ReadyPlayer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { Contact } from "./Contact";
import Genre from "./Genre";
import { Navigation } from "./components/Player/Navigation";
<<<<<<< HEAD
import { Cart } from "./Cart";
import Theme from "./components/Theme";
import React, { useState } from 'react'
import LoginForm from './component/LoginForm';
import SignupForm from './component/SignupForm'
=======
import Cart from "./Cart";
import CourseItem from "./components/Player/CourseItem";
>>>>>>> 7992c0618209b93df33b47e7ee747c0ffa1b458b



// Log In Form 
const App = () => {

  const adminUser = {
    email: "user@user.com",
    password: "user123"
  }
  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");


  const Login = details => {
    console.log(details);

    if (details.email == adminUser.email && details.password == adminUser.password) {
      console.log("Logged In ");
      setUser({
        name: details.name,
        email: details.email
      });
    } else {
      alert("Details do not match")
    }
  }

  const Logout = () => {
    setUser({ name: "", email: "" })
    console.log("Logout");
  }


  return (
<<<<<<< HEAD
    <div>
     <div className="App">
      {(user.email != "") ? (
        <div className="welcome">
          <h2> Welcome, <span>{user.name}</span></h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <div style={{display:"flex", justifyContent:"space-around"}}>
        <SignupForm/>
        <LoginForm Login={Login} error={error} style={{marginLeft:"80px"}}/>
        </div>
        )}

    </div>


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
    </div>
=======
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
          <ReadyPlayer />
        </Switch>
      </BrowserRouter>
    </>
>>>>>>> 7992c0618209b93df33b47e7ee747c0ffa1b458b
  );
};


export default App;

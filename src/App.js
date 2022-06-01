import "./App.css";
import React from "react";

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Home from "./Home";
import About from "./About";
import NoMatch from "./NoMatch";
import UserProfile from "./UserProfile";
import BackButton from "./BackButton";
import ForwardButton from "./ForwardButton";
import GoJump from "./GoJump";
import GoHomeButton from "./GoHomeButton";
import PostList from "./PostList";
import  User from "./User";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
        <div>
      <Link to="/">Home</Link>
        </div>
        <div>
      <Link to="/about">About</Link>
        </div>
        {Array(10)
          .fill()
          .map((ignoredValue, index) => index + 1)
          .map((id) => (
            <div key={id}>
              <Link to={`/user/${id}`}>User {id}</Link>
            </div>
          ))
        }
        </nav>
      <Switch>
      <Route exact path='/'>
        <Home />
      </Route>

      <Route path='/about'>
        <About />
      </Route>

      <Route path='/user/:userId'>
        <User/>
      </Route>

      <Route>
        <NoMatch/>
      </Route>
      </Switch>
      <BackButton />
      <ForwardButton />
      <GoJump />
      <GoHomeButton />
      </div>
    </Router>
  )
}

export default App;

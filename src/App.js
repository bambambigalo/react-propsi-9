import React from "react";
import "./style.css";
import Header from "./Header.js";
import Home from "./pages/Home";
import Account from "./pages/Account";
import Contacts from "./pages/Contacts";
import Apple from "./pages/Apple";
import Settings from "./pages/Settings";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="root">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/account" component={Account} />
          <Route exact path="/contacts" component={Contacts} />
          <Route exact path="/apple" component={Apple} />
          <Route exact path="/settings" component={Settings} />
        </Switch>
       
      </div>
    </Router>
  );
}

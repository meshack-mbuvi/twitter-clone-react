import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// components
import Home from "./home";
import Signup from "./signup";
import Navbar from "./navbar";
import Profile from "./profile";
import Messages from "./messages";
import notifications from "./notifications";

export class Index extends React.Component {
  public render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route path="/" exact={true} component={Home} />
          <Route path="/signup" component={Signup} />
          <Route path="/profile" component={Profile} />
          <Route path="/messages" component={Messages} />
          <Route path="/notifications" component={notifications} />
        </div>
      </Router>
    );
  }
}

export default Index as React.ComponentType<any>;

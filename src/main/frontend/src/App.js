import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/layout/Header";
import Submission from "./pages/Submission";
import Listing from "./pages/Listing";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container-fullwidth">
            <Header />
            <Route exact path="/" component={Home} />
            <Route exact path="/submission" component={Submission} />
            <Route exact path="/about" component={About} />
            <Route exact path="/listing" component={Listing} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

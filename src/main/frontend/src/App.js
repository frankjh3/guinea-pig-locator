import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";

import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/layout/Header";
import Submission from "./pages/Submission";
import Listing from "./pages/Listing";

import "./App.css";

class App extends React.Component {
  state = {
    listings: []
  };

  componentDidMount() {
    axios
      .get("/api/v1/listing")
      .then(res => this.setState({ listings: res.data }));
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container-fullwidth">
            <Header />
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <React.Fragment>
                    <Home listings={this.state.listings} />
                  </React.Fragment>
                )}
              />
              <Route exact path="/submission" component={Submission} />
              <Route exact path="/about" component={About} />
              <Route
                exact
                path="/listing/:id"
                render={props => (
                  <React.Fragment>
                    <Listing {...props} />
                  </React.Fragment>
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

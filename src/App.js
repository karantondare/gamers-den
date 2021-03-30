import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import GlobalStyles from "./styles/GlobalStyles";
import GameDetails from "./components/GameDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyles />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/:id">
            <GameDetails />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

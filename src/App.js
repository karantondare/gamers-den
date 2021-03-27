import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyles />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

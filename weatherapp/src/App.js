import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Loading from "./components/loading/Loading";
import Weather from "./components/weather/Weather";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/weather">
          <Weather />
        </Route>
        <Route path="/loading">
          <Loading />
        </Route>
        <Route path="/">
          <Redirect to="/weather" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

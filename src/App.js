import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
import ProjectPage from "./pages/ProjectPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <div>
        <Nav />

        <Switch>
          <Route path="/project">
            <ProjectPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

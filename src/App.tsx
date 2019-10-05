import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Latest from "./pages/Latest";
import "./App.scss";

const App: React.FC = () => (
  <div className="currency-app">
    <h1>Currencies App</h1>
    <Router>
      <nav className="navigation">
        <Link to="/">Home</Link>
        <Link to="/latest">Latest</Link>
      </nav>
      <Route exact path="/" component={Home} />
      <Route exact path="/latest" component={Latest} />
    </Router>
  </div>
);

export default App;

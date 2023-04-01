import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddTutorial from "./components/add-tutorial.component";
import Tutorial from "./components/tutorial.component";
import TutorialsList from "./components/tutorials-list.component";
import Settings from "./components/settings.component";
import About from "./components/about.component";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark">
          <Link to={"/add"} className="navbar-brand">
            Today.
          </Link>
          <div className="navbar-nav mr-auto">
          <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/tutorials"} className="nav-link">
                Past Entries
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/about"} className="nav-link">
                About Today
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/settings"} className="nav-link">
                Settings
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<TutorialsList/>} />
            <Route path="/tutorials" element={<TutorialsList/>} />
            <Route path="/add" element={<AddTutorial/>} />
            <Route path="/tutorials/:id" element={<Tutorial/>} />
            <Route path="/settings" element={<Settings/>} />
            <Route path="/about" element={<About/>} />
          </Routes>
        </div>

      </div>
    );
  }
}

export default App;
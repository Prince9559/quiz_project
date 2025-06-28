
import Quiz from "./component/Quiz";

import './App.css';

function App()
{
  return(
    <div className="App">

      <Quiz></Quiz>
      

    </div>
  )
}
export default App;

/*

 import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Quiz from "./Quiz";
import Math from "./Math";
import Home from "./component/Home";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/math" element={<Math />} />
      </Routes>
    </Router>
  );
}

export default App;



*/
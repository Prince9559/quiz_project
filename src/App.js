import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Quiz from "./component/Quiz";
import Maths from "./component/Maths";
import Home from "./component/Home";
import Computer from "./component/Computer";
import Physics from "./component/Physics";
import "./App.css";

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/math" element={<Maths />} />
        <Route path="/computer"element={<Computer/>}/>
        <Route path="/physics"element={<Physics/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;


import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Quiz from "./component/Quiz";
import Maths from "./component/Maths";
import Home from "./component/Home";
import Computer from "./component/Computer";
import Physics from "./component/Physics";
import Chemistry from "./component/Chemistry";
import Cpp from "./component/Cpp";
import Java from "./component/Java";
import Python from "./component/Python";
import Html from "./component/Html";
import Css from "./component/Css";

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
        <Route path="/chemistry"element={<Chemistry/>}/>
        <Route path="/cpp"element={<Cpp/>}/>
        <Route path="/java"element={<Java/>}/>
        <Route path="/python"element={<Python/>}/>
        <Route path="/html"element={<Html/>}/>
        <Route path="/css"element={<Css/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;

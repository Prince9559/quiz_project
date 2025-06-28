import './Home.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <h1>Welcome to My Quiz App 🎯</h1>
      <div className="button-container">
        <Link to="/quiz">
          <button className="home-button">General Quiz</button>
        </Link>
        <Link to="/math">
          <button className="home-button">Math Quiz</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
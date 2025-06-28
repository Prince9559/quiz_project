 import './Home.css';
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
    
      <h1 className='fading'>🥀 Welcome to My Quiz App 🎯</h1>

      <div className="button-container">
        <Link to="/quiz">
          <button className="home-button"><strong>Image Quiz</strong></button>
        </Link>
        <Link to="/math">
          <button className="home-button"><strong>Math Quiz</strong></button>
        </Link>

        <Link to="/computer">
        <button className='home-button'><strong>Computer Quiz</strong></button>
        </Link>

        <Link to="/physics">
        <button className='home-button'><strong>Physics Quiz</strong></button>
        </Link>
        
      </div>
    </div>
  );
}

export default Home;

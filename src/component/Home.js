 import './Home.css';
import { Link } from "react-router-dom";

function Home() {
  return (

    <div className='back'>

    <div className="home">
    
      <h1 className='pri'>👋 Welcome to My Quiz App</h1>

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
        
        <Link to="/chemistry">
        <button className='home-button'><strong>Chemistry Quiz</strong></button>
        </Link>

        <Link to="/cpp">
        <button className='home-button'><strong>C++ Quiz</strong></button>
        </Link>

        <Link to="/java">
        <button className='home-button'><strong>Java Quiz</strong></button>
        </Link>

        <Link to="/python">
        <button className='home-button'><strong>Python Quiz</strong></button>
        </Link>

        <Link to="/html">
        <button className='home-button'><strong>HTML Quiz</strong></button>
        </Link>

        <Link to="/css">
        <button className='home-button'><strong>CSS Quiz</strong></button>
        </Link>

        <Link to="/flutter">
        <button className='home-button'><strong>Flutter Quiz</strong></button>
        </Link>

        <Link to="/sparsh">
        <button className='home-button'><strong>C# Quiz</strong></button>
        </Link>
   

   

      </div>

    <div className='img'>
    <input className='image' type='image' src='pic/prince.jpg'></input>
    </div>

<p>Prince Kumar 💞</p>


<div>
            <a className="whatsapp-button" href="https://wa.me/919559618602" target="_blank" rel="noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp Logo" />
            Contact Me on WhatsApp
          </a>
</div>

    </div>

    </div>

    
    
  );
}

export default Home;

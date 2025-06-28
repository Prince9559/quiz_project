 import React, { useState, useEffect } from "react";
import axios from "axios";

import './Math.css';

function Maths() {
  const [questions, setQuestions] = useState([]);
  const [qno, setQno] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showFirework, setShowFirework] = useState(false);

  let correctanswer = "";

  
  useEffect(() => {
   show();
  }, []);

  /******************************** Show *******************************************************/
  const show = () => {
    const baseURL = 'https://prince9559.github.io/jsonproject/math.json';

    axios.get(baseURL)
      .then((response) => {
        setQuestions(response.data);
        setQno(0);
        setScore(0);
        setShowResult(false);

        // Uncheck any selected option
        const options = ["a", "b", "c", "d", "e"];
        options.forEach(id => {
          const opt = document.getElementById(id);
          if (opt) opt.checked = false;
        });
      })
      .catch(error => {
        console.log("Error", error);
      });
  };

  /**********************************  HandleNext **********************************************/
  const handleNext = () => {
    const selectedOption = document.querySelector('input[name="choose"]:checked');
    if (!selectedOption || selectedOption.value === "e") {
      return;
    }

    if (qno >= questions.length) {
      alert("Quiz Finished!");
      return;
    }

    let givenanswer = handleSum();
    correctanswer = questions[qno]["correct"];

    if (givenanswer === correctanswer) {
      if (score < questions.length) {
        setScore(score + 1);
        setShowFirework(true);
        setTimeout(() => setShowFirework(false), 1500);
      }
    }

    if (qno === questions.length - 1) {
      setShowResult(true);
      setQuestions([]);
      return;
    }

    setQno(qno + 1);
    document.getElementById("e").checked = true;
  };

  const storeData = () => {
    localStorage.setItem("questions", JSON.stringify(questions));
  };

  /************************************* HandleSum ***************************************************/
  const handleSum = () => {
    if (document.getElementById("a").checked) return "a";
    if (document.getElementById("b").checked) return "b";
    if (document.getElementById("c").checked) return "c";
    if (document.getElementById("d").checked) return "d";
    return false;
  };

  /*********************************** Return *******************************************************/
  return (
    <div>
      {showFirework && (
        <div className="firework-container">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="fire-spark"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                backgroundColor: `hsl(${Math.random() * 360}, 100%, 60%)`,
                animationDelay: `${Math.random() * 0.5}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Show Result with Restart only */}
      {questions.length === 0 && showResult && (
        <div className="welcome">
          <h1>👋 Quiz Finished!</h1>
          <pre>
            <p><strong>🎉 Your Final Score: {score} / 10</strong></p>
          </pre>
          <button className="quiz" onClick={show}>
            <b>Restart Quiz</b>
          </button>
        </div>
      )}

      {questions.length > 0 && (
        <div>

          <h1 className="fading">🥀 <i>Welcome to Math Quiz</i> 🌷</h1>

          <h2 className="ques"><b>Question No:</b> {questions[qno]["ques_no"]}</h2>
          <h2 className="number"><b>Question:</b> {questions[qno]["question"]}</h2>
          <h2>✅ Your Score: {score} / {questions.length}</h2>

          <div className="radio-group-container">
            <div className="radio-group">
              <label>
                <input type="radio" name="choose" value="a" id="a" />
                {questions[qno]["a"]}
              </label>

              <label>
                <input type="radio" name="choose" value="b" id="b" />
                {questions[qno]["b"]}
              </label>

              <label>
                <input type="radio" name="choose" value="c" id="c" />
                {questions[qno]["c"]}
              </label>

              <label>
                <input type="radio" name="choose" value="d" id="d" />
                {questions[qno]["d"]}
              </label>

              <label>
                <input style={{ display: "none" }} type="radio" name="choose" value="e" id="e" />
              </label>

              <button className="text" onClick={() => { handleNext(); storeData(); }}>Next</button>

              <input className="pics" type="image" src="pic/ma.jpg" alt="Math pic" />
            </div>
          </div>

          <br />

          <a className="whatsapp-button" href="https://wa.me/919559618602" target="_blank" rel="noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp Logo" />
            Contact Me on WhatsApp
          </a>

          <br />

          <a className="linkedin-button" href="https://www.linkedin.com/in/prince-kumar-724160333/" target="_blank" rel="noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn Logo" />
            Connect Me on LinkedIn
          </a>

          <br />

          <a className="github-button" href="https://github.com/prince9559" target="_blank" rel="noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub Logo" />
            Connect Me on GitHub
          </a>

          <br />

          <footer className="design">
            &copy; 2025 Prince Kumar | Designed with ❤️
          </footer>
        </div>
      )}
    </div>
  );
}

export default Maths;

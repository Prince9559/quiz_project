  import React, { useState } from "react";
import axios from "axios";
import "./Quiz.css";

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [qno, setQno] = useState(0);
  const [resultData, setResultData] = useState([]);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  /******************************** Show Quiz *******************************************************/
  const show = () => {
    const baseURL = "https://prince9559.github.io/jsonproject/Question.json";
    axios
      .get(baseURL)
      .then((response) => {
        setQuestions(response.data);
        setQno(0);
        setResultData([]);
        setScore(0);
        setShowResult(false);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  /******************************** Handle Next *******************************************************/
  const handleNext = () => {
    const selected = document.querySelector('input[name="choose"]:checked');
    if (!selected || selected.value === "e") return;

    const correctAnswer = questions[qno].ans;
    const isCorrect = selected.value === correctAnswer;

    const result = {
      qno: questions[qno].ques_no,
      question: questions[qno].question,
      options: {
        a: questions[qno].a,
        b: questions[qno].b,
        c: questions[qno].c,
        d: questions[qno].d,
      },
      selected: selected.value,
      correct: isCorrect,
      explanation: questions[qno].explanation,
    };

    if (isCorrect) setScore(score + 1);
    setResultData([...resultData, result]);

    if (qno < questions.length - 1) {
      setQno(qno + 1);
      handlSub(); // reset selection
    } else {
      setShowResult(true);
    }
  };

  /******************************** Reset Radio *******************************************************/
  const handlSub = () => {
    document.getElementById("e").checked = true;
  };

  return (
    <div className="container">
      <button className="quiz" onClick={show}>
        <b>Start Quiz</b>
      </button>

      {questions.length > 0 && !showResult && (
        <div>
          <h2 className="ques">
            <b>Question No: </b> {questions[qno]["ques_no"]}
          </h2>
          <h2 className="number">
            <b>Question: </b> {questions[qno]["question"]}
          </h2>

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

              <input
                style={{ display: "none" }}
                type="radio"
                name="choose"
                value="e"
                id="e"
                defaultChecked
              />

              <button className="text" onClick={handleNext}>
                Next
              </button>
            </div>
          </div>

          <br />
          <a
            className="whatsapp-button"
            href="https://wa.me/919559618602"
            target="_blank"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp Logo"
            />
            Contact Me on WhatsApp
          </a>
        </div>
      )}

      {showResult && (
        <div className="result-container">
          <h2 className="score">Your score: {score}</h2>
          <table className="result-table">
            <thead>
              <tr>
                <th>Q. No.</th>
                <th>Question</th>
                <th>Options</th>
                <th>Selected Answer</th>
                <th>Result</th>
                <th>Explanation</th>
              </tr>
            </thead>
            <tbody>
              {resultData.map((item, index) => (
                <tr key={index} className={item.correct ? "correct" : "wrong"}>
                  <td>{item.qno}</td>
                  <td>{item.question}</td>
                  <td>
                    0: {item.options.a}, 1: {item.options.b}, 2: {item.options.c}, 3:{" "}
                    {item.options.d}
                  </td>
                  <td>{item.selected}</td>
                  <td>{item.correct ? "Correct" : "Wrong"}</td>
                  <td>{item.explanation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Quiz;
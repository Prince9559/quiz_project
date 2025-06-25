  import React, { useState } from "react";
 import axios from "axios";
 import './Quiz.css';
 
 function Quiz() {
 
     const [questions, setQuestions] = useState([]);
     const [qno, setQno] = useState(0);
     const [answers, setAnswers] = useState([]);
     const [showResult, setShowResult] = useState(false);
     const [score, setScore] = useState(0);
 
     /******************************** Show *******************************************************/
     const show = (e) => {
         const baseURL = 'https://prince9559.github.io/jsonproject/Question.json';
 
         axios.get(baseURL).then((response) => {
             setQuestions(response.data);
             setQno(0);
             setAnswers([]);
             setShowResult(false);
             setScore(0);
 
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
         if (!selectedOption || selectedOption.value === "e") return;
 
         const selected = selectedOption.value;
         const currentQuestion = questions[qno];
         const isCorrect = selected === currentQuestion.correct;
 
         const newAnswer = {
             question: currentQuestion.question,
             options: [currentQuestion.a, currentQuestion.b, currentQuestion.c, currentQuestion.d],
             selectedAnswer: selected,
             correctAnswer: currentQuestion.correct,
             explanation: currentQuestion.explanation,
             result: isCorrect ? "Correct" : "Incorrect"
         };
 
         setAnswers([...answers, newAnswer]);
         if (isCorrect) setScore(prev => prev + 1);
 
         if (qno < questions.length - 1) {
             setQno(qno + 1);
             document.getElementById("e").checked = true;
         } else {
             setShowResult(true);
         }
     };
 
     /*********************************** Return *******************************************************/
     return (
         <div>
 
             <button className="quiz" onClick={show}><b>Start Quiz</b></button>
 
             {questions.length > 0 && !showResult &&
                 <div>
                     <h2 className="ques"><b>Question_No : </b>{questions[qno]["ques_no"]}</h2>
                     <h2 className="number"><b>Question : </b>{questions[qno]["question"]}</h2>
 
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
 
                             <button className="text" onClick={handleNext}>Next</button>
 
                             <input className="pics" type="image" src="pic/1.jpg" />
                         </div>
                     </div>
                 </div>
             }
 
             {showResult && (
                 <div>
                     <h2>Your score: {score}</h2>
 
                     <table border="1" cellPadding="10" style={{ borderCollapse: "collapse", width: "100%" }}>
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
                             {answers.map((ans, index) => (
                                 <tr key={index}>
                                     <td>{index + 1}</td>
                                     <td>{ans.question}</td>
                                     <td>
                                         0: {ans.options[0]}, 1: {ans.options[1]}, 2: {ans.options[2]}, 3: {ans.options[3]}
                                     </td>
                                     <td>{ans.selectedAnswer}</td>
                                     <td style={{ color: ans.result === "Correct" ? "green" : "red" }}>
                                         {ans.result}
                                     </td>
                                     <td>{ans.explanation}</td>
                                 </tr>
                             ))}
                         </tbody>
                     </table>
                 </div>
             )}
 
             <br />
 
             <a className="whatsapp-button" href="https://wa.me/919559618602" target="_blank">
                 <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp Logo" />
                 Contact Me on WhatsApp
             </a>
 
             <br />
 
             <a className="linkedin-button" href="https://www.linkedin.com/in/prince-kumar-724160333/" target="_blank">
                 <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn Logo" />
                 Connect Me on LinkedIn
             </a>
 
             <br />
 
             <a className="github-button" href="https://github.com/prince9559" target="_blank">
                 <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub Logo" />
                 Connect Me on GitHub
             </a>
 
             <br />
 
             <footer className="design">
                 &copy; 2025 Prince Kumar | Designed with ❤️
             </footer>
 
         </div>
     );
 }
 
 export default Quiz;
 
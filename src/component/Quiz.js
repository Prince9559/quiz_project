import React, { useState } from "react";
import axios from "axios";

import './Quiz.css';

function Quiz() {

    const [questions, setQuestions] = useState([]);
    const [qno, setQno] = useState(0);
    const[score,setScore]=useState(0);
    
    let correctanswer="";

  /******************************** Show *******************************************************/
    
    const show = (e) => {

        const baseURL = 'https://prince9559.github.io/jsonproject/Question.json';

        axios.get(baseURL).then((response) => {

            setQuestions(response.data);
            setQno(0);
            setScore(0);
            
            
      const options = ["a", "b", "c", "d", "e"];
      options.forEach(id => {
        const opt = document.getElementById(id);
        if (opt) opt.checked = false;
      });

      })
            .catch(error => {

                console.log("Error", error);

            })

    };
    
    /**********************************  HandleNext ********************************************** */

const handleNext = () => {
  const selectedOption = document.querySelector('input[name="choose"]:checked');
  if (!selectedOption || selectedOption.value === "e") 
  {
    return;
  }

  if (qno >= questions.length) 
  {
    alert(" Quiz Finished!");
    return;
  }

  let givenanswer = handleSum();

  correctanswer = questions[qno]["correct"];

  if (givenanswer === correctanswer) 
    {
    if (score < questions.length) 
    {
      setScore(score + 1);
    }
  }

  
  if (qno === questions.length - 1) 
  {
    alert("🎉 Quiz Finished!");
    return;
  }

  
  setQno(qno + 1);
  document.getElementById("e").checked = true;

};

    
/************************************* HandleSub ***************************************************/

const handleSum =(e)=>{

if(document.getElementById("a").checked)
return "a";
if(document.getElementById("b").checked)
return "b";
if(document.getElementById("c").checked)
return "c";
if(document.getElementById("d").checked)
return "d";
return false;

}

  
/*********************************** Return *******************************************************/

    return (
        <div>


          
    {questions.length === 0 && (
      <div className="welcome">
        <h1>👋 Welcome to Quiz !</h1>
        <p>Click on <strong>Start Quiz</strong> to begin.</p>
      </div>
    )}

    <button className="quiz" onClick={show}><b>Start Quiz</b></button>

    {questions.length > 0 &&
    <div>

    <h2 className="ques"><b>Question_No : </b>{questions[qno]["ques_no"]}</h2>
    
    <h2 className="number"><b>Question : </b>{questions[qno]["question"]}</h2>

    <h2>✅ Your Score : {score} / {questions.length}</h2>


<div className="radio-group-container">
  <div className="radio-group">

    <label>
      <input type="radio" name="choose"value="a"id="a"/>
      {questions[qno]["a"]}
    </label>

    <label>
      <input type="radio"name="choose"value="b"id="b"/>
      {questions[qno]["b"]}
    </label>

    <label>
      <input type="radio"name="choose"value="c"id="c"/>
      {questions[qno]["c"]}
    </label>


    <label>
      <input type="radio"name="choose"value="d"id="d"/>
      {questions[qno]["d"]}
    </label>

    <label>
      <input style={{display:"none"}} type="radio"name="choose"value="e"id="e"/> 
    </label> 
    
    <button className="text"onClick={handleNext}>Next</button>


    <input className="pics" type="image" src={questions[qno]["src"]} alt={`Question ${qno + 1}`} />


</div>
</div>

<br></br>

  <a className="whatsapp-button" href="https://wa.me/919559618602" target="_blank">
    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp Logo" />
    Contact Me on WhatsApp
  </a>

<br></br>

<a className="linkedin-button" href="https://www.linkedin.com/in/prince-kumar-724160333/" target="_blank">
  <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn Logo" />
  Connect Me on LinkedIn
</a>

<br></br>
  <a className="github-button" href="https://github.com/prince9559" target="_blank">
  <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub Logo" />
  Connect Me on GitHub
</a>

<br></br>

<footer className="design">
    &copy; 2025 Prince Kumar | Designed with ❤️
  </footer>

</div>

}

</div>
)};

export default Quiz;

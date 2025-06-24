import React, { useState } from "react";
import axios from "axios";

import './Quiz.css';

function Quiz() {

    const [questions, setQuestions] = useState([]);
    const [qno, setQno] = useState(0);

  /******************************** Show *******************************************************/
    
    const show = (e) => {

        const baseURL = 'https://prince9559.github.io/jsonproject/Question.json';

        axios.get(baseURL).then((response) => {

            setQuestions(response.data);
            setQno(0);

        })
            .catch(error => {

                console.log("Error", error);

            })

    };

    /**********************************  HandleNext ********************************************** */

    const handleNext = (e) => {

        if (qno < questions.length - 1) 
        {
            setQno(qno + 1);
        }
        else 
        {
            alert("Quiz Finished !");

        }
    };


    /**************************************** HandleSub ************************************************/ 

    const handlSub =()=>
    {
        document.getElementById("e").checked=true;
    };

/*********************************** Return *******************************************************/

    return (
        <div>

    <button className="quiz" onClick={show}><b>Start Quiz</b></button>

    {questions.length > 0 &&
    <div>

    <h2 className="ques"><b>Question_No : </b>{questions[qno]["ques_no"]}</h2>

    
    <h2 className="number"><b>Question : </b>{questions[qno]["question"]}</h2>
    


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

      <input style={{display:'none'}} type="radio"name="choose"value="e"id="e"/>
      
    </label> 
    
    <button className="text" onClick={() => { handlSub(); handleNext(); }}>Next</button>

    
    <input className="pics" type="image"src="pic/1.jpg"></input>

    
</div>
</div>

<br></br>

  <a class="whatsapp-button" href="https://wa.me/919559618602" target="_blank">
    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp Logo" />
    Contact Me on WhatsApp
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

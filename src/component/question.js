  import React, { useState } from "react";
import axios from "axios";
import './Quiz.css';


function Quiz() {

    const [questions, setQuestions] = useState([]);
    const [qno, setQno] = useState('0');
const [selectedOption, setSelectedOption] = useState('');



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


 
    


    const handleNext = () => 
    {
  if(selectedOption === '') 
    {
    alert("Please select an option first!");
    return;
  }

  if (qno < questions.length - 1) 
    {
    setQno(qno + 1);
    setSelectedOption(''); 
  } 
  else 
  {
    alert("Quiz Finished!");
  }
};


    // const handleNext = (e) => {

    //     if (qno < questions.length - 1) 
    //     {
    //         setQno(qno + 1);
    //     }

    //     else 

    //     {
    //         alert("Quiz Finished !");

    //     }
    // };


    
    return (
        <div>

            <button onClick={show}>Start Quiz</button>

            {questions.length > 0 &&
                <div>

                <h2><b>Question_No : </b>{questions[qno]["ques_no"]}</h2>
                <h2><b>Question : </b>{questions[qno]["question"]}</h2>


<div className="radio-group-container">
  <div className="radio-group">

    <label>
      <input type="radio"name="choose"value="a"/>
      {questions[qno]["a"]}
    </label>

    <label>
      <input type="radio"name="choose"value="b"/>
      {questions[qno]["b"]}
    </label>

    <label>
      <input type="radio"name="choose"value="c"/>
      {questions[qno]["c"]}
    </label>


    <label>
      <input type="radio"name="choose"value="d"/>
      {questions[qno]["d"]}
    </label>
    
  </div>
</div>

<button onClick={handleNext}>Next</button>
                    

</div>

}

</div>
)};

export default Quiz;

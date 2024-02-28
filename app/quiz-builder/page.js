"use client";

import React, { useState } from 'react';

const QuizApp = () => {
  // do not modify the questions or answers below
  const questions = [
    {
      question: 'What is the capital of France?',
      options: ['London', 'Paris', 'Berlin', 'Madrid'],
      correct: 'Paris',
    },
    {
      question: 'What is the capital of Germany?',
      options: ['Berlin', 'Munich', 'Frankfurt', 'Hamburg'],
      correct: 'Berlin',
    },
  ];

  // Initialize state to handle each condition
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState("");

  // Handle option change
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  // Function to handle the submit button click
  const handleSubmit = () => {
    // Check if the selected option is the correct answer
    const isCorrect = selectedOption === questions[currentQuestionIndex].correct;

    // Update the score if the answer is correct
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
      setFeedback("Correct!");
    } else {
      setFeedback("Incorrect");
    }

    // Check for more questions or end the quiz
    if (currentQuestionIndex < questions.length - 1) {
      // There are more questions left
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setSelectedOption(''); // Reset selected option for the next question
      setFeedback(''); // Reset feedback for the next question
    } else {
      // Quiz is completed, show final score
      setFeedback(`Quiz Complete! You scored ${score + (isCorrect ? 1 : 0)} out of ${questions.length}!`);
    }
  };

  return (
    <>
      <section className="container">
        <div className="row">
          <div className="column">
            <h2>
              {questions[currentQuestionIndex].question}
            </h2>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="row">
          <div className="column">
            {questions[currentQuestionIndex].options.map((option, idx) => (
              <label key={idx}>
                <input
                  type="radio"
                  name="option"
                  value={option}
                  onChange={handleOptionChange}
                  checked={selectedOption === option}
                />
                {option}
              </label>
            ))}
          </div>
        </div>
        <button id="submitBtn" onClick={handleSubmit} className="mt-1">
          Submit
        </button>
      </section>



      <section className="container">
        <div className="row">
          <div className="column">
            <div id="feedback" className="mt-1">
              {feedback}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default QuizApp;

"use client"

import React, { useState } from 'react';

const BracketMatcher = () => {
  const [inputStr, setInputStr] = useState('');
  const [result, setResult] = useState('');

  const handleInputChange = (e) => {
    setInputStr(e.target.value);
  };

  const checkBrackets = () => {
    let countUnmatchedBrackets = 0;
    for (let i = 0; i < inputStr.length; i++) {
      if (inputStr[i] === "(") {
        countUnmatchedBrackets++;
      } else if (inputStr[i] === ")") {
        countUnmatchedBrackets--;
        if (countUnmatchedBrackets < 0) {
          setResult('0');
          return;
        }
      }
    }
    setResult(countUnmatchedBrackets === 0 ? '1' : '0');
  };

  return (
    <>
      <section className="container">
        <div className="row">
          <div className="column">
            <input type="text" value={inputStr} onChange={handleInputChange} placeholder="Enter string with brackets" />
            <button onClick={checkBrackets}>Check Brackets</button>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="row">
          <div className="column">
            <p>Result: {result}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default BracketMatcher;

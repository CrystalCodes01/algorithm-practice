"use client"

import React, { useState } from 'react';

const LiveText = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <section className="container">
        <div className="row">
          <div className="col">
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <p>{inputValue}</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default LiveText;
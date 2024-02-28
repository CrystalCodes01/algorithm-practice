"use client"

import React, { useState } from 'react';

const ColorSelector = () => {
  const colors = ["red", "blue", "green"];
  const [selectColor, setSelectColor] = useState(colors[0]);

  const handleClick = (e) => {
    setSelectColor(e.target.value);
  }

  return (
    <>
      <section className="container">
        <div className="row">
          <div className="col">
            <select onChange={handleClick} value={selectColor}>
              {colors.map((color, idx) => (
                <option key={idx} value={color}>{color}</option>
              ))}
            </select>
            <p>You have selected: {selectColor}</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default ColorSelector;
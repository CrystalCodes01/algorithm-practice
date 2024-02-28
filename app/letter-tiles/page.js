"use client";

import React, { useState, useEffect } from 'react';

const style = {
  letterContainer: {
    overflow: 'auto',
    marginBottom: '10px'
  },
  letter: {
    float: 'left',
    padding: '10px 10px',
    background: '#c9e4ed',
    borderRadius: '5px',
    marginRight: '5px',
    cursor: 'pointer',
  },
}

const Tile = ({ letter, onClick }) => {
  return (
    <button onClick={() => onClick(letter)} style={style.letter}>{letter}</button>
  );
}

const LetterTiles = () => {
  // State to keep track of the output string
  const [output, setOutput] = useState('');

  // Function to handle tile clicks
  const handleTileClick = (letter) => {
    // Append the clicked letter to the output string
    let newOutput = output + letter;

    // Check and replace 3 consecutive letters with an underscore
    const regex = /(\w)\1\1/g; // This regex matches three consecutive identical characters
    newOutput = newOutput.replace(regex, '_');

    setOutput(newOutput);
  };

  // Generate tiles for all letters in the alphabet
  const alphabet = Array.from(Array(26)).map((e, i) => String.fromCharCode(i + 65));

  return (
    <>
      <section className="container">
        <div className="row">
          <div className="col">
            <aside style={style.letterContainer} id="letterContainer">
              {alphabet.map((letter) => (
                <Tile key={letter} letter={letter} onClick={handleTileClick} />
              ))}
            </aside>
            <div id="outputString">{output}</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LetterTiles;

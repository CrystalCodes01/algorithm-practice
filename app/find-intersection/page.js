"use client"

import React, { useState, useEffect } from 'react';

const FindIntersection = () => {
  const [result, setResult] = useState('');

  useEffect(() => {
    // Define the arrays here directly
    const array1 = [1, 2, 3, 4, 5];
    const array2 = [4, 5, 6, 7, 8];

    // Calculate the intersection
    const intersection = array1.filter(value => array2.includes(value));

    // Set the result, converting to a string if not empty, else "false"
    setResult(intersection.length ? intersection.join(",") : "false");
  }, []); // The empty array ensures this effect runs only once on mount

  return (
    <>
      <section>
        <p>Intersection: {result}</p>
      </section>
    </>
  );
};

export default FindIntersection;

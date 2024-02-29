"use client";

import React, { useState, useContext, createContext } from 'react';

const languages = ['JavaScript', 'Python'];
const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState(languages[0]);

  const toggleLanguage = () => {
    setCurrentLanguage(prevLanguage =>
      prevLanguage === languages[0] ? languages[1] : languages[0]
    );
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

const MainSection = () => {
  const { currentLanguage, toggleLanguage } = useContext(LanguageContext);

  return (
    <div>
      <p id="favoriteLanguage">Favorite programming language: {currentLanguage}</p>
      <button id="changeFavorite" onClick={toggleLanguage}>Toggle Language</button>
    </div>
  );
};

const ContextAPI = () => {
  return (
    <>
      <section className="container">
        <div className="row">
          <div className="col">
            <h1>React Context API Example</h1>
            <LanguageProvider>
              <MainSection />
            </LanguageProvider>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContextAPI;

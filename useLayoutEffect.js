import React, { useState, useLayoutEffect } from 'react';

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // useLayoutEffect to apply theme styles immediately after the component mounts
  useLayoutEffect(() => {
    const body = document.body;
    if (isDarkTheme) {
      body.style.backgroundColor = '#333';
      body.style.color = '#fff';
    } else {
      body.style.backgroundColor = '#fff';
      body.style.color = '#000';
    }
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>{isDarkTheme ? 'Dark Theme' : 'Light Theme'}</h1>
      <button onClick={toggleTheme}>
        Switch to {isDarkTheme ? 'Light' : 'Dark'} Theme
      </button>
    </div>
  );
};

export default App;
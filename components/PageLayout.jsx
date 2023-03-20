import React from 'react';
import 'w3-css/w3.css';
import '@fontsource/raleway';
import './PageLayout.css';

export default function({ children }) {
  return (
    <React.StrictMode>
      <div className="bgimg w3-display-container w3-animate-opacity w3-text-white">
        {children}
      </div>
    </React.StrictMode>
  );
}

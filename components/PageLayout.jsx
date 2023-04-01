import React from 'react';
import 'w3-css/w3.css';
import '@fontsource/raleway';
import './PageLayout.css';


export default function({ children }) {
  return (
    <React.StrictMode>
        {children}
    </React.StrictMode>
  );
}

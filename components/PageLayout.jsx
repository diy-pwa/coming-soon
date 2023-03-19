import React from 'react';
import 'w3-css/w3.css';
import '@fontsource/recursive';
import './PageLayout.css';

export function PageLayout({ children }) {
  return <React.StrictMode>{children}</React.StrictMode>;
}

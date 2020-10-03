import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import "./assets/styles/global.css";
import AppProvider from './hooks';
import Routes from './routes';

function App() {
  return (
    <AppProvider>
      <BrowserRouter> 
        <Routes />
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;

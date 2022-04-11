import React from 'react';

import './App.css';
import { DisplayPanel } from './components/DisplayPanel';
import { Login } from './components/Login';
import { ScraperForm } from './components/ScraperForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <b>Web scraper </b> <Login/>
      </header>
      <ScraperForm />
      <DisplayPanel />
    </div>
  );
}

export default App;

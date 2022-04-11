import React from 'react';

import './App.css';
import { DisplayPanel } from './components/DisplayPanel';
import { ScraperForm } from './components/ScraperForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Web scraper</h1>
      </header>
      <ScraperForm />
        <DisplayPanel />
    </div>
  );
}

export default App;

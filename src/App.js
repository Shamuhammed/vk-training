import React from 'react';
import { BrowserRouter } from 'react-router-dom';
//css
import './App.css';
//components
import Body from './components/body/body';

function App(props) {
  
  return (
    <div className="App">
        <BrowserRouter>
          <Body />
        </BrowserRouter>
    </div>
  );
}

export default App;

import React from 'react';
import './styles/App.css';
import "bootswatch/dist/sketchy/bootstrap.min.css";
import Header from './components/Header'
import MemeGenerator from './components/MemeGenerator'

function App() {
  return (
    <div className="App">
      <Header />
      <MemeGenerator />
    </div>
  );
}

export default App;

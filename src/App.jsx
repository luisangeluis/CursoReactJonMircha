import React from 'react';
import './App.css';
import MyComponent from './components/MyComponent';

function App() {
  const person = {
    name: 'luis',
    age: 31,
  };
  return (
    <div className="App">
      <div className="container">
        <MyComponent person={person} />
      </div>
      <div></div>
    </div>
  );
}

export default App;

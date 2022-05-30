import React from 'react';
import './App.css';
import MyComponent from './components/MyComponent';

function App() {
  const numbers = [1, 2, 3];
  const person = {
    name: 'luis',
    age: 31,
  };
  return (
    <div className="App">
      <div className="container">
        <MyComponent
          // person="person"
          person={person}
          numbers={numbers}
          funcion={(element) => element * element}
          reactElement={<li></li>}
        />
      </div>
      <div></div>
    </div>
  );
}

export default App;

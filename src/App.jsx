import React from 'react';
import './App.css';
import MyComponent from './components/MyComponent';
import Estado from './components/Estado';
import RenderizadoCondicional from './components/RenderizadoCondicional';
import RenderizadoElementos from './components/RenderizadoElementos';
import Events from './components/Events';

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
      <hr />
      <Estado />
      <hr />
      <RenderizadoCondicional />
      <hr />
      <RenderizadoElementos />
      <hr />
      <Events />
    </div>
  );
}

export default App;

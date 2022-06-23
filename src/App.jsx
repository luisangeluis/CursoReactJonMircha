import React from 'react';
import './App.css';
import MyComponent from './components/MyComponent';
import Estado from './components/Estado';
import RenderizadoCondicional from './components/RenderizadoCondicional';
import RenderizadoElementos from './components/RenderizadoElementos';
import Events from './components/Events';
import Es7Events from './components/Es7Events';
import MasSobreEventos from './components/MasSobreEventos';
import Padre from './components/ComunicacionComponentes';
import CicloVida from './components/CicloVida';
import AjaxApis from './components/AjaxApis';
import Contador from './components/Contador';
import RelojHook from './components/RelojHook';
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
      <hr />
      <Es7Events />
      <hr />
      <MasSobreEventos />
      <hr />
      <Padre />
      <hr />
      <CicloVida />
      <hr />
      <AjaxApis />
      <hr />
      <Contador />
      <hr />
      <RelojHook />
    </div>
  );
}

export default App;

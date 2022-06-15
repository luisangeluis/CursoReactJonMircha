import React, { Component } from 'react';
import data from '../helpers/data.json';

function ElementoLista(props) {
  return <li>{props.element.name}</li>;
}

export default class RenderizadoElementos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      seassons: ['primavera', 'verano', 'otoño', 'invierno'],
    };
  }

  render() {
    // console.log(data.frameworks);
    return (
      <div>
        <h2>Renderizado de elementos</h2>
        <h3>Estaciones del año</h3>
        <ol>
          {this.state.seassons.map((element, i) => {
            return <li key={element}>{element}</li>;
          })}
        </ol>
        <h3>Frameworks con JS</h3>
        <ul>
          {data.frameworks.map((element, i) => (
            <ElementoLista key={element.id} element={element} />
          ))}
        </ul>
      </div>
    );
  }
}

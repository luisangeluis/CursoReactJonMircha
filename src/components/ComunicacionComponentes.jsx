import React, { Component } from 'react';

export default class Padre extends Component {
  state = {
    contador: 0,
  };

  incrementarContador = () => {
    this.setState({
      contador: this.state.contador + 1,
    });
  };

  render() {
    return (
      <div>
        <h2>Comunicacion entre componentes</h2>
        <p>{this.state.contador}</p>
        <Hijo
          message="mensaje desde el padre"
          incrementarContador={this.incrementarContador}
        />
        <Hijo
          message="mensaje desde el padre"
          incrementarContador={this.incrementarContador}
        />
      </div>
    );
  }
}

function Hijo({ message, incrementarContador }) {
  return (
    <div>
      <p>Componente hijo</p>
      <p>{message}</p>
      <button onClick={incrementarContador}>Incrementar</button>
    </div>
  );
}

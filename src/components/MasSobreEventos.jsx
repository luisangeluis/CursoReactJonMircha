import React, { Component } from 'react';

const MyButton = ({ handleClick }) => (
  <button onClick={handleClick}>Saludar 2</button>
);

export default class MasSobreEventos extends Component {
  state = {
    contador: 0,
  };

  increaseCount = () => {
    this.setState({
      contador: this.state.contador + 1,
    });
  };

  handleClick = (e, mensaje) => {
    //Evento sintetico react
    console.log(e);
    //Evento nativo navegador
    console.log(e.nativeEvent);

    //target del evento
    console.log(e.target);
    console.log(e.nativeEvent.target);

    console.log(mensaje);
  };

  render() {
    return (
      <div>
        <h2>Mas sobre eventos</h2>
        <button
          onClick={(e) =>
            this.handleClick(e, 'hola pasando parametro desde un evento')
          }
        >
          Saludar
        </button>

        <MyButton
          handleClick={(e) =>
            this.handleClick(e, 'hola pasando parametro desde un evento')
          }
        />
      </div>
    );
  }
}

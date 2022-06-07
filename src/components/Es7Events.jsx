import React, { Component } from 'react';

export default class Events extends Component {
  state = {
    contador: 0,
  };

  increaseCount = () => {
    console.log(this);
    this.setState({
      contador: this.state.contador + 1,
    });
  };

  render() {
    return (
      <div>
        <h2>Eventos en componentes de clase con ES7</h2>
        <p>{this.state.contador}</p>
        <button onClick={this.increaseCount}>Incrementar</button>
      </div>
    );
  }
}

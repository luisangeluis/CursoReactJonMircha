import React, { Component } from 'react';

export default class Events extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contador: 0,
    };
    //bindeo cayó en deshuso
    // this.increaseCount = this.increaseCount.bind(this);
  }

  increaseCount = () => {
    console.log(this);
    this.setState({
      contador: this.state.contador + 1,
    });
  };
  render() {
    return (
      <div>
        <h2>Eventos en componentes de clase </h2>
        <p>{this.state.contador}</p>
        <button onClick={this.increaseCount}>Incrementar</button>
      </div>
    );
  }
}

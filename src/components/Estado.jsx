import React, { Component } from 'react';

//componente hijo
function ComponenteHijo({ contador }) {
  return (
    <div>
      <div className="contador">{contador}</div>
    </div>
  );
}

//Componente padre
export default class Estado extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };

    //No es buena practica hacer esto del interval debido a que el set state se ejecuta hasta despues del render
    //Solo es para el ejemplo
    setInterval(() => {
      this.setState({
        contador: this.state.contador + 1,
      });
    }, 1000);
  }
  render() {
    return (
      <div>
        <h2>El estado</h2>
        <p>{this.state.contador}</p>
        <ComponenteHijo contador={this.state.contador} />
      </div>
    );
  }
}

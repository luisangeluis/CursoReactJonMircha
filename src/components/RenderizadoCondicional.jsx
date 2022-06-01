import { func } from 'prop-types';
import React, { Component, useState } from 'react';

function Login() {
  return (
    <>
      <h3>Sesion iniciada</h3>
    </>
  );
}
function Logout() {
  return (
    <>
      <h3>Iniciar sesion </h3>
    </>
  );
}

//Componente padre
export default class RenderizadoCondicional extends Component {
  constructor(props) {
    super(props);

    this.state = {
      session: true,
    };
  }

  switchSession = () => {
    this.setState({
      session: !this.state.session,
    });
  };
  render() {
    return (
      <div>
        <h2>Renderizado condicional</h2>
        <p>{this.state.session ? <Login /> : <Logout />}</p>
        <button onClick={this.switchSession}>
          {this.state.session ? 'Logout' : 'Login'}
        </button>
      </div>
    );
  }
}

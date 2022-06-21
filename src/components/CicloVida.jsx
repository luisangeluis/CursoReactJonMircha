import react, { Component } from 'react';

class Reloj extends Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    // console.log(3, 'El componente ha sido eliminado del DOM');
  }

  render() {
    return (
      <div>
        <h2>{this.props.hora}</h2>
      </div>
    );
  }
}

export default class CicloVida extends Component {
  constructor(props) {
    super(props);
    // console.log(0, 'El componente se inicializa aun no está en el DOM');

    this.state = {
      hora: new Date().toLocaleTimeString(),
      visible: false,
    };
    this.temporizador = null;
  }

  ticTac = () => {
    this.temporizador = setInterval(() => {
      this.setState({
        hora: new Date().toLocaleTimeString(),
      });
    }, 1000);
  };

  iniciarReloj = () => {
    this.ticTac();
    this.setState({ visible: true });
  };
  detenerReloj = () => {
    clearInterval(this.temporizador);
    this.setState({ visible: false });
  };

  componentDidMount() {
    // console.log(1, 'El componente ya se encuentra en el DOM');
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log(2, 'El estado o las props han cambiado');
    // console.log(prevProps);
    // console.log(prevState);
  }

  render() {
    // console.log(
    //   4,
    //   'El componente se dibuja (o se redibuja con algun cambio en el) DOM'
    // );
    return (
      <div>
        <h2>Ciclo de vida</h2>
        {/* <h3>{this.state.hora}</h3> */}
        {this.state.visible && <Reloj hora={this.state.hora} />}
        <button onClick={this.iniciarReloj}>Iniciar reloj</button>
        <button onClick={this.detenerReloj}>Detener reloj</button>
      </div>
    );
  }
}

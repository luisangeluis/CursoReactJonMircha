import axios from 'axios';
import React, { Component } from 'react';

function Pokemon({ pokemon }) {
  return (
    <div>
      <p>{pokemon.name}</p>
      <img src={pokemon.image} alt={pokemon.image} />
      <p></p>
      <p></p>
    </div>
  );
}

class AjaxApis extends Component {
  state = {
    pokemons: [],
  };

  componentDidMount() {
    axios
      .get('https://pokeapi.co/api/v2/pokemon/')
      .then((res) => {
        console.log(res.data.results);
        const pokemons = [];
        res.data.results.forEach((element) => {
          axios
            .get(element.url)
            .then((res) => {
              let pokemon = {
                id: res.data.id,
                name: res.data.name,
                image: res.data.sprites.front_default,
              };

              pokemons.push(pokemon);
              this.setState({ pokemons: pokemons });
            })
            .catch((error) => {});
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <h1>Peticiones asincronas en componentes de clase</h1>
        {/* <h2>{this.state.pokemons && this.state.pokemons[0].name}</h2> */}
        {this.state.pokemons?.map((pokemon) => (
          <Pokemon pokemon={pokemon} key={pokemon.id} />
        ))}
      </div>
    );
  }
}

export default AjaxApis;

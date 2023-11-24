import { Component } from 'react';

class PokemonInfo extends Component {
  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.pokemonName;
    const nextName = this.props.pokemonName;
    if (prevName !== nextName) {
      console.log('Change Pokemom');

      fetch(`https://pokeapi.co/api/v2/pokemon/${nextName}`)
        .then(res => res.json())
        .then(console.log);
    }
  }

  render() {
    return (
      <div>
        <h1>Pokemon Info</h1> <p>{this.props.pokemonName}</p>
      </div>
    );
  }
}

export default PokemonInfo;

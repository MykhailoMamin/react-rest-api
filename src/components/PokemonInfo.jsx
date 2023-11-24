import { Component } from 'react';

import PokemonErrorView from './PokemonErrorView';
import PokemomDataView from './PokemonDataView';
import PokemonPendingView from './PokemonPendingView';
import PokemonAPI from './services/pokemon-api';

class PokemonInfo extends Component {
  state = {
    pokemon: null,
    error: null,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.pokemonName;
    const nextName = this.props.pokemonName;

    if (prevName !== nextName) {
      this.setState({ status: 'pending' });

      PokemonAPI.fetchPokemon(nextName)
        .then(pokemon => this.setState({ pokemon, status: 'resolved' }))
        .catch(error => this.setState({ error, status: 'reject' }));
    }
  }

  render() {
    const { pokemon, error, status, pokemonName } = this.state;

    if (status === 'idle') {
      return <div>Enther the name of the Pokemon</div>;
    }

    if (status === 'pending') {
      return <PokemonPendingView pokemonName={pokemonName} />;
    }

    if (status === 'reject') {
      return <PokemonErrorView message={error.message} />;
    }

    if (status === 'resolved') {
      return <PokemomDataView pokemon={pokemon} />;
    }
  }
}

export default PokemonInfo;

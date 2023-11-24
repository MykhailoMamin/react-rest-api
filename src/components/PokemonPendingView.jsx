import { ImSpinner } from 'react-icons/im';

function PokemonPendingView({ pokemonName }) {
  return (
    <div>
      <div>
        <ImSpinner size={32} className="icon-spin" />
        Loading...
      </div>
    </div>
  );
}

export default PokemonPendingView;

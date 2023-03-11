import PokemonDataView from './PokemonDataView';
import pendingImage from './pending.png';
import { StyledSpinner } from './StyledPendind';
const styles = {
  spinner: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 10,
    fontSize: 24,
  },
};

export default function PokemonPendingView({ pokemonName }) {
  // const pokemon = {
  //   name: pokemonName,
  //   sprites: {
  //     other: {
  //       'official-artwork': {
  //         front_default: pendingImage,
  //       },
  //     },
  //   },
  //   stats: [],
  // };

  return (
    <div role="alert">
      <div style={styles.spinner}>
        <StyledSpinner size="32" />
        Загружаем...
      </div>
      {/* <PokemonDataView pokemon={pokemon} /> */}
    </div>
  );
}

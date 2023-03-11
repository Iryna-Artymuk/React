import { Component } from 'react';
import ErrorView from './ErrorView';
import PokemonDataView from './PokemonDataView';
import PokemonPendingView from './PokemonPendingView';

class PokemonInfo extends Component {
  state = {
    pokemonInfo: null,

    error: null,
    status: 'idle',
    //     'pending',
    //  'resolved',
    // 'rejected',
  };
  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.pokemonName;
    const nextName = this.props.pokemonName;

    if (prevName !== nextName) {
      this.setState({
        status: 'pending',
      });
      fetch(`http://pokeapi.co/api/v2/pokemon/${nextName}`)
        .then(resp => {
          if (resp.ok) {
            return resp.json();
          }
          return Promise.reject(new Error(` pokemon ${this.props.pokemonName} not found `));
        })

        .then(pokemonObj => {
          this.setState({
            pokemonInfo: pokemonObj,
            status: 'resolved',
          });
        })
        .catch(error => {
          this.setState({ error, status: 'rejected' });
        });
    }
  }
  render() {
    const { error, pokemonInfo, status } = this.state;

    if (status === 'idle') {
      return <div> Type pokemon name</div>;
    }
    if (status === 'pending') {
      return <PokemonPendingView />;
    }
    if (status === 'rejected') {
      console.log(error.message);
      return <ErrorView errorText={error.message} />;
    }
    if (status === 'resolved') {
      return <PokemonDataView pokemon={pokemonInfo} />;
    }
  }

  //   { {this.state.error && <div>{this.state.error.message}</div>}
  //   {lodding && <> please wait we are lodding ...</>}
  //   {pokemonInfo && (
  //     <div
  //       style={{
  //         width: '70%',

  //         padding: 20,
  //         background: 'wheat',
  //         marginLeft: 'auto',
  //         marginRight: 'auto',
  //         fontSize: 24,
  //       }}
  //     >
  //       {this.state.pokemonInfo && (
  //         <>
  //           <img
  //             src={
  //               pokemonInfo.sprites.other['official-artwork'].front_default
  //             }
  //             width="240"
  //             alt={pokemonInfo.name}
  //           />
  //           <p> {this.state.pokemonInfo.name}</p>
  //         </>
  //       )}
  //     </div>
  //   )}
  //   {!pokemonName && <> Type pokemon name</>}
  // </> }
}

export { PokemonInfo };

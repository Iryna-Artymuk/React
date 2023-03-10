import { Component } from 'react';
import { toast } from 'react-toastify';
import { ImSearch } from 'react-icons/im';
export default class PokemonForm extends Component {
  state = {
    pokemonName: '',
  };

  handelChange = event => {
    this.setState({
      pokemonName: event.currentTarget.value.toLowerCase(),
    });
  };

  handelSubmit = event => {
    event.preventDefault();

    if (this.state.pokemonName.trim() === '') {
      toast.error('Введите имя покемона', {
        theme: 'dark',
      });
      //   toast.error('Введите имя покемона');
      return;
    }
    this.props.onSubmit(this.state.pokemonName);
    this.setState({
      pokemonName: '',
    });
  };
  render() {
    return (
      <form
        onSubmit={this.handelSubmit}
        style={{
          width: '70%',

          padding: 20,
          background: 'wheat',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <input
          autoComplete="on"
          type="text"
          name="pokemonName"
          onChange={this.handelChange}
          value={this.state.pokemonName}
          style={{
            width: '70%',
            height: 30,
            background: 'white',
          }}
        />
        <button
          type="submit"
          style={{
            marginLeft: 10,
            height: 30,
            background: 'white',
          }}
        >
          <ImSearch />
          Найти
        </button>
      </form>
    );
  }
}

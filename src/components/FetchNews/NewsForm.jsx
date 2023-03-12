import { Component } from 'react';
import { toast } from 'react-toastify';

class NewsForm extends Component {
  state = {
    text: '',
  };

  // робимо контрольований інпут при зміні інпуту перезаписуєм стейт
  // а значення інпуту залежить від стейту
  handelChange = event => {
    const { value } = event.currentTarget;

    this.setState({
      text: value,
    });
  };

  // при сабміті форми передаєм значення стейту в компонт APP
  // далі пердаєм пропсами в компонент який буде робити запит на сервер
  handelSubmit = event => {
    event.preventDefault();
    if (this.state.text === '') {
      return toast.error('empty text type something', {
        theme: 'dark',
      });
    }

    this.props.getValueForNewsFetch(this.state.text);
    this.setState({
      text: '',
    });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handelSubmit}>
          <input
            name="newsName"
            value={this.state.text}
            onChange={this.handelChange}
            style={{
              width: '70%',
              height: 50,
              borderRadius: 10,
              background: 'wheat',
              fontSize: 24,
            }}
          />
          <button
            style={{
              width: 200,
              height: 50,
              background: 'purple ',
              color: 'white',
              borderRadius: 10,
              fontSize: 18,
              marginLeft: 10,
            }}
            type="submit"
          >
            Search
          </button>
        </form>
      </>
    );
  }
}

export default NewsForm;

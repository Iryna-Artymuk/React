import { Component } from 'react';
import './Form.css';
import './Checkbox.css';
import { RiEmotionHappyLine, RiEmotionSadLine } from 'react-icons/ri';
import { BsEmojiNeutral, BsEmojiAngry, BsCheckLg } from 'react-icons/bs';

class Form extends Component {
  state = {
    name: '',
    phone: '',
    rating: 'super-happy',
    products: '',
    agreement: false,
  };
  hendelChange = event => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.FormSubmit(this.state);
    this.reset();
  };
  handelAgreementChange = event => {
    this.setState({
      agreement: event.currentTarget.checked,
    });

    console.log(event.currentTarget.checked);
  };
  reset = () => {
    this.setState({
      name: '',
      phone: '',
    });
  };
  render() {
    return (
      <>
        <form
          onSubmit={this.handleSubmit}
          style={{
            border: '2px solid purple',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 10,
            background: 'green',
            fontSize: 24,
            padding: 20,
          }}
        >
          <label
            style={{
              width: '70%',
              display: 'flex',
              flexDirection: 'column',
              gap: 5,
            }}
          >
            Name
            <input
              style={{
                width: '100%',
                border: '2px solid purple',
                height: 50,
                background: 'wheat',
                borderRadius: 10,
                fontSize: 24,
                padding: 10,
              }}
              name="name"
              value={this.state.name}
              onChange={this.hendelChange}
              type="text"
              placeholder="Type your name"
            ></input>
          </label>
          <label
            style={{
              width: '70%',
              display: 'flex',
              flexDirection: 'column',
              gap: 5,
            }}
          >
            Phone Number
            <input
              style={{
                width: '100%',
                border: '2px solid purple',
                height: 50,
                background: 'wheat',
                borderRadius: 10,
                fontSize: 24,
                padding: 10,
              }}
              name="phone"
              value={this.state.phone}
              onChange={this.hendelChange}
              type="number"
              placeholder="Type your  Phone Number"
            ></input>
          </label>
          <button
            style={{
              width: '30%',
              height: 50,
              backgroundColor: 'blueviolet',
              borderRadius: 10,
              fontSize: 18,
              color: 'aliceblue',
            }}
            type="submit"
          >
            Submit
          </button>
        </form>

        <div className="card">
          <div className="rating-container">
            <div className="rating-text">
              <p>I'm feeling...</p>
            </div>
            <div className="rating">
              <form className="rating-form">
                <label htmlFor="super-happy">
                  <input
                    type="radio"
                    name="rating"
                    className="super-happy"
                    id="super-happy"
                    value="super-happy"
                    onChange={this.hendelChange}
                    checked={this.state.rating === 'super-happy'}
                  />
                  <RiEmotionHappyLine className="rating-form-svg " />
                </label>

                <label htmlFor="neutral">
                  <input
                    type="radio"
                    name="rating"
                    className="neutral"
                    id="neutral"
                    value="neutral"
                    onChange={this.hendelChange}
                    checked={this.state.rating === 'neutral'}
                  />
                  <BsEmojiNeutral className="rating-form-svg " />
                </label>

                <label htmlFor="sad">
                  <input
                    type="radio"
                    name="rating"
                    className="sad"
                    id="sad"
                    value="sad"
                    onChange={this.hendelChange}
                    checked={this.state.rating === 'sad'}
                  />
                  <RiEmotionSadLine className="rating-form-svg " />
                </label>

                <label htmlFor="super-sad">
                  <input
                    type="radio"
                    name="rating"
                    className="super-sad"
                    id="super-sad"
                    value="super-sad"
                    onChange={this.hendelChange}
                  />
                  <BsEmojiAngry className="rating-form-svg " />
                </label>
              </form>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="boxtags">
            <input
              className="boxtags-input"
              type="checkbox"
              id="1"
              name="products"
              value="Milk"
              onChange={this.hendelChange}
              checked={this.state.products === 'Milk'}
            />

            <label className="label" htmlFor="1">
              <BsCheckLg className="iconAfter" />
              Milk
            </label>

            <input
              name="products"
              className="boxtags-input"
              type="checkbox"
              id="2"
              value="Sugar"
              onChange={this.hendelChange}
              checked={this.state.products === 'Sugar'}
            />

            <label className="label" htmlFor="2">
              <BsCheckLg className="iconAfter" />
              Sugar
            </label>

            <input
              name="products"
              className="boxtags-input"
              type="checkbox"
              id="3"
              value="Bread"
              onChange={this.hendelChange}
              checked={this.state.products === 'Bread'}
            />

            <label className="label" htmlFor="3">
              <BsCheckLg className="iconAfter" />
              Bread
            </label>
          </div>

          <input
            className="boxtags-input"
            type="checkbox"
            id="4"
            onChange={this.handelAgreementChange}
            checked={this.state.agreement}
            // value=" this.state.agreement"
          />

          <label className="label" htmlFor="4">
            <BsCheckLg className="iconAfter" />
            Agree to pay
          </label>

          <button
            className="buy"
            type="submit"
            disabled={!this.state.agreement}
          >
            Buy
          </button>
        </div>
      </>
    );
  }
}
export default Form;

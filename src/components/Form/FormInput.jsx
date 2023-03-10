import PhoneInput from 'react-phone-number-input';
import PropTypes from 'prop-types';
import 'react-phone-number-input/style.css';
import flags from 'react-phone-number-input/flags';
const PhoneInputField = props => {
  const {
    field: { name, value },
    form: { setFieldValue },

    label,

    onChange,
  } = props;

  const onValueChange = phoneNumber => {
    setFieldValue(name, phoneNumber);

    if (onChange !== null) {
      onChange(phoneNumber);
    }
  };

  return (
    <label className="transition ml-10" htmlFor={name}>
      {label}
      <PhoneInput
        placeholder="Enter phone number"
        name={name}
        value={value}
        onChange={onValueChange}
        defaultCountry="UA"
      />
    </label>
  );
};

PhoneInputField.propTypes = {
  form: PropTypes.any.isRequired,
  field: PropTypes.any.isRequired,
  onChange: PropTypes.func,
  label: PropTypes.string,
  country: PropTypes.string,
};

PhoneInputField.defaultProps = {
  className: '',
  label: '',
  onChange: null,
  country: 'UK',
  disabled: false,
};

export default PhoneInputField;

import React from 'react';
import PropTypes from 'prop-types';

class LabelAndInput extends React.Component {
  render() {
    const {
      labelContent,
      inputType,
      value,
      inputId,
      onChangeEvent,
      dataTestid,
    } = this.props;
    return (
      <section>
        <label htmlFor={ inputId }>{ labelContent }</label>
        <br />
        <input
          type={ inputType }
          name={ dataTestid }
          value={ value }
          id={ inputId }
          onChange={ onChangeEvent }
          data-testid={ dataTestid }
        />
      </section>
    );
  }
}

LabelAndInput.propTypes = {
  labelContent: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  inputId: PropTypes.string.isRequired,
  onChangeEvent: PropTypes.func.isRequired,
  dataTestid: PropTypes.string.isRequired,
};

export default LabelAndInput;

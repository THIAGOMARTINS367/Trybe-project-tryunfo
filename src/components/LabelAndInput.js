import React from 'react';
import PropTypes from 'prop-types';

class LabelAndInput extends React.Component {
  render() {
    const {
      labelContent,
      inputType,
      value,
      inputId,
      minNumber,
      maxNumber,
      onChangeEvent,
      dataTestid,
    } = this.props;
    return (
      <section>
        <label htmlFor={ inputId }>{ labelContent }</label>
        <br />
        {
          inputType === 'number' ? (
            <input
              type={ inputType }
              name={ dataTestid }
              value={ value }
              id={ inputId }
              min={ minNumber }
              max={ maxNumber }
              onChange={ onChangeEvent }
              data-testid={ dataTestid }
            />
          ) : (
            <input
              type={ inputType }
              name={ dataTestid }
              value={ value }
              id={ inputId }
              onChange={ onChangeEvent }
              data-testid={ dataTestid }
            />
          )
        }

      </section>
    );
  }
}

LabelAndInput.propTypes = {
  labelContent: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  inputId: PropTypes.string.isRequired,
  minNumber: PropTypes.number,
  maxNumber: PropTypes.number,
  onChangeEvent: PropTypes.func.isRequired,
  dataTestid: PropTypes.string.isRequired,
};

LabelAndInput.defaultProps = {
  minNumber: 0,
  maxNumber: 0,
};

export default LabelAndInput;

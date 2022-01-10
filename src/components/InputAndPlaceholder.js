import React from 'react';
import PropTypes from 'prop-types';

class InputAndPlaceholder extends React.Component {
  render() {
    const {
      inputType,
      value,
      placeholderContent,
      disableSearch,
      onChangeEvent,
      dataTestid,
    } = this.props;
    return (
      <section>
        {
          disableSearch === true ? (
            <input
              type={ inputType }
              value={ value }
              placeholder={ placeholderContent }
              disabled
              onChange={ onChangeEvent }
              data-testid={ dataTestid }
            />
          ) : (
            <input
              type={ inputType }
              value={ value }
              placeholder={ placeholderContent }
              onChange={ onChangeEvent }
              data-testid={ dataTestid }
            />
          )
        }
      </section>
    );
  }
}

InputAndPlaceholder.propTypes = {
  inputType: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholderContent: PropTypes.string.isRequired,
  disableSearch: PropTypes.bool.isRequired,
  onChangeEvent: PropTypes.func.isRequired,
  dataTestid: PropTypes.string.isRequired,
};

export default InputAndPlaceholder;

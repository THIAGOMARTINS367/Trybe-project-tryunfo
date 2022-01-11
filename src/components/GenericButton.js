import React from 'react';
import PropTypes from 'prop-types';

class GenericButton extends React.Component {
  render() {
    const {
      buttonContent,
      disabled,
      onClickEvent,
      dataTestid,
    } = this.props;
    return (
      <button
        type="button"
        disabled={ disabled }
        onClick={ onClickEvent }
        data-testid={ dataTestid }
      >
        { buttonContent }
      </button>
    );
  }
}

GenericButton.propTypes = {
  buttonContent: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  onClickEvent: PropTypes.func.isRequired,
  dataTestid: PropTypes.string.isRequired,
};

export default GenericButton;

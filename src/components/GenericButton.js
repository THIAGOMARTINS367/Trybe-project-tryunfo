import React from 'react';
import PropTypes from 'prop-types';

class GenericButton extends React.Component {
  render() {
    const {
      buttonType = 'button',
      buttonContent,
      disabled,
      onClickEvent,
      dataTestid,
    } = this.props;
    return (
      <button
        type={ buttonType }
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
  buttonType: PropTypes.string.isRequired,
  buttonContent: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  onClickEvent: PropTypes.func.isRequired,
  dataTestid: PropTypes.string.isRequired,
};

export default GenericButton;

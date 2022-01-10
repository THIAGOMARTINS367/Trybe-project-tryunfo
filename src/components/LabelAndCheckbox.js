import React from 'react';
import PropTypes from 'prop-types';

class LabelAndCheckbox extends React.Component {
  render() {
    const {
      labelContent,
      checked,
      checkboxId,
      onChangeEvent,
      hasTrunfo,
      dataTestid,
    } = this.props;
    return (
      <section>
        {
          hasTrunfo === true ? (
            'Você já tem um Super Trunfo em seu baralho'
          ) : (
            <label for={ checkboxId }>
              <input
                type="checkbox"
                name={ dataTestid }
                checked={ checked }
                id={ checkboxId }
                onChange={ onChangeEvent }
                data-testid={ dataTestid }
              />
              { labelContent }
            </label>
          )
        }
      </section>
    );
  }
}

LabelAndCheckbox.propTypes = {
  labelContent: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  checkboxId: PropTypes.string.isRequired,
  onChangeEvent: PropTypes.func.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  dataTestid: PropTypes.string.isRequired,
};

export default LabelAndCheckbox;

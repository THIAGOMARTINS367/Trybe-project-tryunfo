import React from 'react';
import PropTypes from 'prop-types';

class LabelAndSelect extends React.Component {
  render() {
    const {
      labelContent,
      optionsContent,
      value,
      selectId,
      onChangeEvent,
      dataTestid,
    } = this.props;
    return (
      <section>
        <label for={ selectId }>{ labelContent }</label>
        <select
          name={ dataTestid }
          value={ value }
          id={ selectId }
          onChange={ onChangeEvent }
          data-testid={ dataTestid }
        >
          {
            optionsContent.map((element) => (
              <option key={ element }>{ element }</option>
            ))
          }
        </select>
      </section>
    );
  }
}

LabelAndSelect.propTypes = {
  labelContent: PropTypes.string.isRequired,
  optionsContent: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  selectId: PropTypes.string.isRequired,
  onChangeEvent: PropTypes.func.isRequired,
  dataTestid: PropTypes.string.isRequired,
};

export default LabelAndSelect;

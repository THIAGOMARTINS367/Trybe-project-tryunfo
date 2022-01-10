import React from 'react';
import PropTypes from 'prop-types';

class LabelAndSelect extends React.Component { //'todas, normal, raro, muito raro'
  render() {
    const {
      labelContent,
      optionsContent,
      value,
      selectId,
      onChangeEvent,
      dataTestid,
    } = this.props;
    let optionsContentFormatted = optionsContent.replace(', ', ',');
    let optionContent = '';
    let optionsContentArray = [];
    for (let index = 0; index < optionsContentFormatted.length; index += 1) {
      if (optionsContentFormatted[index] === ',') {
        optionsContentArray.push(optionContent);
        optionContent = '';
      } else {
        optionContent += optionsContentFormatted[index];
      }
    }
    return (
      <section>
        <label htmlFor={ selectId }>{ labelContent }</label>
        <select
          name={ dataTestid }
          value={ value }
          id={ selectId }
          onChange={ onChangeEvent }
          data-testid={ dataTestid }
        >
          {
            optionsContentArray.map((element) => (
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

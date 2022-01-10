import React from 'react';
import PropTypes from 'prop-types';

class LabelAndSelectFilter extends React.Component {
  render() {
    const {
      labelContent,
      optionsContent,
      value,
      selectFilterId,
      disableSearch,
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
        <label htmlFor={ selectFilterId }>{ labelContent }</label>
        {
          disableSearch === true ? (
            <select
              name={ dataTestid }
              value={ value }
              id={ selectFilterId }
              disabled
              onChange={ onChangeEvent }
              data-testid={ dataTestid }
            >
              {
                optionsContentArray.map((element) => (
                  <option key={ element }>{ element }</option>
                ))
              }
            </select>
          ) : (
            <select
              name={ dataTestid }
              value={ value }
              id={ selectFilterId }
              onChange={ onChangeEvent }
              data-testid={ dataTestid }
            >
              {
                optionsContentArray.map((element) => (
                  <option key={ element }>{ element }</option>
                ))
              }
            </select>
          )
        }
      </section>
    );
  }
}

LabelAndSelectFilter.propTypes = {
  labelContent: PropTypes.string.isRequired,
  optionsContent: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  selectFilterId: PropTypes.string.isRequired,
  disableSearch: PropTypes.bool.isRequired,
  onChangeEvent: PropTypes.func.isRequired,
  dataTestid: PropTypes.string.isRequired,
};

export default LabelAndSelectFilter;

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
    return (
      <section>
        <label for={ selectFilterId }>{ labelContent }</label>
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
                optionsContent.map((element) => (
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
                optionsContent.map((element) => (
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

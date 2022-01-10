import React from 'react';
import PropTypes from 'prop-types';

class LabelAndCheckboxFilter extends React.Component {
  render() {
    const {
      labelContent,
      checked,
      checkboxFilterId,
      onChangeEvent,
      dataTestid,
    } = this.props;
    return (
      <section>
        <label htmlFor={ checkboxFilterId }>
          <input
            type="checkbox"
            name={ dataTestid }
            checked={ checked }
            id={ checkboxFilterId }
            onChange={ onChangeEvent }
            data-testid={ dataTestid }
          />
          { labelContent }
        </label>
      </section>
    );
  }
}

LabelAndCheckboxFilter.propTypes = {
  labelContent: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  checkboxFilterId: PropTypes.string.isRequired,
  onChangeEvent: PropTypes.func.isRequired,
  dataTestid: PropTypes.string.isRequired,
};

export default LabelAndCheckboxFilter;

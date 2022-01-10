import React from 'react';

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
        <label for={ checkboxFilterId }>
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

export default LabelAndCheckboxFilter;

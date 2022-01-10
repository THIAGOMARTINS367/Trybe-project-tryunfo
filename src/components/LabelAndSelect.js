import React from 'react';

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

export default LabelAndSelect;

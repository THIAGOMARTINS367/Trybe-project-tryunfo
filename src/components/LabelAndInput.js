import React from 'react';

class LabelAndInput extends React.Component {
  render() {
    const {
      labelContent,
      inputType,
      value,
      inputId,
      onChangeEvent,
      dataTestid,
    } = this.props;
    return (
      <section>
        <label for={ inputId }>{ labelContent }</label>
        <br />
        <input
          type={ inputType }
          name={ dataTestid }
          value={ value }
          id={ inputId }
          onChange={ onChangeEvent }
          data-testid={ dataTestid }
        />
      </section>
    );
  }
}

export default LabelAndInput;

import React from 'react';

class LabelAndInput extends React.Component {
  render() {
    const {
      labelContent,
      inputType,
      value,
      onChangeEvent,
      dataTestid,
    } = this.props;
    return (
      <section>
        <label>{ labelContent }</label>
        <br />
        <input
          type={ inputType }
          name={ dataTestid }
          value={ value }
          onChange={ onChangeEvent }
          data-testid={ dataTestid }
        />
      </section>
    );
  }
}

export default LabelAndInput;

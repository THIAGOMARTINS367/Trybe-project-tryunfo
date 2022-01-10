import React from 'react';

class LabelAndTextarea extends React.Component {
  render() {
    const { labelContent, value, textareaId, onChangeEvent, dataTestid } = this.props;
    return (
      <section>
        <label for={ textareaId }>{ labelContent }</label>
        <br />
        <textarea
          name={ dataTestid }
          value={ value }
          id={ textareaId }
          onChange={ onChangeEvent }
          data-testid={ dataTestid }
        />
      </section>
    );
  }
}

export default LabelAndTextarea;

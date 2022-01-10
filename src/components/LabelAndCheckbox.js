import React from 'react';

class LabelAndCheckbox extends React.Component {
  render() {
    const {
      labelContent,
      checked,
      checkboxId,
      onChangeEvent,
      hasTrunfo,
      dataTestid,
    } = this.props;
    return (
      <section>
        {
          hasTrunfo === true ? (
            'Você já tem um Super Trunfo em seu baralho'
          ) : (
            <label for={ checkboxId }>
              <input
                type="checkbox"
                name={ dataTestid }
                checked={ checked }
                id={ checkboxId }
                onChange={ onChangeEvent }
                data-testid={ dataTestid }
              />
              { labelContent }
            </label>
          )
        }
      </section>
    );
  }
}

export default LabelAndCheckbox;

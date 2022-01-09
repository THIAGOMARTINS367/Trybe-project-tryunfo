import React from "react";

class LabelAndCheckbox extends React.Component {
  render() {
    const { labelContent, checked, onChangeEvent, hasTrunfo, dataTestid } = this.props;
    return (
      <section>
        {
          hasTrunfo === true ? "Você já tem um Super Trunfo em seu baralho" : 
            <label>
              <input
                type="checkbox"
                name={dataTestid}
                checked={checked}
                onChange={onChangeEvent}
                data-testid={dataTestid}
              />
              {labelContent}
            </label>
        }
      </section>
    );
  }
}

export default LabelAndCheckbox;
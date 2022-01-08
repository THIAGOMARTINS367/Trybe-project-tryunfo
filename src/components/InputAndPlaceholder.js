import React from "react";

class InputAndPlaceholder extends React.Component {
  render() {
    const { inputType, placeholderContent, onChangeEvent, dataTestid } = this.props;
    return (
      <input type={ inputType } placeholder={ placeholderContent } onChange={onChangeEvent} data-testid={dataTestid}/>
    );
  }
}

export default InputAndPlaceholder;
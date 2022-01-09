import React from "react";

class SelectAndPlaceholder extends React.Component {
  render() {
    const { placeholderContent, optionsContent, onChangeEvent, dataTestid } = this.props;
    return (
      <select name='dataTestid' placeholder={placeholderContent} onChange={onChangeEvent} data-testid={dataTestid}>
        {optionsContent.map((element) => <option key={element}>{element}</option>)}
      </select>
    );
  }
}

export default SelectAndPlaceholder;
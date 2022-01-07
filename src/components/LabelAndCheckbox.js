import React from "react";

class LabelAndCheckbox extends React.Component {
  render() {
    const { labelContent, checked, onChangeEvent = () => '', dataTestid } = this.props;
    return (
      <section>
        <label><input type="checkbox" name={dataTestid} checked={checked} onChange={onChangeEvent} data-testid={dataTestid}/>{labelContent}</label>
      </section>
    );
  }
}

export default LabelAndCheckbox;
import React from "react";

class LabelAndTextarea extends React.Component {
  render() {
    const { labelContent, value, onChangeEvent, dataTestid } = this.props;
    return (
      <section>
        <label>{labelContent}</label> <br />
        <textarea name={dataTestid} value={value} onChange={onChangeEvent} data-testid={dataTestid}/>
      </section>
    );
  }
}

export default LabelAndTextarea;
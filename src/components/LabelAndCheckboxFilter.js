import React from "react";

class LabelAndCheckboxFilter extends React.Component {
  render() {
    const { labelContent, onChangeEvent, dataTestid } = this.props;
    return (
      <section>
        <label>
          <input
            type="checkbox"
            name={dataTestid}
            onChange={onChangeEvent}
            data-testid={dataTestid}
          />
          {labelContent}
        </label>
      </section>
    );
  }
}

export default LabelAndCheckboxFilter;
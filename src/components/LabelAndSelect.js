import React from 'react';

class LabelAndSelect extends React.Component {
  render() {
    const {
      labelContent,
      optionsContent,
      value,
      onChangeEvent,
      dataTestid
    } = this.props;
    return (
      <section>
        <label>{labelContent}</label>
        <select
          name={dataTestid}
          value={value}
          onChange={onChangeEvent}
          data-testid={dataTestid}
        >
        {
          optionsContent.map((element) => (
            <option key={element}>{element}</option>
          ))
        }
        </select>
      </section>
    );
  }
}

export default LabelAndSelect;
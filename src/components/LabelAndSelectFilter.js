import React from "react";

class LabelAndSelectFilter extends React.Component {
  render() {
    const { labelContent, optionsContent, value, disableSearch, onChangeEvent, dataTestid } = this.props;
    return (
      <section>
        <label>{labelContent}</label>
        {
          disableSearch === true ? 
            <select name={dataTestid} value={value} disabled onChange={onChangeEvent} data-testid={dataTestid}>
            {optionsContent.map((element) => <option key={element}>{element}</option>)}
            </select>
            :
            <select name={dataTestid} value={value} onChange={onChangeEvent} data-testid={dataTestid}>
            {optionsContent.map((element) => <option key={element}>{element}</option>)}
            </select>
        }  
      </section>
    );
  }
}

export default LabelAndSelectFilter;
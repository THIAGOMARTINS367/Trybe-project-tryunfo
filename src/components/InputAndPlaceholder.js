import React from "react";

class InputAndPlaceholder extends React.Component {
  render() {
    const { inputType, value, placeholderContent, disableSearch, onChangeEvent, dataTestid } = this.props;
    return (
      <section>
        {
          disableSearch === true ? 
            <input
            type={inputType}
            value={value}
            placeholder={placeholderContent}
            disabled
            onChange={onChangeEvent}
            data-testid={dataTestid}
            />
           : 
           <input
           type={inputType}
           value={value}
           placeholder={placeholderContent}
           onChange={onChangeEvent}
           data-testid={dataTestid}
         />
        }
      </section>
    );
  }
}

export default InputAndPlaceholder;
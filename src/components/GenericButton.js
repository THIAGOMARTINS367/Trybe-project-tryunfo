import React from "react";

class GenericButton extends React.Component {
  render() {
    const {
      buttonType,
      buttonContent,
      disabled,
      onClickEvent,
      dataTestid
    } = this.props;
    return (
      <button
        type={buttonType}
        disabled={disabled}
        onClick={onClickEvent}
        data-testid={dataTestid}
      >
        {buttonContent}
      </button>
    );
  }
}

export default GenericButton;
import React from 'react';
import PropTypes from 'prop-types';

class LabelAndTextarea extends React.Component {
  render() {
    const {
      labelContent,
      value,
      textareaId,
      onChangeEvent,
      dataTestid,
    } = this.props;
    return (
      <section>
        <label for={ textareaId }>{ labelContent }</label>
        <br />
        <textarea
          name={ dataTestid }
          value={ value }
          id={ textareaId }
          onChange={ onChangeEvent }
          data-testid={ dataTestid }
        />
      </section>
    );
  }
}

LabelAndTextarea.propTypes = {
  labelContent: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  textareaId: PropTypes.string.isRequired,
  onChangeEvent: PropTypes.func.isRequired,
  dataTestid: PropTypes.string.isRequired,
};

export default LabelAndTextarea;

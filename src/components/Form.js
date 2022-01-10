import React from 'react';
import PropTypes from 'prop-types';
import GenericButton from './GenericButton';
import LabelAndCheckbox from './LabelAndCheckbox';
import LabelAndInput from './LabelAndInput';
import LabelAndSelect from './LabelAndSelect';
import LabelAndTextarea from './LabelAndTextarea';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form>
        <LabelAndInput
          labelContent="Nome"
          inputType="text"
          value={ cardName }
          inputId="form-name-input"
          onChangeEvent={ onInputChange }
          dataTestid="name-input"
        />
        <LabelAndTextarea
          labelContent="Descrição"
          value={ cardDescription }
          textareaId="form-description-textarea"
          onChangeEvent={ onInputChange }
          dataTestid="description-input"
        />
        <LabelAndInput
          labelContent="Atributo1"
          inputType="number"
          value={ cardAttr1 }
          inputId="form-attr1-input"
          onChangeEvent={ onInputChange }
          dataTestid="attr1-input"
        />
        <LabelAndInput
          labelContent="Atributo2"
          inputType="number"
          value={ cardAttr2 }
          inputId="form-attr2-input"
          onChangeEvent={ onInputChange }
          dataTestid="attr2-input"
        />
        <LabelAndInput
          labelContent="Atributo3"
          inputType="number"
          value={ cardAttr3 }
          inputId="form-attr3-input"
          onChangeEvent={ onInputChange }
          dataTestid="attr3-input"
        />
        <LabelAndInput
          labelContent="Imagem"
          inputType="text"
          value={ cardImage }
          inputId="form-image-input"
          onChangeEvent={ onInputChange }
          dataTestid="image-input"
        />
        <LabelAndSelect
          labelContent="Raridade"
          optionsContent={ 'normal, raro, muito raro,' }
          value={ cardRare }
          selectId="form-rare-select"
          onChangeEvent={ onInputChange }
          dataTestid="rare-input"
        />
        <LabelAndCheckbox
          labelContent="Super Trunfo ?"
          checked={ cardTrunfo }
          checkboxId="form-trunfo-checkbox"
          onChangeEvent={ onInputChange }
          hasTrunfo={ hasTrunfo }
          dataTestid="trunfo-input"
        />
        <GenericButton
          buttonType="button"
          buttonContent="Salvar"
          disabled={ isSaveButtonDisabled }
          onClickEvent={ onSaveButtonClick }
          dataTestid="save-button"
        />
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  cardAttr2: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  cardAttr3: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;

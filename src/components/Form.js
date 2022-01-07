import React from 'react';
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
      onInputChange = () => '',
      onSaveButtonClick,
    } = this.props;
    return (
      <form>
        <LabelAndInput
          labelContent="Nome"
          inputType="text"
          value={cardName}
          onChangeEvent={onInputChange}
          dataTestid="name-input"
        />
        <LabelAndTextarea
          labelContent="Descrição"
          value={cardDescription}
          onChangeEvent={onInputChange}
          dataTestid="description-input"
        />
        <LabelAndInput
          labelContent="Atributo1"
          inputType="number"
          value={cardAttr1}
          onChangeEvent={onInputChange}
          dataTestid="attr1-input"
        />
        <LabelAndInput
          labelContent="Atributo2"
          inputType="number"
          value={cardAttr2}
          onChangeEvent={onInputChange}
          dataTestid="attr2-input"
        />
        <LabelAndInput
          labelContent="Atributo3"
          inputType="number"
          value={cardAttr3}
          onChangeEvent={onInputChange}
          dataTestid="attr3-input"
        />
        <LabelAndInput
          labelContent="Imagem"
          inputType="text"
          value={cardImage}
          onChangeEvent={onInputChange}
          dataTestid="image-input"
        />
        <LabelAndSelect
          labelContent="Raridade"
          optionsContent={["normal", "raro", "muito raro"]}
          value={cardRare}
          onChangeEvent={onInputChange}
          dataTestid="rare-input"
        />
        <LabelAndCheckbox
          labelContent="Super Trunfo ?"
          checked={cardTrunfo}
          onChangeEvent={onInputChange}
          dataTestid="trunfo-input"
        />
        <GenericButton
          buttonType="button"
          buttonContent="Salvar"
          disabled={isSaveButtonDisabled}
          onClickEvent={onSaveButtonClick}
          dataTestid="save-button"
        />
      </form>
    );
  }
}

export default Form;
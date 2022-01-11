import React from 'react';
import PropTypes from 'prop-types';
import Card from './components/Card';
import Form from './components/Form';
import InputAndPlaceholder from './components/InputAndPlaceholder';
import LabelAndCheckboxFilter from './components/LabelAndCheckboxFilter';
import LabelAndSelectFilter from './components/LabelAndSelectFilter';

class App2 extends React.Component {
  render() {
    const {
      nameInput,
      descriptionInput,
      attr1Input,
      attr2Input,
      attr3Input,
      imageInput,
      rareInput,
      trunfoInput,
      hasTrunfo,
      buttonDisabledState,
      filterLettersByName,
      disableOtherSearches,
      filterByRarity,
      filterByTrunfo,
      funcSaveFormFieldDataInState,
      funcSaveLetterInState,
      funcFilterLettersByName,
      funcFilterByRarity,
      funcFilterByTrunfo,
    } = this.props;
    return (
      <section>
        <h1>Tryunfo</h1>
        <Form
          cardName={ nameInput }
          cardDescription={ descriptionInput }
          cardAttr1={ attr1Input }
          cardAttr2={ attr2Input }
          cardAttr3={ attr3Input }
          cardImage={ imageInput }
          cardRare={ rareInput }
          cardTrunfo={ trunfoInput }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ buttonDisabledState }
          onInputChange={ funcSaveFormFieldDataInState }
          onSaveButtonClick={ funcSaveLetterInState }
        />
        <hr />
        <Card
          cardName={ nameInput }
          cardDescription={ descriptionInput }
          cardAttr1={ attr1Input }
          cardAttr2={ attr2Input }
          cardAttr3={ attr3Input }
          cardImage={ imageInput }
          cardRare={ rareInput }
          cardTrunfo={ trunfoInput }
        />
        <hr />
        <h3>Filtros de Busca</h3>
        <InputAndPlaceholder
          inputType="text"
          value={ filterLettersByName }
          placeholderContent="Nome da Carta"
          disableSearch={ disableOtherSearches }
          onChangeEvent={ funcFilterLettersByName }
          dataTestid="name-filter"
        />
        <br />
        <LabelAndSelectFilter
          labelContent="Raridade"
          optionsContent="todas, normal, raro, muito raro,"
          value={ filterByRarity }
          selectFilterId="rare-filter-select"
          disableSearch={ disableOtherSearches }
          onChangeEvent={ funcFilterByRarity }
          dataTestid="rare-filter"
        />
        <LabelAndCheckboxFilter
          labelContent="Super Trunfo"
          checked={ filterByTrunfo }
          checkboxFilterId="trunfo-filter-checkbox"
          onChangeEvent={ funcFilterByTrunfo }
          dataTestid="trunfo-filter"
        />
      </section>
    );
  }
}

App2.propTypes = {
  nameInput: PropTypes.string.isRequired,
  descriptionInput: PropTypes.string.isRequired,
  attr1Input: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  attr2Input: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  attr3Input: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  imageInput: PropTypes.string.isRequired,
  rareInput: PropTypes.string.isRequired,
  trunfoInput: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  buttonDisabledState: PropTypes.bool.isRequired,
  filterLettersByName: PropTypes.string.isRequired,
  disableOtherSearches: PropTypes.bool.isRequired,
  filterByRarity: PropTypes.string.isRequired,
  filterByTrunfo: PropTypes.bool.isRequired,
  funcSaveFormFieldDataInState: PropTypes.func.isRequired,
  funcSaveLetterInState: PropTypes.func.isRequired,
  funcFilterLettersByName: PropTypes.func.isRequired,
  funcFilterByRarity: PropTypes.func.isRequired,
  funcFilterByTrunfo: PropTypes.func.isRequired,
};

export default App2;

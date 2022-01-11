import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import InputAndPlaceholder from './components/InputAndPlaceholder';
import './App.css';
import LabelAndCheckboxFilter from './components/LabelAndCheckboxFilter';
import LabelAndSelectFilter from './components/LabelAndSelectFilter';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      nameInput: '',
      descriptionInput: '',
      attr1Input: '',
      attr2Input: '',
      attr3Input: '',
      imageInput: '',
      rareInput: 'normal',
      trunfoInput: false,
      buttonDisabled: true,
      hasTrunfo: false,
      createdLetters: [],
      temporaryData: [],
      filterByRarity: 'todas',
      filterLettersByName: '',
      filterByTrunfo: false,
      disableOtherSearches: false,
    };

    this.saveFormFieldDataInState = this.saveFormFieldDataInState.bind(this);
    this.validateFormAttributesFields = this.validateFormAttributesFields.bind(this);
    this.saveLetterInState = this.saveLetterInState.bind(this);
    this.deleteCardFromDeck = this.deleteCardFromDeck.bind(this);
    this.filterLettersByName = this.filterLettersByName.bind(this);
    this.filterByRarity = this.filterByRarity.bind(this);
    this.filterByTrunfo = this.filterByTrunfo.bind(this);
  }

  validateFormAttributesFields(target) {
    const {
      nameInput,
      descriptionInput,
      attr1Input,
      attr2Input,
      attr3Input,
      imageInput,
      rareInput,
    } = this.state;
    const { min, max } = target;
    const maxFormatted = max === '' || max === undefined ? 90 : max;
    const minFormatted = min === '' || min === undefined ? 0 : min;
    if (
      nameInput.length === 0
      || descriptionInput.length === 0
      || attr1Input.length === 0
      || attr2Input.length === 0
      || attr3Input.length === 0
      || imageInput.length === 0
      || rareInput.length === 0
      || Number(attr1Input) === 0
      || Number(attr2Input) === 0
      || Number(attr3Input) === 0
      || Number(attr1Input) < minFormatted
      || Number(attr2Input) < minFormatted
      || Number(attr3Input) < minFormatted
      || Number(attr1Input) > maxFormatted
      || Number(attr2Input) > maxFormatted
      || Number(attr3Input) > maxFormatted
      || Number(attr1Input) + Number(attr2Input) + Number(attr3Input) > 210
    ) {
      this.setState({ buttonDisabled: true });
    } else {
      console.log('entrou em false');
      this.setState({ buttonDisabled: false });
    }
  }

  saveFormFieldDataInState({ target }) {
    const { name, value = '', type, checked } = target;
    let nameFormatted = '';
    for (let index = 0; index < name.length; index += 1) {
      if (name[index] === '-') {
        nameFormatted += name[index + 1].toUpperCase();
        index += 1;
      } else {
        nameFormatted += name[index];
      }
    }
    this.setState(
      { [nameFormatted]: type === 'checkbox' ? checked : value },
      () => this.validateFormAttributesFields(target),
    );
  }

  saveLetterInState() {
    const {
      nameInput,
      descriptionInput,
      attr1Input,
      attr2Input,
      attr3Input,
      imageInput,
      rareInput,
      trunfoInput,
      createdLetters,
      hasTrunfo,
    } = this.state;
    const object = {
      nameInput,
      descriptionInput,
      attr1Input,
      attr2Input,
      attr3Input,
      imageInput,
      rareInput,
      trunfoInput,
    };
    let hasTrunfo2 = hasTrunfo;
    if (trunfoInput === true) {
      hasTrunfo2 = true;
    }
    createdLetters.push(object);
    this.setState({
      nameInput: '',
      descriptionInput: '',
      imageInput: '',
      attr1Input: 0,
      attr2Input: 0,
      attr3Input: 0,
      rareInput: 'normal',
      hasTrunfo: hasTrunfo2,
      trunfoInput: false,
    }, () => this.setState({ temporaryData: createdLetters }));
  }

  deleteCardFromDeck({ target }) {
    const { name } = target;
    const { createdLetters } = this.state;
    const nameFormatted = name.replace('button-', '').replace('-Trunfo', '');
    let hasTrunfo = '';
    const keywordTrunfo = '-Trunfo';
    const previousCreatedLetters = createdLetters;
    const dataArray = [];
    for (let index = 0; index < keywordTrunfo.length; index += 1) {
      hasTrunfo += name[name.length - 1 - index];
    }
    this.setState({ createdLetters: [] }, () => {
      previousCreatedLetters.map((element) => {
        if (element.nameInput !== nameFormatted) {
          dataArray.push(element);
        }
        return '';
      });
      this.setState({ createdLetters: dataArray }, () => {
        this.setState({ temporaryData: dataArray });
      });
      if (hasTrunfo === 'ofnurT-') {
        this.setState({ hasTrunfo: false });
      }
    });
  }

  filterLettersByName({ target }) {
    const { value } = target;
    const { filterByRarity, createdLetters } = this.state;
    const temporaryData2 = [];
    const filterByRarity2 = filterByRarity;
    createdLetters.map((element) => {
      if (filterByRarity2 === 'todas') {
        if (element.nameInput.includes(value) || value.length === 0) {
          temporaryData2.push(element);
        }
      } else if (
        element.nameInput.includes(value)
        && element.rareInput === filterByRarity2
      ) {
        temporaryData2.push(element);
      }
      return '';
    });
    this.setState({ temporaryData: temporaryData2, filterLettersByName: value });
  }

  filterByRarity({ target }) {
    const { value } = target;
    const { filterLettersByName, createdLetters } = this.state;
    const temporaryData2 = [];
    createdLetters.map((element) => {
      if (filterLettersByName.length === 0) {
        if (element.rareInput === value || value === 'todas') {
          temporaryData2.push(element);
        }
      } else if (
        (element.rareInput === value || value === 'todas')
        && element.nameInput.includes(filterLettersByName)
      ) {
        temporaryData2.push(element);
      }
      return '';
    });
    this.setState({ temporaryData: temporaryData2, filterByRarity: value });
  }

  filterByTrunfo({ target }) {
    const { checked } = target;
    const { createdLetters, filterLettersByName } = this.state;
    const temporaryData2 = [];
    if (checked === true) {
      this.setState({ disableOtherSearches: true });
    }
    createdLetters.map((element) => {
      if (checked === true && element.trunfoInput === true) {
        temporaryData2.push(element);
      }
      return '';
    });
    this.setState(
      { temporaryData: temporaryData2, filterByTrunfo: checked },
      () => {
        if (checked === false) {
          this.setState({ disableOtherSearches: false });
          this.filterLettersByName({
            target: { value: filterLettersByName },
          });
        }
      },
    );
  }

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
      buttonDisabled,
      filterLettersByName,
      disableOtherSearches,
      filterByRarity,
      filterByTrunfo,
      temporaryData,
    } = this.state;
    return (
      <main>
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
          isSaveButtonDisabled={ buttonDisabled }
          onInputChange={ this.saveFormFieldDataInState }
          onSaveButtonClick={ this.saveLetterInState }
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
          onChangeEvent={ this.filterLettersByName }
          dataTestid="name-filter"
        />
        <br />
        <LabelAndSelectFilter
          labelContent="Raridade"
          optionsContent="todas, normal, raro, muito raro,"
          value={ filterByRarity }
          selectFilterId="rare-filter-select"
          disableSearch={ disableOtherSearches }
          onChangeEvent={ this.filterByRarity }
          dataTestid="rare-filter"
        />
        <LabelAndCheckboxFilter
          labelContent="Super Trunfo"
          checked={ filterByTrunfo }
          checkboxFilterId="trunfo-filter-checkbox"
          onChangeEvent={ this.filterByTrunfo }
          dataTestid="trunfo-filter"
        />
        <hr />
        {
          temporaryData.map((element) => (
            <Card
              key={ `${element.nameInput}
                ${element.attr1Input}
                ${element.attr2Input}
                ${element.attr3Input}` }
              cardID={ element.nameInput }
              cardName={ element.nameInput }
              cardDescription={ element.descriptionInput }
              cardAttr1={ element.attr1Input }
              cardAttr2={ element.attr2Input }
              cardAttr3={ element.attr3Input }
              cardImage={ element.imageInput }
              cardRare={ element.rareInput }
              cardTrunfo={ element.trunfoInput }
              deleteButton
              handlerFuncDelete={ this.deleteCardFromDeck }
            />
          ))
        }
      </main>
    );
  }
}

export default App;

import React from 'react';
import App2 from './App2';
import Card from './components/Card';
import { MAX_ATTRIBUTE_VALUE, MAX_VALUE_SUM_OF_ATTRIBUTES,
  MIN_ATTRIBUTE_VALUE } from './Constants';
import funcSaveLetterInState from './components/AppfuncSaveLetterInState';
import funcFilterLettersByName from './components/AppfuncFilterLettersByName';

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

  validateFormAttributesFields2(maxFormatted, minFormatted) {
    const {
      nameInput, descriptionInput, attr1Input, attr2Input,
      attr3Input, imageInput, rareInput,
    } = this.state;
    const validations = [
      nameInput.length === 0, descriptionInput.length === 0,
      attr1Input.length === 0, attr2Input.length === 0,
      attr3Input.length === 0, imageInput.length === 0,
      rareInput.length === 0,
      Number(attr1Input) < minFormatted, Number(attr2Input) < minFormatted,
      Number(attr3Input) < minFormatted, Number(attr1Input) > maxFormatted,
      Number(attr2Input) > maxFormatted, Number(attr3Input) > maxFormatted,
      Number(attr1Input) + Number(attr2Input) + Number(attr3Input)
        > MAX_VALUE_SUM_OF_ATTRIBUTES,
    ];
    return validations;
  }

  validateFormAttributesFields() {
    if (
      this.validateFormAttributesFields2(
        MAX_ATTRIBUTE_VALUE,
        MIN_ATTRIBUTE_VALUE,
      ).includes(true)
    ) {
      this.setState({ buttonDisabled: true });
    } else {
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
      () => this.validateFormAttributesFields(),
    );
  }

  saveLetterInState() {
    const func = funcSaveLetterInState(this.state);
    const {
      nameInputSetState, descriptionInputSetState, imageInputSetState,
      attr1InputSetState, attr2InputSetState, attr3InputSetState,
      rareInputSetState, hasTrunfoSetState, trunfoInputSetState,
    } = func;
    const { createdLetters } = this.state;
    this.setState(
      { nameInput: nameInputSetState,
        descriptionInput: descriptionInputSetState,
        imageInput: imageInputSetState,
        attr1Input: attr1InputSetState,
        attr2Input: attr2InputSetState,
        attr3Input: attr3InputSetState,
        rareInput: rareInputSetState,
        hasTrunfo: hasTrunfoSetState,
        trunfoInput: trunfoInputSetState,
      }, () => this.setState({ temporaryData: createdLetters }),
    );
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
    const object = funcFilterLettersByName(target, this.state);
    const { temporaryData2, value } = object;
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
      nameInput, descriptionInput, attr1Input, attr2Input,
      attr3Input, imageInput, rareInput, trunfoInput,
      hasTrunfo, buttonDisabled, filterLettersByName, disableOtherSearches,
      filterByRarity, filterByTrunfo, temporaryData,
    } = this.state;
    return (
      <main>
        <App2
          nameInput={ nameInput }
          descriptionInput={ descriptionInput }
          attr1Input={ attr1Input }
          attr2Input={ attr2Input }
          attr3Input={ attr3Input }
          imageInput={ imageInput }
          rareInput={ rareInput }
          trunfoInput={ trunfoInput }
          hasTrunfo={ hasTrunfo }
          buttonDisabledState={ buttonDisabled }
          filterLettersByName={ filterLettersByName }
          disableOtherSearches={ disableOtherSearches }
          filterByRarity={ filterByRarity }
          filterByTrunfo={ filterByTrunfo }
          temporaryData={ temporaryData.join('') }
          funcSaveFormFieldDataInState={ this.saveFormFieldDataInState }
          funcSaveLetterInState={ this.saveLetterInState }
          funcFilterLettersByName={ this.filterLettersByName }
          funcFilterByRarity={ this.filterByRarity }
          funcFilterByTrunfo={ this.filterByTrunfo }
          funcDeleteCardFromDeck={ this.deleteCardFromDeck }
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

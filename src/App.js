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
    this.validateFormFieldsLength = this.validateFormFieldsLength.bind(this);
    this.validateFormAttributesFields = this.validateFormAttributesFields.bind(this);
    this.saveLetterInState = this.saveLetterInState.bind(this);
    this.deleteCardFromDeck = this.deleteCardFromDeck.bind(this);
    this.filterLettersByName = this.filterLettersByName.bind(this);
    this.filterByRarity = this.filterByRarity.bind(this);
    this.filterByTrunfo = this.filterByTrunfo.bind(this);
  }

  validateFormFieldsLength() {
    const { nameInput, descriptionInput, imageInput, rareInput } = this.state;
    if (
      nameInput.length === 0
      || descriptionInput.length === 0
      || imageInput.length === 0
      || rareInput.length === 0
    ) {
      this.validateFormAttributesFields(true);
    } else {
      this.validateFormAttributesFields(false);
    }
  }

  validateFormAttributesFields(previousValidatorAnswer) {
    const { attr1Input, attr2Input, attr3Input } = this.state;
    const validations = [
      attr1Input > 90,
      attr1Input < 0,
      attr2Input > 90,
      attr2Input < 0,
      attr3Input > 90,
      attr3Input < 0,
      Number(attr1Input) + Number(attr2Input) + Number(attr3Input) > 210,
    ];
    if (validations.includes(true) || previousValidatorAnswer === true) {
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
      this.validateFormFieldsLength,
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
    const previousCreatedLetters = createdLetters;
    const dataArray = [];
    for (let index = 0; index < 7; index += 1) {
      hasTrunfo += name[name.length - 1 - index];
    }
    this.setState({ createdLetters: [] }, () => {
      previousCreatedLetters.map((element) => {
        if (element.nameInput !== nameFormatted) {
          return dataArray.push(element);
        }
      });
      this.setState({ createdLetters: dataArray }, () => {
        this.setState({ temporaryData: createdLetters },);
        }
      );
      if (hasTrunfo === 'ofnurT-') {
        this.setState({ hasTrunfo: false });
      }
    });
  }

  filterLettersByName({ target }) {
    const { value } = target;
    const { filterByRarity } = this.state;
    const temporaryData2 = [];
    const filterByRarity2 = filterByRarity;
    this.state.createdLetters.map((element) => {
      if (filterByRarity2 === 'todas') {
        if (element.nameInput.includes(value)) {
          temporaryData2.push(element);
        } else if (value.length === 0) {
          temporaryData2.push(element);
        }
      } else {
        if (
          element.nameInput.includes(value)
          && element.rareInput === filterByRarity2
        ) {
          temporaryData2.push(element);
        } else if (
          value.length === 0
          && element.rareInput === filterByRarity2
        ) {
          temporaryData2.push(element);
        }
      }
    });
    this.setState({ temporaryData: temporaryData2, filterLettersByName: value });
  }

  filterByRarity({ target }) {
    const { value } = target;
    const temporaryData2 = [];
    const filterLettersByName = this.state.filterLettersByName;
    this.state.createdLetters.map((element) => {
      if (filterLettersByName.length === 0) {
        if (element.rareInput === value) {
          temporaryData2.push(element);
        } else if(value === 'todas') {
          temporaryData2.push(element);
        }
      } else {
        if (
          element.rareInput === value &&
          element.nameInput.includes(filterLettersByName)
        ) {
          temporaryData2.push(element);
        } else if (
          value === 'todas' &&
          element.nameInput.includes(filterLettersByName)
        ) {
          temporaryData2.push(element);
        }
      }
    });
    this.setState({ temporaryData: temporaryData2, filterByRarity: value });
  }

  filterByTrunfo({ target }) {
    const { checked } = target;
    const temporaryData2 = [];
    if (checked === true) {
      this.setState({ disableOtherSearches: true});
    }
    this.state.createdLetters.map((element) => {
      if (checked === true && element.trunfoInput === true) {
        temporaryData2.push(element);
      }
    });
    this.setState(
      { temporaryData: temporaryData2, filterByTrunfo: checked },
      () => {
        if (checked === false) {
          this.setState({ disableOtherSearches: false });
          this.filterLettersByName({
            target: { value: this.state.filterLettersByName },
          });
        }
      }
    );
  }

  render() {
    return (
      <main>
        <h1>Tryunfo</h1>
        <Form
          cardName={this.state.nameInput}
          cardDescription={this.state.descriptionInput}
          cardAttr1={this.state.attr1Input}
          cardAttr2={this.state.attr2Input}
          cardAttr3={this.state.attr3Input}
          cardImage={this.state.imageInput}
          cardRare={this.state.rareInput}
          cardTrunfo={this.state.trunfoInput}
          hasTrunfo={this.state.hasTrunfo}
          isSaveButtonDisabled={this.state.buttonDisabled}
          onInputChange={this.saveFormFieldDataInState}
          onSaveButtonClick={this.saveLetterInState}
        />
        <hr />
        <Card
          cardName={this.state.nameInput}
          cardDescription={this.state.descriptionInput}
          cardAttr1={this.state.attr1Input}
          cardAttr2={this.state.attr2Input}
          cardAttr3={this.state.attr3Input}
          cardImage={this.state.imageInput}
          cardRare={this.state.rareInput}
          cardTrunfo={this.state.trunfoInput}
        />
        <hr />
        <h3>Filtros de Busca</h3>
        <InputAndPlaceholder
          inputType="text"
          value={this.state.filterLettersByName}
          placeholderContent="Nome da Carta"
          disableSearch={this.state.disableOtherSearches}
          onChangeEvent={this.filterLettersByName}
          dataTestid="name-filter"
        />{" "}
        <br />
        <LabelAndSelectFilter
          labelContent="Raridade"
          optionsContent={["todas", "normal", "raro", "muito raro"]}
          value={this.state.filterByRarity}
          disableSearch={this.state.disableOtherSearches}
          onChangeEvent={this.filterByRarity}
          dataTestid="rare-filter"
        />
        <LabelAndCheckboxFilter
          labelContent="Super Trunfo"
          checked={this.state.filterByTrunfo}
          onChangeEvent={this.filterByTrunfo}
          dataTestid="trunfo-filter"
        />
        <hr />
        {
          this.state.temporaryData.map((element) => (
            <Card
              key={`${element.nameInput}${element.attr1Input}${element.attr2Input}${element.attr3Input}`}
              cardID={element.nameInput}
              cardName={element.nameInput}
              cardDescription={element.descriptionInput}
              cardAttr1={element.attr1Input}
              cardAttr2={element.attr2Input}
              cardAttr3={element.attr3Input}
              cardImage={element.imageInput}
              cardRare={element.rareInput}
              cardTrunfo={element.trunfoInput}
              deleteButton={true}
              handlerFuncDelete={this.deleteCardFromDeck}
            />
          ))
        }
      </main>
    );
  }
}

export default App;

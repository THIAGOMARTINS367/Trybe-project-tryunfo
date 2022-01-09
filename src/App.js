
import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import InputAndPlaceholder from './components/InputAndPlaceholder';
import SelectAndPlaceholder from './components/SelectAndPlaceholder';
import LabelAndSelect from './components/LabelAndSelect';
import './App.css'


class App extends React.Component {
  constructor() {
    super()
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
      filterLettersByName: ''
    }

    this.saveFormFieldDataInState = this.saveFormFieldDataInState.bind(this);
    this.validateFormFieldsLength = this.validateFormFieldsLength.bind(this);
    this.validateFormAttributesFields = this.validateFormAttributesFields.bind(this);
    this.saveLetterInState = this.saveLetterInState.bind(this);
    this.deleteCardFromDeck = this.deleteCardFromDeck.bind(this);
    this.filterLettersByName = this.filterLettersByName.bind(this);
    this.filterByRarity = this.filterByRarity.bind(this);
  }

  validateFormFieldsLength() {
    const { nameInput, descriptionInput, imageInput, rareInput } = this.state;
    if (nameInput.length === 0 || descriptionInput.length === 0 || imageInput.length === 0 || rareInput.length === 0) {
      this.validateFormAttributesFields(true);
    } else {
      this.validateFormAttributesFields(false);
    }
    // console.log(imageInput)
    
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
      Number(attr1Input) + Number(attr2Input) + Number(attr3Input) > 210
    ];
    // console.log(validations)
    // console.log(Number(attr1Input) + Number(attr2Input) + Number(attr3Input))
    // console.log('true? :', validations.includes(true));
    if (validations.includes(true) || previousValidatorAnswer === true) {
      // console.log('entrou em true');
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
    // console.log(nameFormatted);
    this.setState(
      { [nameFormatted]: type === "checkbox" ? checked : value },
      this.validateFormFieldsLength
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
    } = this.state;
    const object = {
      nameInput,
      descriptionInput,
      attr1Input,
      attr2Input,
      attr3Input,
      imageInput,
      rareInput,
      trunfoInput: trunfoInput
    }
    let hasTrunfo = this.state.hasTrunfo;
    if (this.state.trunfoInput === true) {
      hasTrunfo = true
    }
    console.log(hasTrunfo);
    this.state.createdLetters.push(object);
    this.setState({
      nameInput: "",
      descriptionInput: "",
      imageInput: "",
      attr1Input: 0,
      attr2Input: 0,
      attr3Input: 0,
      rareInput: "normal",
      hasTrunfo: hasTrunfo,
      trunfoInput: false
    }, () => this.setState({ temporaryData: this.state.createdLetters }));
    console.log(this.state.createdLetters)
  }

  deleteCardFromDeck({ target }) {
    const { name } = target;
    let nameFormatted = name.replace('button-','').replace('-Trunfo', '');
    let hasTrunfo = '';
    const previousCreatedLetters = this.state.createdLetters;
    const dataArray = [];
    for (let index = 0; index < 7; index++) {
      hasTrunfo += name[name.length -1 - index];
    }
    this.setState({ createdLetters: [] }, () => {
      previousCreatedLetters.map((element) => {
        if (element.nameInput !== nameFormatted) {
          dataArray.push(element)
        }
      })
      console.log('hasTrunfo:', hasTrunfo)
      this.setState({ createdLetters: dataArray }, () => this.setState({ temporaryData: this.state.createdLetters }));
      if (hasTrunfo === 'ofnurT-') {
        this.setState({ hasTrunfo: false });
      }
    });
  }

  filterLettersByName({ target }) {
    const { value } = target;
    const temporaryData = []
    const filterByRarity = this.state.filterByRarity;
    console.log('value: ', value)
    this.state.createdLetters.map((element) => {
      if (filterByRarity === 'todas') {
        if (element.nameInput.includes(value)) {
          temporaryData.push(element);
        } else if(value.length === 0) {
          temporaryData.push(element);
        }
      } else {
        if (element.nameInput.includes(value) && element.rareInput === filterByRarity) {
          temporaryData.push(element);
        } else if (value.length === 0 && element.rareInput === filterByRarity) {
          temporaryData.push(element);
        }
      }
      
    });
    this.setState({ temporaryData: temporaryData, filterLettersByName: value });
    // if (this.state.filterByRarity !== 'todas') {
    //   console.log('CHAMOU filterByRarity', value)
    //   this.filterByRarity;
    // }
  }

  filterByRarity({ target }) {
    const { value } = target;
    const temporaryData = []
    const filterLettersByName = this.state.filterLettersByName;
    this.state.createdLetters.map((element) => {
      if (filterLettersByName.length === 0) {
        if (element.rareInput === value) {
          temporaryData.push(element);
        } else if(value === 'todas') {
          temporaryData.push(element);
        }
      } else {
        if (
          element.rareInput === value &&
          element.nameInput.includes(filterLettersByName)
        ) {
          temporaryData.push(element);
        } else if (
          value === "todas" &&
          element.nameInput.includes(filterLettersByName)
        ) {
          temporaryData.push(element);
        }
      }
      
    });
    this.setState({ temporaryData: temporaryData, filterByRarity: value });
    // if (this.state.filterLettersByName.length > 0) {
    //   console.log('CHAMOU filterLettersByName', value)
    //   this.filterLettersByName();
    // }
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
          placeholderContent="Nome da Carta"
          onChangeEvent={this.filterLettersByName}
          dataTestid="name-filter"
        /> <br />
        <LabelAndSelect
          labelContent="Raridade"
          optionsContent={["todas", "normal", "raro", "muito raro"]}
          value={this.state.filterByRarity}
          onChangeEvent={this.filterByRarity}
          dataTestid="rare-filter"
        />
        {/* <SelectAndPlaceholder
          placeholderContent="Raridade"
          optionsContent={["todas", "normal", "raro", "muito raro"]}
          onChangeEvent={this.filterByRarity}
          dataTestid="rare-filter"
        /> */}
        <hr />
        {this.state.temporaryData.map((element) => (
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
        ))}
      </main>
    );
  }
}

export default App;

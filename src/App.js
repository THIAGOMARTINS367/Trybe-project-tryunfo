import { func } from 'prop-types';
import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

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
      buttonDisabled: true
    }

    this.saveDataFormFields = this.saveDataFormFields.bind(this);
    this.validateFormFieldsLength = this.validateFormFieldsLength.bind(this);
    this.validateFormAttributesFields = this.validateFormAttributesFields.bind(this);
  }

  validateFormFieldsLength() {
    const { nameInput, descriptionInput, imageInput, rareInput } = this.state;
    if (nameInput.length === 0 || descriptionInput.length === 0 || imageInput.length === 0 || rareInput.length === 0) {
      this.validateFormAttributesFields(true);
    } else {
      this.validateFormAttributesFields(false);
    }
    console.log(imageInput)
    
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
    console.log(validations)
    console.log(Number(attr1Input) + Number(attr2Input) + Number(attr3Input))
    console.log('true? :', validations.includes(true));
    if (validations.includes(true) || previousValidatorAnswer === true) {
      console.log('entrou em true')
      this.setState({ buttonDisabled: true });
    } else {
      this.setState({ buttonDisabled: false });
    }
  }

  saveDataFormFields({ target }) {
    const { name, value, type, checked } = target;
    let nameFormatted = '';
    for (let index = 0; index < name.length; index += 1) {
      if (name[index] === '-') {
        nameFormatted += name[index + 1].toUpperCase();
        index += 1;
      } else {
        nameFormatted += name[index];
      }
    }
    console.log(nameFormatted);
    this.setState(
      { [nameFormatted]: type === "checkbox" ? checked : value },
      this.validateFormFieldsLength
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
          hasTrunfo=""
          isSaveButtonDisabled={this.state.buttonDisabled}
          onInputChange={this.saveDataFormFields}
          onSaveButtonClick={() => ''}
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
      </main>
    );
  }
}

export default App;

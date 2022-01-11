export default async function funcSaveLetterInState(appState) {
  const {
    nameInput, descriptionInput, attr1Input,
    attr2Input, attr3Input, imageInput,
    rareInput, trunfoInput, createdLetters,
    hasTrunfo,
  } = appState;
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
  const objectSetState = {
    nameInputSetState: '',
    descriptionInputSetState: '',
    imageInputSetState: '',
    attr1InputSetState: 0,
    attr2InputSetState: 0,
    attr3InputSetState: 0,
    rareInputSetState: 'normal',
    hasTrunfoSetState: hasTrunfo2,
    trunfoInputSetState: false,
  };
  return objectSetState;
}

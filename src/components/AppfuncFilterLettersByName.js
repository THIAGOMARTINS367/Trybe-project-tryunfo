export default async function funcFilterLettersByName(target, appState) {
  const { value } = target;
  const { filterByRarity, createdLetters } = appState;
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
  const object = {
    temporaryData2,
    value,
  };
  return object;
}

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listWithId = document.querySelector('#ingredients');

ingredients.forEach((value) => {
  const element = document.createElement('li');
  listWithId.appendChild(element);
  element.classList.add('item');
  element.textContent = value;
})
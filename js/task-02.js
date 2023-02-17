const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = ingredients.map(item => {
  const li = document.createElement('li');
  li.textContent = item ;
  li.classList.add('item');
  return li;
});
const ul = document.querySelector('#ingredients').append(...ingredientsEl);
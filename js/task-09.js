const button = document.querySelector('.change-color');

button.addEventListener('click', onButtonClick);

function onButtonClick(event) {
  const color = getRandomHexColor();
  const span = document.querySelector('.color');
  const body = document.querySelector('body');
  span.textContent = color;
  body.style.backgroundColor = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

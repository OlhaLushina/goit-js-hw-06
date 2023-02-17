const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const numberEl = document.querySelector('input[type="number"]');
let amountBoxes;

btnCreate.addEventListener('click', onBtnCreateClick);
btnDestroy.addEventListener('click', onBtnDestroyClick);
numberEl.addEventListener('input', onNumberElChange);

function onBtnCreateClick(event) {
  createBoxes(amountBoxes);
}

function onBtnDestroyClick(event) {
  const boxes = document.querySelector('#boxes');
  boxes.innerHTML = '';
}

function onNumberElChange(event) {
  amountBoxes = event.currentTarget.value;
}

function createBoxes(amount) {
  if (amount) {
  let size = 30;
  let divList = [];
  for(let i = 0; i < amount; i += 1) {
    const div = document.createElement('div');
    div.style.width = size + "px";
    div.style.height = size + "px";
    div.style.backgroundColor = getRandomHexColor() ;
    divList.push(div);
    size += 10;
  }
  const boxes = document.querySelector('#boxes');
  boxes.append(...divList);
 }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

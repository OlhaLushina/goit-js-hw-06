const decrementEl = document.querySelector('button[data-action="decrement"]');
const incrementEl = document.querySelector('button[data-action="increment"]');
let counterValue = 0;

decrementEl.addEventListener("click", onDecrementElClick);
incrementEl.addEventListener("click", onIncrementElClick);

function onDecrementElClick(event) {
    counterValue -= 1;
    const valueEl = document.querySelector('#value');
    valueEl.textContent = counterValue;
}

function onIncrementElClick(event) {
    counterValue += 1;
    const valueEl = document.querySelector('#value');
    valueEl.textContent = counterValue;
}
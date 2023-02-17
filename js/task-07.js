const input = document.querySelector('#font-size-control');

input.addEventListener('input', onInputChange);

function onInputChange(event) {
    const text = document.querySelector('#text');
    text.style.fontSize = event.currentTarget.value + "px";
}
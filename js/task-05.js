const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', onNameInputChange);

function onNameInputChange(event) {
    const value = event.currentTarget.value.trim();

    nameOutput.textContent = (value) ? value : "Anonymous";
}
const nameInput = document.querySelector('#name-input');

nameInput.addEventListener('input', onNameInputChange);

function onNameInputChange(event) {
    const value = event.currentTarget.value.trim();
    const nameOutput = document.querySelector('#name-output');

    nameOutput.textContent = (value) ? value : "Anonymous";
}
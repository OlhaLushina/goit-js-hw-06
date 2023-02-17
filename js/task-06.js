const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    const numSymbolsEnter = event.currentTarget.value.trim().length;
    const numSymbolsNeed = Number(event.currentTarget.dataset.length);

    if (numSymbolsEnter === numSymbolsNeed) {
        event.currentTarget.classList.add('valid');
        event.currentTarget.classList.remove('invalid');
    } else {
        event.currentTarget.classList.add('invalid');
        event.currentTarget.classList.remove('valid');
    }
}
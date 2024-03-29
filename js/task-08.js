const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const elements = event.currentTarget.elements;
    const email = elements.email.value;
    const password = elements.password.value;

    if (email === "" || password === "") {
        alert('Всі поля повинні бути заповнені');
    } else {
        const data = {
            email,
            password
        }
        console.log(data);
        event.currentTarget.reset();
    }
}

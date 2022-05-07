const refs = {
    form: document.querySelector(".login-form"),
}
refs.form.addEventListener('submit', onFormSubmit);
const formInform = {};

function onFormSubmit(event) {
    event.preventDefault();
    const { elements: { email, password } } = event.currentTarget;
    if (email.value === "" || password.value === "") {
        alert('Введіть потрібну інформацію')
    };
    formInform.email = email.value;
    formInform.password = password.value;
    console.log(formInform);
    event.currentTarget.reset();
};
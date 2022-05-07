const refs = {
    input: document.querySelector('#validation-input'),

};

console.log(+refs.input.dataset.length);

const length = +refs.input.dataset.length;

function blurInput(event) {
    if (event.currentTarget.value.length !== length) {
        refs.input.classList.add('invalid')
        refs.input.classList.remove('valid')

    } else {
        refs.input.classList.remove('invalid')
        refs.input.classList.add('valid')
    }
}

refs.input.addEventListener('blur', blurInput);
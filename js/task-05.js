const refs = {
    inputName: document.querySelector('#name-input'),
    nameSpan: document.querySelector('#name-output'),
};



function onInputChange(event) {
    if (event.currentTarget.value !== "") {
        refs.nameSpan.textContent = event.currentTarget.value;;
    } else
        refs.nameSpan.textContent = 'Anonymous'
};

refs.inputName.addEventListener('input', onInputChange)
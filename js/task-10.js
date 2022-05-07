function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const refs = {
    controls: document.querySelector('#controls > input'),
    btnClickCreate: document.querySelector('[data-create]'),
    btnClickDestroy: document.querySelector('[data-destroy]'),
    boxes: document.querySelector('#boxes')
};


refs.btnClickCreate.addEventListener('click', onBtnClickCreate);
refs.btnClickDestroy.addEventListener('click', onBtnClickDestroy);

function createBox(ratio) {
    return `<div style="background-color: ${getRandomHexColor()}; height: ${
      30 + 10 * ratio
    }px; width: ${30 + 10 * ratio}px"></div>`;
};

function createBoxes(amount) {
    let string = "";
    for (let i = 0; i < amount; i++) {
        string += createBox(i);
    }
    refs.boxes.innerHTML = string;
}


function onBtnClickCreate() {
    createBoxes(refs.controls.value)
    console.log(refs.controls.value);
};

function onBtnClickDestroy() {
    refs.boxes.innerHTML = '';
    refs.controls.value = "";
}
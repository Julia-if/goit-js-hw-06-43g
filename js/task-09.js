function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
    body: document.querySelector('.widget'),
    spanColor: document.querySelector('.color'),
    btnChangeColor: document.querySelector('.change-color'),
};

refs.btnChangeColor.addEventListener('click', onBtnClickChangeColor);

function onBtnClickChangeColor(event) {
    refs.spanColor.textContent = getRandomHexColor();
    refs.body.style.backgroundColor = refs.spanColor.textContent;
}
let counterValue = 0;
const refs = {
    btnDecrement: document.querySelector('button[data-action="decrement"]'),
    btnIncrement: document.querySelector('button[data-action="increment"]'),
    counterSpan: document.querySelector('#value')
};



function onDecrement() {
    counterValue -= 1;
    refs.counterSpan.textContent = counterValue
    return counterValue;
};

function onIncrement() {
    counterValue += 1;
    refs.counterSpan.textContent = counterValue;
    return counterValue;
}
refs.btnDecrement.addEventListener('click', onDecrement);
refs.btnIncrement.addEventListener('click', onIncrement);
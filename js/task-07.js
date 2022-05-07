const refs = {
    input: document.querySelector("#font-size-control"),
    spanText: document.querySelector("#text"),
}

function changeSizeText(event) {
    refs.spanText.style.fontSize = `${event.currentTarget.valueAsNumber}px`
}

refs.input.addEventListener('input', changeSizeText)
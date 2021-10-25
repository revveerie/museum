let buttonYoungMinus = document.querySelector('.ticket__type-amount-button_18-minus'),
    buttonYoungPlus = document.querySelector('.ticket__type-amount-button_18-plus'),
    buttonOldMinus = document.querySelector('.ticket__type-amount-button_65-minus'),
    buttonOldPlus = document.querySelector('.ticket__type-amount-button_65-plus');

buttonYoungMinus.onclick = function() {
    let youngAmount = +document.querySelector('.ticket__type-amount-input_18').textContent;
    let totalOutput = +document.querySelector('.ticket__total-item-text_output').textContent;
    if (youngAmount > 0) {
        youngAmount--;
        totalOutput -= 20;
    }
    document.querySelector('.ticket__type-amount-input_18').textContent = youngAmount;
    document.querySelector('.ticket__total-item-text_output').textContent = totalOutput;
}

buttonYoungPlus.onclick = function() {
    let youngAmount = +document.querySelector('.ticket__type-amount-input_18').textContent;
    let totalOutput = +document.querySelector('.ticket__total-item-text_output').textContent;
    youngAmount++;
    totalOutput += 20;
    document.querySelector('.ticket__type-amount-input_18').textContent = youngAmount;
    document.querySelector('.ticket__total-item-text_output').textContent = totalOutput;
}

buttonOldMinus.onclick = function() {
    let oldAmount = +document.querySelector('.ticket__type-amount-input_65').textContent;
    let totalOutput = +document.querySelector('.ticket__total-item-text_output').textContent;
    if (oldAmount > 0) {
        oldAmount--;
        totalOutput -= 10;
    }
    document.querySelector('.ticket__type-amount-input_65').textContent = oldAmount;
    document.querySelector('.ticket__total-item-text_output').textContent = totalOutput;
}

buttonOldPlus.onclick = function() {
    let oldAmount = +document.querySelector('.ticket__type-amount-input_65').textContent;
    let totalOutput = +document.querySelector('.ticket__total-item-text_output').textContent;
    oldAmount++;
    totalOutput +=10;
    document.querySelector('.ticket__type-amount-input_65').textContent = oldAmount;
    document.querySelector('.ticket__total-item-text_output').textContent = totalOutput;
}

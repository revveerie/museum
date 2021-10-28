let buttonYoungMinus = document.querySelector('.ticket__type-amount-button_18-minus'),
    buttonYoungPlus = document.querySelector('.ticket__type-amount-button_18-plus'),
    buttonOldMinus = document.querySelector('.ticket__type-amount-button_65-minus'),
    buttonOldPlus = document.querySelector('.ticket__type-amount-button_65-plus');

buttonYoungMinus.onclick = function() {
    let youngAmount = +document.querySelector('.ticket__type-amount-input_18').textContent;
    let totalOutput = +document.querySelector('.ticket__total-item-text_output').textContent;

    let youngAmountForm = +document.querySelector('.input-ticket__type-amount-input_18').textContent;
    let totalOutputForm = +document.querySelector('.total-item__cost-18').textContent;
    let totalCost = +document.querySelector('.total-item__result-amount').textContent;

    if (youngAmount > 0) {
        youngAmount--;
        totalOutputForm -= 20;
        totalOutput -= 20;
        totalCost -= 20;
    }
    document.querySelector('.ticket__type-amount-input_18').textContent = youngAmount;
    document.querySelector('.ticket__total-item-text_output').textContent = totalOutput;
    
    document.querySelector('.input-ticket__type-amount-input_18').textContent = youngAmount;
    document.querySelector('.total-item__amount-18').textContent = youngAmount;
    document.querySelector('.total-item__cost-18').textContent = totalOutputForm;
    document.querySelector('.total-item__result-amount').textContent = totalCost;
}

buttonYoungPlus.onclick = function() {
    let youngAmount = +document.querySelector('.ticket__type-amount-input_18').textContent;
    let totalOutput = +document.querySelector('.ticket__total-item-text_output').textContent;

    let youngAmountForm = +document.querySelector('.input-ticket__type-amount-input_18').textContent;
    let totalOutputForm = +document.querySelector('.total-item__cost-18').textContent;
    let totalCost = +document.querySelector('.total-item__result-amount').textContent;

    youngAmount++;
    totalOutput += 20;
    totalOutputForm += 20;
    totalCost += 20;
    document.querySelector('.ticket__type-amount-input_18').textContent = youngAmount;
    document.querySelector('.ticket__total-item-text_output').textContent = totalOutput;

    document.querySelector('.input-ticket__type-amount-input_18').textContent = youngAmount;
    document.querySelector('.total-item__amount-18').textContent = youngAmount;
    document.querySelector('.total-item__cost-18').textContent = totalOutputForm;
    document.querySelector('.total-item__result-amount').textContent = totalCost;
}

buttonOldMinus.onclick = function() {
    let oldAmount = +document.querySelector('.ticket__type-amount-input_65').textContent;
    let totalOutput = +document.querySelector('.ticket__total-item-text_output').textContent;

    let oldAmountForm = +document.querySelector('.input-ticket__type-amount-input_65').textContent;
    let totalOutputForm = +document.querySelector('.total-item__cost-65').textContent;
    let totalCost = +document.querySelector('.total-item__result-amount').textContent;

    if (oldAmount > 0) {
        oldAmount--;
        totalOutput -= 10;
        totalOutputForm -= 10;
        totalCost -= 10;
    }
    document.querySelector('.ticket__type-amount-input_65').textContent = oldAmount;
    document.querySelector('.ticket__total-item-text_output').textContent = totalOutput;

    document.querySelector('.input-ticket__type-amount-input_65').textContent = oldAmount;
    document.querySelector('.total-item__amount-65').textContent = oldAmount;
    document.querySelector('.total-item__cost-65').textContent = totalOutputForm;
    document.querySelector('.total-item__result-amount').textContent = totalCost;
}

buttonOldPlus.onclick = function() {
    let oldAmount = +document.querySelector('.ticket__type-amount-input_65').textContent;
    let totalOutput = +document.querySelector('.ticket__total-item-text_output').textContent;

    let oldAmountForm = +document.querySelector('.input-ticket__type-amount-input_65').textContent;
    let totalOutputForm = +document.querySelector('.total-item__cost-65').textContent;
    let totalCost = +document.querySelector('.total-item__result-amount').textContent;

    oldAmount++;
    totalOutput +=10;
    totalOutputForm += 10;
    totalCost += 10;
    document.querySelector('.ticket__type-amount-input_65').textContent = oldAmount;
    document.querySelector('.ticket__total-item-text_output').textContent = totalOutput;
    
    document.querySelector('.input-ticket__type-amount-input_65').textContent = oldAmount;
    document.querySelector('.total-item__amount-65').textContent = oldAmount;
    document.querySelector('.total-item__cost-65').textContent = totalOutputForm;
    document.querySelector('.total-item__result-amount').textContent = totalCost;
}

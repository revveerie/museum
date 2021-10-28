let buttonYoungMinusForm = document.querySelector('.input-ticket__type-amount-button_18-minus'),
    buttonYoungPlusForm = document.querySelector('.input-ticket__type-amount-button_18-plus'),
    buttonOldMinusForm = document.querySelector('.input-ticket__type-amount-button_65-minus'),
    buttonOldPlusForm = document.querySelector('.input-ticket__type-amount-button_65-plus');

buttonYoungMinusForm.onclick = function() {
    let youngAmount = +document.querySelector('.input-ticket__type-amount-input_18').textContent;
    let totalOutput = +document.querySelector('.total-item__cost-18').textContent;
    let totalCost = +document.querySelector('.total-item__result-amount').textContent;

    let youngAmountPage = +document.querySelector('.ticket__type-amount-input_18').textContent;
    let totalOutputPage = +document.querySelector('.ticket__total-item-text_output').textContent;

    if (youngAmount > 0) {
        youngAmount--;
        totalOutput -= 20;
        totalCost -= 20;
        totalOutputPage -= 20;
    }
    document.querySelector('.input-ticket__type-amount-input_18').textContent = youngAmount;
    document.querySelector('.total-item__amount-18').textContent = youngAmount;
    document.querySelector('.total-item__cost-18').textContent = totalOutput;
    document.querySelector('.total-item__result-amount').textContent = totalCost;

    document.querySelector('.ticket__type-amount-input_18').textContent = youngAmount;
    document.querySelector('.ticket__total-item-text_output').textContent = totalOutputPage;
}

buttonYoungPlusForm.onclick = function() {
    let youngAmount = +document.querySelector('.input-ticket__type-amount-input_18').textContent;
    let totalOutput = +document.querySelector('.total-item__cost-18').textContent;
    let totalCost = +document.querySelector('.total-item__result-amount').textContent;

    let youngAmountPage = +document.querySelector('.ticket__type-amount-input_18').textContent;
    let totalOutputPage = +document.querySelector('.ticket__total-item-text_output').textContent;

    youngAmount++;
    totalOutput += 20;
    totalCost += 20;
    totalOutputPage += 20;
    document.querySelector('.input-ticket__type-amount-input_18').textContent = youngAmount;
    document.querySelector('.total-item__amount-18').textContent = youngAmount;
    document.querySelector('.total-item__cost-18').textContent = totalOutput;
    document.querySelector('.total-item__result-amount').textContent = totalCost;

    document.querySelector('.ticket__type-amount-input_18').textContent = youngAmount;
    document.querySelector('.ticket__total-item-text_output').textContent = totalOutputPage;
}

buttonOldMinusForm.onclick = function() {
    let oldAmount = +document.querySelector('.input-ticket__type-amount-input_65').textContent;
    let totalOutput = +document.querySelector('.total-item__cost-65').textContent;
    let totalCost = +document.querySelector('.total-item__result-amount').textContent;

    let oldAmountPage = +document.querySelector('.ticket__type-amount-input_65').textContent;
    let totalOutputPage = +document.querySelector('.ticket__total-item-text_output').textContent;

    if (oldAmount > 0) {
        oldAmount--;
        totalOutput -= 10;
        totalCost -= 10;
        totalOutputPage -= 10;
    }
    document.querySelector('.input-ticket__type-amount-input_65').textContent = oldAmount;
    document.querySelector('.total-item__amount-65').textContent = oldAmount;
    document.querySelector('.total-item__cost-65').textContent = totalOutput;
    document.querySelector('.total-item__result-amount').textContent = totalCost;

    document.querySelector('.ticket__type-amount-input_65').textContent = oldAmount;
    document.querySelector('.ticket__total-item-text_output').textContent = totalOutputPage;
}

buttonOldPlusForm.onclick = function() {
    let oldAmount = +document.querySelector('.input-ticket__type-amount-input_65').textContent;
    let totalOutput = +document.querySelector('.total-item__cost-65').textContent;
    let totalCost = +document.querySelector('.total-item__result-amount').textContent;

    let oldAmountPage = +document.querySelector('.ticket__type-amount-input_65').textContent;
    let totalOutputPage = +document.querySelector('.ticket__total-item-text_output').textContent;

    oldAmount++;
    totalOutput +=10;
    totalCost += 10;
    totalOutputPage += 10;

    document.querySelector('.input-ticket__type-amount-input_65').textContent = oldAmount;
    document.querySelector('.total-item__amount-65').textContent = oldAmount;
    document.querySelector('.total-item__cost-65').textContent = totalOutput;
    document.querySelector('.total-item__result-amount').textContent = totalCost;

    document.querySelector('.ticket__type-amount-input_65').textContent = oldAmount;
    document.querySelector('.ticket__total-item-text_output').textContent = totalOutputPage;
}

const today = new Date().toISOString().split('T')[0]
const dateInput = document.querySelector("#date")
const dateOutput = document.querySelector('.overview-item__day-out')
dateInput.setAttribute('min', today)

const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const month = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December']

dateInput.addEventListener('input', () => {
  const dateValue = new Date(dateInput.valueAsNumber)
  dateOutput.innerHTML = `${week[dateValue.getDay()] || 'Friday'},
  ${month[dateValue.getMonth()] || 'August'} ${dateValue.getDate() || 19}`
})

const timeInput = document.querySelector('#time')
const timeOutput = document.querySelector('.overview-item__time-out')

timeInput.addEventListener('input', () => {
  if (timeInput.value !== '' && timeInput.value < timeInput.min) timeInput.value = timeInput.min
  if (timeInput.value !== '' && timeInput.value > timeInput.max) timeInput.value = timeInput.max
  timeOutput.innerHTML = timeInput.value
})

let selectInput = document.querySelector('.inputs__ticket-type');

selectInput.addEventListener('input', () => {
    let selectValue = selectInput.textContent;
    document.querySelector('.overview-item__type-out').textContent = selectValue;
})


  const radioPrices = document.querySelectorAll(".radio-input")
  
  const ticketTypeOutput = document.querySelector('.overview-item__type-out')
  const formPrices = document.querySelector(".inputs__ticket-type")
  
  for (let i = 0; i < radioPrices.length; i++) {
    radioPrices[i].addEventListener('click', () => {
      ticketTypeOutput.innerHTML = radioPrices[i].value
      formPrices[i + 1].selected = true
    })
  }
  formPrices.addEventListener('change', () => {
    radioPrices[+formPrices.value].click()
  })

  let ticketButton = document.querySelector('.ticket__button');
  ticketButton.onclick = function() {
    document.querySelector('.form').classList.add('_open');
    document.body.classList.add('_lock');
}

let closeForm = document.querySelector('.close-form');
closeForm.onclick = function() {
  document.querySelector('.form').classList.remove('_open');
  document.body.classList.remove('_lock');
}

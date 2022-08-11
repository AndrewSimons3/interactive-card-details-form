'use strict';
const cardholderName = document.getElementById('name');
const cardholderDisplay = document.querySelector('.cardholder-display');
const cardNumber = document.getElementById('card-number');
const cardNumberDisplay = document.querySelector('.card-number-display');
const cardMonth = document.getElementById('month');
const cardMonthExpirationDisplay = document.querySelector(
	'.expiry-month-display'
);
const cardYearExpirationDisplay = document.querySelector(
	'.expiry-year-display'
);
const cardYear = document.getElementById('year');
const cardCvc = document.getElementById('cvc');

const form = document.querySelector('.form');
const thankYou = document.querySelector('.thank-you');
const continueBtn = document.querySelector('.continue');

const nameError = document.querySelector('.name-error');
const cardError = document.querySelector('.card-error');
const expError = document.querySelector('.exp-error');
const cvcError = document.querySelector('.cvc-error');

function inputName() {
	cardholderDisplay.innerHTML = cardholderName.value;

	if (cardholderDisplay.innerHTML == '') {
		cardholderDisplay.innerHTML = cardholderName.placeholder;
	}
}

function inputCardNum() {
	let cardNumberInput = cardNumber.value;

	//keep user from entering invalid characters
	let formattedCardNumber = cardNumberInput.replace(/[^0-9]+/g, '');
	formattedCardNumber = formattedCardNumber.substring(0, 16);
	console.log(cardNumberInput);

	//Split the card numer in to 4 groups
	let cardNumberSections = formattedCardNumber.match(/\d{1,4}/g);
	if (cardNumberSections !== null) {
		formattedCardNumber = cardNumberSections.join(' ');
	}

	if (cardNumberInput !== formattedCardNumber) {
		cardNumber.value = formattedCardNumber;
	}

	cardNumberDisplay.innerHTML = cardNumber.value;
	if (cardNumber.value === '') {
		cardNumberDisplay.innerHTML = '0000 0000 0000 0000';
	}
}

function inputMonth() {
	let cardMonthInput = cardMonth.value;
	let formattedMonthInput = cardMonthInput.replace(/[^0-9]+/g, '');

	cardMonth.value = formattedMonthInput;

	cardMonthExpirationDisplay.innerHTML = cardMonth.value;
	if (cardMonth.value === '') {
		cardMonthExpirationDisplay.innerHTML = '00';
	}
}

function inputYear() {
	let cardYearInput = cardYear.value;
	let formattedYearInput = cardYearInput.replace(/[^0-9]+/g, '');

	cardYear.value = formattedYearInput;

	cardYearExpirationDisplay.innerHTML = cardYear.value;
	if (cardYear.value === '') {
		cardYearExpirationDisplay.innerHTML = '00';
	}
}

function inputCvc() {
	let cvcInput = cardCvc.value;
	let formattedCvc = cvcInput.replace(/[^0-9]+/g, '');

	cardCvc.value = formattedCvc;
}

function massValidate() {
	if (cardholderName.value === '') {
		nameError.style.display = 'block';
		cardholderName.style.border = '1px solid hsl(0, 100%, 66%)';
	}

	if (cardNumber.value === '') {
		cardError.style.display = 'block';
		cardNumber.style.border = '1px solid hsl(0, 100%, 66%)';
	}

	if (cardMonth.value === '' || cardYear.value === '') {
		expError.style.display = 'block';
		cardMonth.style.border = '1px solid hsl(0, 100%, 66%)';
		cardYear.style.border = '1px solid hsl(0, 100%, 66%)';
	}

	if (cardCvc.value === '') {
		cvcError.style.display = 'block';
		cardCvc.style.border = '1px solid hsl(0, 100%, 66%)';
	} else {
		form.classList.add('hide');
		thankYou.classList.remove('hide');
	}
}

form.addEventListener('submit', (e) => {
	e.preventDefault();

	massValidate();
});

form.addEventListener('keyup', () => {
	nameError.style.display = 'none';
	cardholderName.style.border = '1px solid #dfdee0';

	cardError.style.display = 'none';
	cardNumber.style.border = '1px solid #dfdee0';

	expError.style.display = 'none';
	cardMonth.style.border = '1px solid #dfdee0';
	cardYear.style.border = '1px solid #dfdee0';

	cvcError.style.display = 'none';
	cardCvc.style.border = '1px solid #dfdee0';
});

continueBtn.addEventListener('click', () => {
	cardholderName.value = '';
	cardNumber.value = '';
	cardMonth.value = '';
	cardYear.value = '';
	cardCvc.value = '';

	form.classList.remove('hide');
	thankYou.classList.add('hide');
});

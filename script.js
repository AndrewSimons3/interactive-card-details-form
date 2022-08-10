'use strict';
const cardNumber = document.getElementById('card-number');

function inputCardNum() {
  let cardNumberInput = cardNumber.value;
  console.log(cardNumberInput)
  //Split the card numer in to 4 groups
  let cardNumberSections = cardNumberInput.match(/\d{1,4}/g);
  if (cardNumberSections !== null) {
    cardNumberInput = cardNumberSections.join(" ");
  }
}

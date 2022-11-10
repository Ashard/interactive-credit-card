const cardholdername_input_field = document.getElementById("card-holder-name");
cardholdername_input_field.addEventListener("input", (event) => {
  var cardholdername_interactive = document.getElementById(
    "card-holder-name-interactive"
  );

  cardholdername_interactive.innerHTML = event.target.value;

  console.log(event);
});

const cardnumber_input_field = document.getElementById("card-number");
cardnumber_input_field.addEventListener("input", (event) => {
  var cardnumber_interactive = document.getElementById(
    "card-number-interactive"
  );
  // add space every 4 letters]
  //   var cardnumber_length = cardnumber_interactive.cardnumber_length;
});

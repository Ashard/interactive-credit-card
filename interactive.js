// CARDHOLDER NAME
const cardholdername_input_field = document.getElementById("card-holder-name");
cardholdername_input_field.addEventListener("input", (event) => {
  var cardholdername_interactive = document.getElementById(
    "card-holder-name-interactive"
  );

  cardholdername_interactive.innerHTML = event.target.value;
});

// CARD NUMBER INTERACTIVE
const cardnumber_input_field = document.getElementById("card-number");
cardnumber_input_field.addEventListener("input", (event) => {
  var cardnumber_interactive = document.getElementById(
    "card-number-interactive"
  );

  var index = 0;
  var modified_userinput = "";
  var userinput = event.target.value;

  for (c in userinput) {
    if (index == 4 || index == 8 || index == 12) {
      modified_userinput += " " + userinput[c];
    } else {
      modified_userinput += userinput[c];
    }
    index += 1;
  }

  cardnumber_interactive.innerHTML = modified_userinput;
});

// card expiry month
const card_expiry_month_input_field = document.getElementById("card-expiry-mm");
card_expiry_month_input_field.addEventListener("input", (event) => {
  const card_expiry_month_interactive_field = document.getElementById(
    "card-expiry-interactive-mm"
  );

  card_expiry_month_interactive_field.innerHTML = event.target.value;
});

const card_expiry_year_input_field =
  document.getElementById("card-expiry-yyyy");
card_expiry_year_input_field.addEventListener("input", (event) => {
  const card_expiry_year_interactive_field = document.getElementById(
    "card-expiry-interactive-yyyy"
  );
  card_expiry_year_interactive_field.innerHTML = event.target.value;
});

//cvc
const cvc_input_field = document.getElementById("cvc");
cvc_input_field.addEventListener("input", (event) => {
  const cvc_interactive = document.getElementById("cvc-interactive");
  cvc_interactive.innerHTML = event.target.value;
});

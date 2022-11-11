const cardholdername_input_field = document.getElementById("card-holder-name");
cardholdername_input_field.addEventListener("input", (event) => {
  var cardholdername_interactive = document.getElementById(
    "card-holder-name-interactive"
  );

  cardholdername_interactive.innerHTML = event.target.value;

  console.log(event);
});

// CARD NUMBER INTERACTIVE
const cardnumber_input_field = document.getElementById("card-number");
cardnumber_input_field.addEventListener("keydown", (event) => {
  var userinput = event.target.value;
  if (userinput.length >= 16) {
    event.preventDefault();
  }

  var cardnumber_interactive = document.getElementById(
    "card-number-interactive"
  );

  console.log(event);

  var index = 0;
  var modified_userinput = "";
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

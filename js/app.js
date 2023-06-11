const formElement = document.getElementById("form");

formElement.addEventListener("submit", function (e) {
  e.preventDefault();

  const number1Element = document.getElementById("number_1");
  const number2Element = document.getElementById("number_2");

  let number1Value = parseInt(number1Element.value);
  let number2Value = parseInt(number2Element.value);

  error.innerText = "";

  number1Element.classList.remove("border");
  number2Element.classList.remove("border");

  if (number1Value == "") {
    error.innerText = "Enter number 1!";
    number1Element.classList.add("border");
  } else if (number2Value == "") {
    error.innerText = "Enter number 2!";
    number2Element.classList.add("border");
  } else {
    if(number1Value == 50 || number2Value === 50 || (number1Value + number2Value) === 50) {
        error.innerText = "Something is equal to 50";
    } else {
        error.innerText = "Nothing is equal to 50";
    }
  }
});
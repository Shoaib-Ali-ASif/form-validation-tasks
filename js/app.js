const form1Element = document.getElementById("form-sum");

form1Element.addEventListener("submit", function (e) {
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
    if (
      number1Value == 50 ||
      number2Value === 50 ||
      number1Value + number2Value === 50
    ) {
      error.innerText = "Something is equal to 50";
    } else {
      error.innerText = "Nothing is equal to 50";
    }
  }
});
const form2Element = document.getElementById("rectangle");
const submitElement = document.getElementById("submit-1");

submitElement.addEventListener("click", function (e) {
  e.preventDefault();
  const lengthElement = document.getElementById("length");
  const widthElement = document.getElementById("width");
  const errorElement = document.getElementById("error-1");

  let lengthValue = parseInt(lengthElement.value);
  let widthValue = parseInt(widthElement.value);

  errorElement.innerText = "";

  if (isNaN(lengthValue) || isNaN(widthValue)) {
    errorElement.innerText = "Enter a Valid Number";
  } else {
    let area = lengthValue * widthValue;

    errorElement.innerText = "Area of Rectangle: " + area;
  }
});

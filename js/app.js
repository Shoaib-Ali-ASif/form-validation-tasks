const form1Element = document.getElementById("form-sum");

form1Element.addEventListener("submit", function (e) {
  e.preventDefault();
  const number1Element = document.getElementById("number_1");
  const number2Element = document.getElementById("number_2");

  let number1Value = parseInt(number1Element.value);
  let number2Value = parseInt(number2Element.value);

  error.innerText = "";
    if (
      number1Value == 50 ||
      number2Value === 50 ||
      number1Value + number2Value === 50
    ) {
      error.innerText = "Something is equal to 50";
    } else {
      error.innerText = "Nothing is equal to 50";
    }
});
const form2Element = document.getElementById("rectangle");
const submit1Element = document.getElementById("submit-1");

submit1Element.addEventListener("click", function (e) {
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
const form3Element = document.getElementById("triangle");
const submit2Element = document.getElementById("submit-2");

submit2Element.addEventListener("click", function (e) {
  e.preventDefault();
  const heightElement = document.getElementById("height");
  const baseElement = document.getElementById("base");
  const error1Element = document.getElementById("error-2");

  let heightValue = parseInt(heightElement.value);
  let baseValue = parseInt(baseElement.value);

  error1Element.innerText = "";
  if (isNaN(heightValue) || isNaN(baseValue)) {
    error1Element.innerText = "Enter a Valid Number";
  } else {
    let areaOfTriangle = (heightValue * baseValue) / 2;

    error1Element.innerText = "Area of Triangle: " + areaOfTriangle;
  }
});
const form4Element = document.getElementById("circel");
const submit3Element = document.getElementById("submit-3");
submit3Element.addEventListener("click", function (e) {
  e.preventDefault();
  const radiusElement = document.getElementById("radius");
  const error3Element = document.getElementById("error-3");

  let radiusValue = parseInt(radiusElement.value);

  error3Element.innerText = "";
  if (isNaN(radiusValue)) {
    error3Element.innerText = "Enter a Valid Number";
  } else {
    let areaOfCircle = (radiusValue * radiusValue) * Math.PI ;

    error3Element.innerText = "Area of Circle: " + areaOfCircle;
  }
});


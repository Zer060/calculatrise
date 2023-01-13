var display = document.getElementById("display");
var numbers = "";
var operator = "";
var equals = "";

function addNumber(number) {
  numbers += number;
  display.value = numbers;
}

function addDecimal() {
  numbers += ".";
  display.value = numbers;
}

function addOperator(op) {
  operator = op;
  equals = numbers;
  numbers = "";
  display.value = operator;
}

function calculate() {
  numbers = eval(equals + operator + numbers);
  display.value = numbers;
  operator = "";
  equals = "";
}

function clearDisplay() {
  numbers = "";
  operator = "";
  equals = "";
  display.value = "";
}

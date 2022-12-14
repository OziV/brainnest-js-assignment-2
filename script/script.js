const buttons = [
  "AC",
  "⌫",
  "%",
  "/",
  7,
  8,
  9,
  "*",
  4,
  5,
  6,
  "-",
  1,
  2,
  3,
  "+",
  0,
  ".",
  "=",
];

const input = document.getElementsByClassName("grid-input");
const inputKeyboardSupport = document.getElementById("grid-input-two");
const gridContainer = document.getElementById("grid-container");

for (let i = 0; i < buttons.length; i++) {
  const btn = document.createElement("button");
  btn.setAttribute("id", buttons[i]);
  btn.textContent = buttons[i];
  if (buttons[i] === 0) {
    btn.setAttribute("class", "grid-zero");
  } else if (buttons[i] === "AC" || buttons[i] === "%" || buttons[i] === "⌫") {
    btn.setAttribute("class", "background-color-blue");
  } else if (
    buttons[i] === "/" ||
    buttons[i] === "*" ||
    buttons[i] === "-" ||
    buttons[i] === "+" ||
    buttons[i] === "="
  ) {
    btn.setAttribute("class", "background-color-orange");
  }

  btn.addEventListener("click", () => populateValue(btn.id));
  gridContainer.appendChild(btn);
}
/////////////////////////////
/* Global Variables */
/////////////////////////////

let inputValue = input[0].value;
let keyboardSupport = inputKeyboardSupport.value;
let numberCurrent = "";
let numberOneFromUser = "";
let numberTwoFromUser = "";
let currentOperator = "";
let sum = "";

/////////////////////////////
/* Operators */
/////////////////////////////

const populateValue = (value) => {
  switch (value) {
    case "AC":
      clearAll();
      break;
    case "+":
      handleOperatorAdd();
      break;
    case "-":
      handleOperatorSubtract();
      break;
    case "*":
      handleOperatorMultiply();
      break;
    case "/":
      handleOperatorDivide();
      break;
    case "%":
      handleOperatorPercent();
      break;
    case ".":
      handleDecimal();
      break;
    case "⌫":
      handleBackspace();
      break;
    case "=":
      handleCalculate();
      break;
    default:
      handleChangeNumbers(value);
  }
  handleKeyboardSupport();

  // console.log(`numberOneFromUser: ${numberOneFromUser}`);
  // console.log(`numberTwoFromUser: ${numberTwoFromUser}`);
  // console.log(`inputValue: ${inputValue}`);
  // console.log(`keyboardSupport: ${keyboardSupport}`);
  // console.log(`currentOperator: ${currentOperator}`);
  // console.log(`sum: ${sum}`);
  return;
};

const operate = (operator, numberOne, numberTwo) => {
  let stringToNumberOne = Number(numberOne);
  let stringToNumberTwo = Number(numberTwo);

  switch (operator) {
    case "+":
      mathOperatorsAdd(stringToNumberOne, stringToNumberTwo);
      break;
    case "-":
      mathOperatorsSubtract(stringToNumberOne, stringToNumberTwo);
      break;
    case "*":
      mathOperatorsMultiply(stringToNumberOne, stringToNumberTwo);
      break;
    case "/":
      mathOperatorsDivide(stringToNumberOne, stringToNumberTwo);
      break;
    case "%":
      mathOperatorsPercent(stringToNumberOne, stringToNumberTwo);
      break;
    default:
      console.log("No Operator Found");
  }
};

const mathOperatorsAdd = (numberOne, numberTwo) => {
  let result = 0;
  result = numberOne + numberTwo;
  if (result.toString().length > 7) {
    sum = result.toFixed(4);
    input[0].value = sum;
    numberOneFromUser = sum;
    numberTwoFromUser = "";
    inputValue = "";
    return result;
  } else {
    sum = result;
    input[0].value = result;
    numberOneFromUser = sum;
    numberTwoFromUser = "";
    inputValue = "";
    return result;
  }
};

const mathOperatorsSubtract = (numberOne, numberTwo) => {
  let result = 0;
  result = numberOne - numberTwo;
  if (result.toString().length > 7) {
    sum = result.toFixed(4);
    input[0].value = sum;
    numberOneFromUser = sum;
    numberTwoFromUser = "";
    inputValue = "";
    return result;
  } else {
    sum = result;
    input[0].value = result;
    numberOneFromUser = sum;
    numberTwoFromUser = "";
    inputValue = "";
    return result;
  }
};

const mathOperatorsMultiply = (numberOne, numberTwo) => {
  let result = 0;
  result = numberOne * numberTwo;
  if (result.toString().length > 7) {
    sum = result.toFixed(4);
    input[0].value = sum;
    numberOneFromUser = sum;
    numberTwoFromUser = "";
    inputValue = "";
    return result;
  } else {
    sum = result;
    input[0].value = result;
    numberOneFromUser = sum;
    numberTwoFromUser = "";
    inputValue = "";
    return result;
  }
};

const mathOperatorsDivide = (numberOne, numberTwo) => {
  let result = 0;
  if (!numberTwo) {
    sum = "lmao";
    input[0].value = sum;
    numberOneFromUser = sum;
    numberTwoFromUser = "";
    inputValue = "";
    return sum;
  }
  result = numberOne / numberTwo;
  if (result.toString().length > 7) {
    sum = result.toFixed(4);
    input[0].value = sum;
    numberOneFromUser = sum;
    numberTwoFromUser = "";
    inputValue = "";
    return result;
  } else {
    sum = result;
    input[0].value = result;
    numberOneFromUser = sum;
    numberTwoFromUser = "";
    inputValue = "";
    return result;
  }
};

/////////////////////////////
/* Handlers */
/////////////////////////////

const clearAll = () => {
  buttonValue = "";
  inputValue = "";
  keyboardSupport = "";
  input[0].value = "0";
  inputKeyboardSupport.value = "";
  numberCurrent = "";
  numberOneFromUser = "";
  numberTwoFromUser = "";
  currentOperator = "";
  sum = "";
};

const handleChangeNumbers = (value) => {
  if (input[0].value.length < 10) {
    if (sum !== "" && currentOperator !== "") {
      inputValue = "";
      numberOneFromUser = sum;
      numberTwoFromUser = inputValue;
    }
    if (input[0].value === "0") {
      input[0].value = "";
      inputValue = "";
      inputValue = inputValue + value;
      input[0].value = inputValue;
    } else {
      inputValue = inputValue + value;
      input[0].value = inputValue;
    }
  } else {
    inputValue = inputValue;
    input[0].value = inputValue;
  }
};

const handleKeyboardSupport = () => {
  if (currentOperator === "") {
    keyboardSupport = inputValue;
    inputKeyboardSupport.value = keyboardSupport;
  } else {
    if (sum !== "" && numberOneFromUser === "") {
      inputKeyboardSupport.value = `${sum}`;
    } else if (sum !== "") {
      inputKeyboardSupport.value = `${sum} ${currentOperator} ${inputValue}`;
    } else {
      keyboardSupport = inputValue;
      inputKeyboardSupport.value = `${numberOneFromUser} ${currentOperator} ${keyboardSupport}`;
    }
  }
};

const handleDecimal = () => {
  if (inputValue.includes(".")) {
    inputValue = inputValue;
  } else {
    if (inputValue === "") {
      inputValue = "0" + ".";
      input[0].value = inputValue;
    } else {
      inputValue = inputValue + ".";
      input[0].value = inputValue;
    }
  }
};

const handleBackspace = () => {
  if (inputValue.length > 1) {
    inputValue = inputValue.substring(0, inputValue.length - 1);
    input[0].value = inputValue;
  } else {
    inputValue = "";
    input[0].value = 0;
  }
};

const handleCalculate = () => {
  if (numberOneFromUser !== "" && currentOperator !== "") {
    if (inputValue !== "") {
      numberTwoFromUser = inputValue;
      operate(currentOperator, numberOneFromUser, numberTwoFromUser);
    } else {
      return;
    }
  }
};

const handleOperatorAdd = () => {
  handleTemplate("+");
};

const handleOperatorSubtract = () => {
  handleTemplate("-");
};

const handleOperatorMultiply = () => {
  handleTemplate("*");
};

const handleOperatorDivide = () => {
  handleTemplate("/");
};

const handleOperatorPercent = () => {
  console.log("For Planning...");
};

const handleTemplate = (operatorValue) => {
  if (currentOperator === operatorValue && inputValue === "") {
    return;
  }
  if (currentOperator === "") {
    currentOperator = operatorValue;
  } else if (currentOperator !== operatorValue) {
    if (numberTwoFromUser === "") {
      currentOperator = operatorValue;
    } else {
      numberTwoFromUser = inputValue;
      operate(currentOperator, numberOneFromUser, numberTwoFromUser);
      currentOperator = operatorValue;
      return;
    }
    // operate(currentOperator, numberOneFromUser, numberTwoFromUser);
    // currentOperator = operatorValue;
  } else if (currentOperator === operatorValue && inputValue !== "") {
    numberTwoFromUser = inputValue;
    operate(currentOperator, numberOneFromUser, numberTwoFromUser);
  }
  if (sum === "") {
    if (numberOneFromUser === "") {
      numberOneFromUser = inputValue;
    }
    inputValue = "";
  } else {
    numberOneFromUser = sum;
  }
  inputValue = "";
};

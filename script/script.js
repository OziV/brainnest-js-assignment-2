const buttons = [
  "%",
  "+/-",
  "AC",
  "⌫",
  "¹∕ₓ",
  "ₓ²",
  "²√ₓ",
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

const main = document.getElementById("main");
const section = document.createElement("section");
section.setAttribute("id", "grid-container");
section.setAttribute("class", "grid-container");
main.appendChild(section);

const gridContainer = document.getElementById("grid-container");

const setAttributes = (element, attributes) => {
  Object.keys(attributes).forEach((attr) => {
    element.setAttribute(attr, attributes[attr]);
  });
};

for (let i = 1; i < 3; i++) {
  const attributesInputs = {
    id: `input-${i}`,
    class: `input-${i}`,
    type: "text",
    value: "0",
    maxlength: "10",
    readonly: true,
  };
  const inputNew = document.createElement("input");
  setAttributes(inputNew, attributesInputs);
  gridContainer.appendChild(inputNew);
}

for (let i = 0; i < buttons.length; i++) {
  const btn = document.createElement("button");
  btn.setAttribute("id", buttons[i]);
  btn.textContent = buttons[i];
  if (buttons[i] === 0) {
    btn.setAttribute("class", "btn-zero");
  } else if (
    buttons[i] === "AC" ||
    buttons[i] === "%" ||
    buttons[i] === "⌫" ||
    buttons[i] === "+/-"
  ) {
    btn.setAttribute("class", "btn-background-color-blue");
  } else if (
    buttons[i] === "¹∕ₓ" ||
    buttons[i] === "ₓ²" ||
    buttons[i] === "²√ₓ"
  ) {
    btn.setAttribute("class", "btn-background-color-blueLight");
  } else if (
    buttons[i] === "/" ||
    buttons[i] === "*" ||
    buttons[i] === "-" ||
    buttons[i] === "+" ||
    buttons[i] === "="
  ) {
    btn.setAttribute("class", "btn-background-color-orange");
  }

  btn.addEventListener("click", () => populateValue(btn.id));
  gridContainer.appendChild(btn);
}

const input = document.getElementById("input-1");
const inputKeyboardSupport = document.getElementById("input-2");

/////////////////////////////
/* Global Variables */
/////////////////////////////

let inputValue = input.value;
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
    case "+/-":
      handleOperatorChangeSign();
      break;
    case "¹∕ₓ":
      handleOperatorFraction();
      break;
    case "ₓ²":
      handleOperatorSquare();
      break;
    case "²√ₓ":
      handleOperatorSquareRoot();
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
    input.value = sum;
    numberOneFromUser = sum;
    numberTwoFromUser = "";
    inputValue = "";
    return result;
  } else {
    sum = result;
    input.value = result;
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
    input.value = sum;
    numberOneFromUser = sum;
    numberTwoFromUser = "";
    inputValue = "";
    return result;
  } else {
    sum = result;
    input.value = result;
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
    input.value = sum;
    numberOneFromUser = sum;
    numberTwoFromUser = "";
    inputValue = "";
    return result;
  } else {
    sum = result;
    input.value = result;
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
    input.value = sum;
    numberOneFromUser = sum;
    numberTwoFromUser = "";
    inputValue = "";
    return sum;
  }
  result = numberOne / numberTwo;
  if (result.toString().length > 7) {
    sum = result.toFixed(4);
    input.value = sum;
    numberOneFromUser = sum;
    numberTwoFromUser = "";
    inputValue = "";
    return result;
  } else {
    sum = result;
    input.value = result;
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
  input.value = "0";
  inputKeyboardSupport.value = "";
  numberCurrent = "";
  numberOneFromUser = "";
  numberTwoFromUser = "";
  currentOperator = "";
  sum = "";
};

const handleChangeNumbers = (value) => {
  if (input.value.length < 10) {
    if (sum !== "" && currentOperator !== "") {
      inputValue = "";
      numberOneFromUser = sum;
      numberTwoFromUser = inputValue;
    }
    if (input.value === "0") {
      input.value = "";
      inputValue = "";
      inputValue = inputValue + value;
      input.value = inputValue;
    } else {
      inputValue = inputValue + value;
      input.value = inputValue;
    }
  } else {
    inputValue = inputValue;
    input.value = inputValue;
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
      input.value = inputValue;
    } else {
      inputValue = inputValue + ".";
      input.value = inputValue;
    }
  }
};

const handleBackspace = () => {
  if (inputValue.length > 1) {
    inputValue = inputValue.substring(0, inputValue.length - 1);
    input.value = inputValue;
  } else {
    inputValue = "";
    input.value = 0;
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

const handleOperatorChangeSign = () => {
  console.log("For Planning...");
};

const handleOperatorFraction = () => {
  console.log("For Planning...");
};

const handleOperatorSquare = () => {
  console.log("For Planning...");
};

const handleOperatorSquareRoot = () => {
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

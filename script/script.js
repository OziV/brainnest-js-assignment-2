const gridContainer = document.getElementById("grid-container");

const getYear = () => new Date().getFullYear();
const footer = document.getElementById("footer");
const link = document.createElement("a");
link.href = "https://github.com/OziV";
link.innerText = `© ${getYear()} OziV`;
footer.appendChild(link);

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
  const input = document.createElement("input");
  setAttributes(input, attributesInputs);
  gridContainer.appendChild(input);
}

const input = document.getElementById("input-1");
const inputKSupport = document.getElementById("input-2");

const buttons = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  percent: "%",
  changeSign: "+/-",
  clear: "AC",
  backspace: "⌫",
  add: "+",
  subtract: "-",
  multiply: "*",
  divide: "/",
  calculate: "=",
  decimal: ".",
  fraction: "¹∕ₓ",
  square: "ₓ²",
  squareRoot: "²√ₓ",
};

Object.keys(buttons).forEach((button) => {
  const attributesButtons = {
    id: button,
    class: `btn`,
    type: `button`,
    value: buttons[button],
  };
  const btn = document.createElement("button");
  btn.textContent = buttons[button];
  setAttributes(btn, attributesButtons);
  switch (button) {
    case "0":
      btn.setAttribute("class", "btn-zero");
      break;
    case "clear":
    case "percent":
    case "backspace":
    case "changeSign":
      btn.setAttribute("class", "btn-background-color-blue");
      break;
    case "fraction":
    case "square":
    case "squareRoot":
      btn.setAttribute("class", "btn-background-color-lightBlue");
      break;
    case "divide":
    case "multiply":
    case "subtract":
    case "add":
    case "calculate":
      btn.setAttribute("class", "btn-background-color-orange");
      break;
    case "decimal":
      btn.setAttribute("class", "btn-decimal");
      break;
    case "1":
    case "2":
    case "3":
      btn.setAttribute("class", "btn-number-row-1");
      break;
    case "4":
    case "5":
    case "6":
      btn.setAttribute("class", "btn-number-row-2");
      break;
    case "7":
    case "8":
    case "9":
      btn.setAttribute("class", "btn-number-row-3");
      break;
    default:
      btn.setAttribute("class", "btn-number");
  }

  btn.addEventListener("click", () => populateValue(btn.id));
  gridContainer.appendChild(btn);
});


/////////////////////////////
/* Global Variables */
/////////////////////////////

let inputDisplaySum = input.value;
let inputKeyboardSupport = inputKSupport.value;
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
    case "clear":
      clearAll();
      break;
    case "add":
      handleOperatorAdd();
      break;
    case "subtract":
      handleOperatorSubtract();
      break;
    case "multiply":
      handleOperatorMultiply();
      break;
    case "divide":
      handleOperatorDivide();
      break;
    case "percent":
      handleOperatorPercent();
      break;
    case "changeSign":
      handleOperatorChangeSign();
      break;
    case "fraction":
      handleOperatorFraction();
      break;
    case "square":
      handleOperatorSquare();
      break;
    case "squareRoot":
      handleOperatorSquareRoot();
      break;
    case "decimal":
      handleDecimal();
      break;
    case "backspace":
      handleBackspace();
      break;
    case "calculate":
      handleCalculate();
      break;
    default:
      handleChangeNumbers(value);
  }
  handleKeyboardSupport();

  // console.log(`numberOneFromUser: ${numberOneFromUser}`);
  // console.log(`numberTwoFromUser: ${numberTwoFromUser}`);
  // console.log(`inputDisplaySum: ${inputDisplaySum}`);
  // console.log(`inputKeyboardSupport: ${inputKeyboardSupport}`);
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
    inputDisplaySum = "";
    return result;
  } else {
    sum = result;
    input.value = result;
    numberOneFromUser = sum;
    numberTwoFromUser = "";
    inputDisplaySum = "";
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
    inputDisplaySum = "";
    return result;
  } else {
    sum = result;
    input.value = result;
    numberOneFromUser = sum;
    numberTwoFromUser = "";
    inputDisplaySum = "";
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
    inputDisplaySum = "";
    return result;
  } else {
    sum = result;
    input.value = result;
    numberOneFromUser = sum;
    numberTwoFromUser = "";
    inputDisplaySum = "";
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
    inputDisplaySum = "";
    return sum;
  }
  result = numberOne / numberTwo;
  if (result.toString().length > 7) {
    sum = result.toFixed(4);
    input.value = sum;
    numberOneFromUser = sum;
    numberTwoFromUser = "";
    inputDisplaySum = "";
    return result;
  } else {
    sum = result;
    input.value = result;
    numberOneFromUser = sum;
    numberTwoFromUser = "";
    inputDisplaySum = "";
    return result;
  }
};

/////////////////////////////
/* Handlers */
/////////////////////////////

const clearAll = () => {
  buttonValue = "";
  inputDisplaySum = "0";
  inputKeyboardSupport = "0";
  input.value = "0";
  inputKSupport.value = "0";
  numberCurrent = "";
  numberOneFromUser = "";
  numberTwoFromUser = "";
  currentOperator = "";
  sum = "";
};

const handleChangeNumbers = (value) => {
  if (input.value.length < 10) {
    if (sum !== "" && currentOperator !== "") {
      inputDisplaySum = "";
      numberOneFromUser = sum;
      numberTwoFromUser = inputDisplaySum;
    }
    if (input.value === "0") {
      input.value = "";
      inputDisplaySum = "";
      inputDisplaySum = inputDisplaySum + value;
      input.value = inputDisplaySum;
    } else {
      inputDisplaySum = inputDisplaySum + value;
      input.value = inputDisplaySum;
    }
  } else {
    inputDisplaySum = inputDisplaySum;
    input.value = inputDisplaySum;
  }
};

const handleKeyboardSupport = () => {
  if (currentOperator === "") {
    inputKeyboardSupport = inputDisplaySum;
    inputKSupport.value = inputKeyboardSupport;
  } else {
    if (sum !== "" && numberOneFromUser === "") {
      inputKSupport.value = `${sum}`;
    } else if (sum !== "") {
      inputKSupport.value = `${sum} ${currentOperator} ${inputDisplaySum}`;
    } else {
      inputKeyboardSupport = inputDisplaySum;
      inputKSupport.value = `${numberOneFromUser} ${currentOperator} ${inputKeyboardSupport}`;
    }
  }
};

const handleDecimal = () => {
  if (inputDisplaySum.includes(".")) {
    inputDisplaySum = inputDisplaySum;
  } else {
    if (inputDisplaySum === "") {
      inputDisplaySum = "0" + ".";
      input.value = inputDisplaySum;
    } else {
      inputDisplaySum = inputDisplaySum + ".";
      input.value = inputDisplaySum;
    }
  }
};

const handleBackspace = () => {
  if (inputDisplaySum.length > 1) {
    inputDisplaySum = inputDisplaySum.substring(0, inputDisplaySum.length - 1);
    input.value = inputDisplaySum;
  } else {
    inputDisplaySum = "";
    input.value = 0;
  }
};

const handleCalculate = () => {
  if (numberOneFromUser !== "" && currentOperator !== "") {
    if (inputDisplaySum !== "") {
      numberTwoFromUser = inputDisplaySum;
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
  if (currentOperator === operatorValue && inputDisplaySum === "") {
    return;
  }
  if (currentOperator === "") {
    currentOperator = operatorValue;
  } else if (currentOperator !== operatorValue) {
    if (numberTwoFromUser === "") {
      currentOperator = operatorValue;
    } else {
      numberTwoFromUser = inputDisplaySum;
      operate(currentOperator, numberOneFromUser, numberTwoFromUser);
      currentOperator = operatorValue;
      return;
    }
    // operate(currentOperator, numberOneFromUser, numberTwoFromUser);
    // currentOperator = operatorValue;
  } else if (currentOperator === operatorValue && inputDisplaySum !== "") {
    numberTwoFromUser = inputDisplaySum;
    operate(currentOperator, numberOneFromUser, numberTwoFromUser);
  }
  if (sum === "") {
    if (numberOneFromUser === "") {
      numberOneFromUser = inputDisplaySum;
    }
    inputDisplaySum = "";
  } else {
    numberOneFromUser = sum;
  }
  inputDisplaySum = "";
};

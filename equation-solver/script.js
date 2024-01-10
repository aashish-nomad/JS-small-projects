const form = document.querySelector('#equation-form');
const inputField = document.querySelector('#equation');
const resultField = document.querySelector('#results');

const MUL_DIV_REGEX = /(?<operand1>\S+)\s*(?<operator>[\*\/])\s*(?<operand2>\S+)/;
const ADD_SUB_REGEX = /(?<operand1>\S+)\s*(?<operator>(?<!e)[\+\-])\s*(?<operand2>\S+)/;


form.addEventListener('submit', (e) => {
  e.preventDefault();

  const result = parse(inputField.value);
  resultField.textContent = result;
});

function parse(equation) {

  if( MUL_DIV_REGEX.test(equation) ) {
    const nextStep = MUL_DIV_REGEX.exec(equation);
    const result = handleMath(nextStep.groups);
    const newEquation = equation.replace(MUL_DIV_REGEX, result);
    return parse(newEquation);
  } else if (ADD_SUB_REGEX.test(equation)) {
    const nextStep = ADD_SUB_REGEX.exec(equation);
    const result = handleMath(nextStep.groups);
    const newEquation = equation.replace(ADD_SUB_REGEX, result);
    return parse(newEquation);
  } else {
    return parseFloat(equation);
  }
}

function handleMath({operand1, operand2, operator}){
  switch (operator) {
    case '*':
      return parseFloat(operand1) * parseFloat(operand2);
    case '/':
      return parseFloat(operand1) / parseFloat(operand2);
    case '+':
      return parseFloat(operand1) + parseFloat(operand2);
    case '-':
      return parseFloat(operand1) - parseFloat(operand2);
  }
}
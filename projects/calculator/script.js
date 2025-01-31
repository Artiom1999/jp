let firstNumber = 0;
let secondNumber = 0;
let action = '+';
let answer = 0;

let input = document.getElementById('calc-input');
let calculation = document.getElementById('calculation');

let history = [];

function onNumberClick(number) {
  input.value += number;
}

function onActionClick(clickedAction) {
  input.value += ' ' + clickedAction + ' ';
  action = clickedAction;
}

function onEqualClick() {
  // 5 x 2
  let splitted = input.value.split(' ');
  // ['5', 'x', '2']
  // 5
  firstNumber = parseInt(splitted[0]);
  // 'x'
  action = splitted[1];
  // 2
  secondNumber = parseInt(splitted[2]);
  // Iskvieciu skaiciavimo funkcija
  calculateAnswer();
  input.value = answer;

  calculation.innerHTML = `${firstNumber} ${action}
  ${secondNumber}`;

  addToHistory();
}

function calculateAnswer() {
  // action = "+" "-" "*" "/"
  switch (action) {
    case '+':
      answer = firstNumber + secondNumber;
      break;
    case '-':
      answer = firstNumber - secondNumber;
      break;
    case 'x':
      answer = firstNumber * secondNumber;
      break;
    case '/':
      answer = firstNumber / secondNumber;
      break;
  }
}

function onClearCalculator() {
  firstNumber = 0;
  secondNumber = 0;
  action = '+';
  answer = 0;
  input.value = '';
  calculation.innerHTML = '';
}

function addToHistory() {
  let historyItem = {
    firstNumber,
    action,
    secondNumber,
    answer,
  };
  history.push(historyItem);
}

document.getElementById('show-history').onclick = function () {
  let formatted = history.map(
    (x) => `<p>${x.firstNumber} ${x.action} ${x.secondNumber} = ${x.answer}</p>`
  );
  let historyBlock = document.querySelector('.calculator .history-items');
  historyBlock.innerHTML = formatted.join('');
};

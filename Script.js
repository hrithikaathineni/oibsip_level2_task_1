const buttons = document.querySelectorAll('#calculator input[type="button"]');
const resultField = document.getElementById('result');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.value;
    switch (value) {
      case 'C':
        clearResult();
        break;
      case '=':
        calculateResult();
        break;
      case '√':
        appendToResult('Math.sqrt(');
        break;
      case 'π':
        appendToResult('Math.PI');
        break;
      case 'e':
        appendToResult('Math.E');
        break;
      case 'ln':
        appendToResult('Math.log(');
        break;
      default:
        appendToResult(value);
        break;
    }
  });
});

function clearResult() {
  resultField.value = '';
}

function appendToResult(value) {
  resultField.value += value;
}

function calculateResult() {
  try {
    const result = eval(resultField.value);
    resultField.value = result.toLocaleString();
  } catch (error) {
    resultField.value = 'Error';
  }
}
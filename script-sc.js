function simpleCalculator() {
  let firstValue = parseInt(prompt(1));
  let operator = prompt("+");
  let secondValue = parseInt(prompt(2));

  switch (operator) {
    case "+":
      console.log(firstValue + secondValue);
      break;
    case "-":
      console.log(firstValue - secondValue);
      break;
    case "/":
      console.log(firstValue / secondValue);
      break;
    default:
      console.log("Opérateur non valide");
  }
}

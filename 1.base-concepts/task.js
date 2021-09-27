'use strict'

function solveEquation(a, b, c) {
  let arr;
  let D = b ** 2 - (4 * a * c);
  let x1;
	let x2;

  if (D === 0) {
    x1 = (- b / (2 * a));
    arr = [x1];
  } else if (D > 0) {
    x1 = ((-b + Math.sqrt(D)) / (2 * a));
    x2 = ((-b - Math.sqrt(D)) / (2 * a));
    arr = [x1, x2];
  } else {
    arr = [];
  };

  return arr;
};

function calculateTotalMortgage(percent, contribution, amount, date) {
  let arr = [{name: "Процентная ставка", value: percent},
    {name: "Начальный взнос", value: contribution},
    {name: "Общая стоимость", value: amount}];

    for (let i = 0; i < arr.length; i++) {
	    if (isNaN(arr[i].value)) {
		    return `Параметр "${arr[i].name}" содержит неправильное значение "${arr[i].value}"`;
	    };
    };

    let sum = amount - contribution;
    let month = (date.getFullYear() - new Date().getFullYear()) * 12 + (date.getMonth() - new Date().getMonth());
    let interestRate = (percent / 100) / 12;
    let monthlyPayment = (sum * (interestRate + interestRate / (((1 + interestRate) ** month) - 1)));
    let totalAmount = parseFloat((monthlyPayment * month).toFixed(2));

    return totalAmount;
};

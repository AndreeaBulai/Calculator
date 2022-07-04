let digits = document.querySelectorAll('.digits');
let operators = document.querySelectorAll('.operators');
let displayValue = document.getElementById('display-value');
let equals = document.getElementById('equals');
let clear = document.getElementById('clear');
const calculator = {
	firstNumber: null,
	operator: null,
	secondNumber: null,
}
const mathSigns = {
	'+': (x, y) => Number(x) + Number(y),
	'-': (x, y) => Number(x) - Number(y),
	'x': (x, y) => Number(x) * Number(y),
	'/': (x, y) => Number(x) / Number(y),
}

console.log(digits);

digits.forEach( (digit) => {
	digit.addEventListener("click", (event) => digitClick(event));
})

function digitClick(event){
	if(calculator.operator) {
	   	calculator.secondNumber = event.target.textContent;
		return displayValue.innerHTML += event.target.textContent;	
	} else 
	if(!calculator.firstNumber){
		calculator.firstNumber = event.target.textContent;
		return displayValue.innerHTML = event.target.textContent;
	} else {
		calculator.firstNumber += event.target.textContent;
		return displayValue.innerHTML += event.target.textContent;
	}
}

operators.forEach( (operator) => {
	operator.addEventListener("click", (event) => operatorClick(event))
})

function operatorClick(event) {
	if(!calculator.operator){
	    calculator.operator = event.target.textContent;
	return displayValue.innerHTML += calculator.operator;
    }else{ 
	   let calculate = mathSigns[calculator.operator];
	   let result = calculate(calculator.firstNumber, calculator.secondNumber);
	   console.log(calculator.firstNumber, calculator.secondNumber);
	   calculator.firstNumber = result;
	   displayValue.innerHTML = result + calculator.operator;
	   calculator.secondNumber = null;
}
}

equals.addEventListener("click", () => equalsClick());

function equalsClick() {
	let calculate = mathSigns[calculator.operator];
	let result = calculate(calculator.firstNumber, calculator.secondNumber);
	displayValue.innerHTML = result;
	claculator.firstNumber = result;
	calculator.secondNumber = null;
	calculator.operator = null;
}

clear.addEventListener("click" , () => clearDisplay());

function clearDisplay(){
	displayValue.innerHTML = 0;
	calculator.firstNumber = null;
	calculator.secondNumber = null;
	calculator.operator = null;
}	

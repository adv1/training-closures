$(document).ready(function() {
	// Simple example
	var i = 5;
	function exampleFunc() {
		return i += 1;
	};
	//console.log('Simple example');
	//console.log(exampleFunc());
	//console.log('_______');

	// counter ();
	function makeCounter() {
		var currentCount = 1;
			return function() {
				return currentCount++;
			};
	};

	var counter = makeCounter();
	//console.log('counter ');
	//console.log(counter());
	//console.log(counter()); 
	//console.log(counter());
	//console.log('_______');	

	// sum()
	//example 1
	function sumTwoNumbers(number)  {
		(arguments.length === 0) ? number = 0 : number;
		return function(number2) {
				(arguments.length === 0) ? number2 = 0 : number2;
				return number + number2;
			};
	};
	//console.log('sumTwoNumbers(a)(b) ');
	//console.log( sumTwoNumbers(2)(3));
	//console.log( sumTwoNumbers()());
	//console.log('_______');	

	//example 2
	function sumNumbersNotLimited(numberOne)  {
		//(arguments.length === 0) ? numberOne = 0 : numberOne;
		var currentNumber = numberOne;
		
		function sum(numberTwo) {
			//(arguments.length === 0) ? numberTwo = 0 : numberTwo;
			console.log('currentNumber = ' + currentNumber);	
			 currentNumber += numberTwo;
				return sum
			};
			return sum
	};
	console.log('sumNumbersNotLimited(a)(b)(c)(d)...(n) ');
	//console.log( sumNumbersNotLimited()(23));
	console.log( sumNumbersNotLimited(2)(22));
	console.log('_______');	

	//example 3
	function sum(a) {
		var currentSum = a;
		function ins(b) {
			currentSum +=b;
			return ins;
		};
		ins.toString = currentSum;   
		return ins;
	};
	//console.log('sum ');
	//console.log( sum(1)(2));
	//console.log( sum(1)(2)(3)(4));
	//console.log( sum(1)(2)(3)(4)+5 );
	//console.log('_______');	
});
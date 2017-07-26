$(document).ready(function() {
	var i = 5;
	function exampleFunc() {
		return i += 1;
	};
	console.log('Simple example');
	console.log(exampleFunc());
	console.log('_______');


	function makeCounter() {
		var currentCount = 1;
			return function() {
				return currentCount++;
			};
	};

	var counter = makeCounter();
	console.log('counter ');
	console.log(counter());
	console.log(counter()); 
	console.log(counter());
	console.log('_______');


	function sumTwoNumbers(number)  {
		(arguments.length === 0) ? number = 0 : number;
		return function(number2) {
				(arguments.length === 0) ? number2 = 0 : number2;
				return number + number2;
			};
	};
	console.log('sumTwoNumbers(a)(b) ');
	console.log( sumTwoNumbers(2)(3));
	console.log( sumTwoNumbers()());
	console.log('_______');	


	function sumNumbersNotLimited(a)  {
		var result = a;
		return function sum(a) {
			if (typeof a === 'undefined') {
				return result;
			} else {
				result += a;
				return sum
			};
		};
	};
	console.log('sumNumbersNotLimited(a)(b)(c)(d)...(n)() ');
	console.log('and');
	console.log('sumNumbersNotLimited(a)(b)(c)(d)...(n)() + 5 ');
	console.log( sumNumbersNotLimited(2)(-5)(10)(11)());
	console.log( sumNumbersNotLimited(1)(23)() + 5);
	console.log('_______');	
});
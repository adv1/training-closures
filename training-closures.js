$(document).ready(function() {
	// Simple example
	function exampleFunc() {
		var i = 5;
		function exampleFuncInside() {
			return i++;
		};
		return exampleFuncInside()
	};
	console.log('Simple example');
	console.log(exampleFunc());
	console.log('_______');

	// counter ();
	function makeCounter() {
		var currentCount = 1;
			return function counter() {
				return currentCount++;
			};
	};

	var counter = makeCounter();
	console.log('counter ');
	console.log(counter());
	console.log(counter()); 
	console.log(counter());
	console.log('_______');	

	// sum()
	function sum(a) {
		var currentSum = a;
		function ins(b) {
			currentSum +=b;
			return ins;
		};
		ins.toString = function() { return currentSum };   
		return ins;
	};
	console.log('sum ');
	console.log( +sum(1)(2)(3)(4)+5 );
	console.log('_______');	
});
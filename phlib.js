
/**
 * Convert Fahrenheit / Celsius
 
	// Examples
	celsiusToFahrenheit(15);    // 59
	celsiusToFahrenheit(0);     // 32
	celsiusToFahrenheit(-20);   // -4
	fahrenheitToCelsius(59);    // 15
	fahrenheitToCelsius(32);    // 0
 */
module.exports.celsiusToFahrenheit = function (celsius) {
	return celsius * 9/5 + 32;
}
module.exports.fahrenheitToCelsius = function(fahrenheit) {
	return (fahrenheit - 32) * 5/9;
}



/**
 * Get average value of arguments
 
	// Examples
	average(1, 2, 3, 4);	// Result: 2.5
 */
module.exports.average = function (...args) {
	return args.reduce((a, b) => a + b) / args.length;
}



/**
 * Truncate a number to a fixed decimal point
 
	// Examples
	toFixed(25.198726354, 1);       // 25.1
	toFixed(25.198726354, 2);       // 25.19
	toFixed(25.198726354, 3);       // 25.198
	toFixed(25.198726354, 4);       // 25.1987
	toFixed(25.198726354, 5);       // 25.19872
	toFixed(25.198726354, 6);       // 25.198726
 */
module.exports.toFixed = function (n, fixed) {
	returm ~~(Math.pow(10, fixed) * n) / Math.pow(10, fixed);
}


/**
  generate a random boolean - 50/50 chance of true/false
 */
module.exports.randomBoolean = function () {
	return Math.random() >= 0.5;
}



/**
  generate a random coin toss - 50/50 chance of heads/tails
 */
module.exports.coinToss = function () {
	return Math.random() >= 0.5 ? 'heads' : 'tails';
}


/**
 * Check if the provided day is a weekday
 
	// Examples
	console.log(isWeekday(new Date(2021, 0, 11)));  	// Result: true (Monday)
	console.log(isWeekday(new Date(2021, 0, 10)));		// Result: false (Sunday)
 */
module.exports.isWeekday = function (date) {
	return date.getDay() % 6 !== 0;
}



/** 
 * Reverse a String
 
	// Example
	reverse('hello world');      // Result: 'dlrow olleh'
 */
module.exports.reverse = function (str) {
	return str.split('').reverse().join('');
}



/**
 * Check if a number is even or odd
 
	// Examples
	console.log(isEven(2));	// Result: true
	console.log(isEven(3));	// Result: false
 */
module.exports.isEven = function (num) {
	return num % 2 === 0;
}


/**
 * Get the time from a date
 
	// Examples
	console.log(timeFromDate(new Date(2021, 0, 10, 17, 30, 0)));   // Result: "17:30:00"
	console.log(timeFromDate(new Date()));   // Result: will log the current time
 */
module.exports.timeFromDate = function (date) {
	return date.toTimeString().slice(0, 8);
}



/** 
 * convert characters in the string to HTML entities
 *
 * @param {string} str String that should be displayed in HTML
 * @returns {string} A string with ENTITY representations of < and >
 */
//const HTMLize = str => str.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/&/g,"&amp;");
module.exports.HTMLize = function (str) {
	return str.replace(/<|>|&/g, function (matched) {
		switch (matched) {
			case '<':return '&lt;'; break
			case '>':return '&gt;'; break
			case '&':return '&amp;'; break
		}
	})
}


/**
 * Convert Fahrenheit / Celsius
 
	// Examples
	celsiusToFahrenheit(15);    // 59
	celsiusToFahrenheit(0);     // 32
	celsiusToFahrenheit(-20);   // -4
	fahrenheitToCelsius(59);    // 15
	fahrenheitToCelsius(32);    // 0
 */
const celsiusToFahrenheit = (celsius) => celsius * 9/5 + 32;
const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;



/**
 * Get average value of arguments
 
	// Examples
	average(1, 2, 3, 4);	// Result: 2.5
 */
const average = (...args) => args.reduce((a, b) => a + b) / args.length;



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
const toFixed = (n, fixed) => ~~(Math.pow(10, fixed) * n) / Math.pow(10, fixed);



/**
  generate a random boolean - 50/50 chance of true/false
 */
const randomBoolean = () => Math.random() >= 0.5;



/**
  generate a random coin toss - 50/50 chance of heads/tails
 */
const coinToss = () => Math.random() >= 0.5 ? 'heads' : 'tails';



/**
 * Check if the provided day is a weekday
 
	// Examples
	console.log(isWeekday(new Date(2021, 0, 11)));  	// Result: true (Monday)
	console.log(isWeekday(new Date(2021, 0, 10)));		// Result: false (Sunday)
 */
const isWeekday = (date) => date.getDay() % 6 !== 0;



/** 
 * Reverse a String
 
	// Example
	reverse('hello world');      // Result: 'dlrow olleh'
 */
const reverse = str => str.split('').reverse().join('');


/**
 * Check if a number is even or odd
 
	// Examples
	console.log(isEven(2));	// Result: true
	console.log(isEven(3));	// Result: false
 */
const isEven = num => num % 2 === 0;


/**
 * Get the time from a date
 
	// Examples
	console.log(timeFromDate(new Date(2021, 0, 10, 17, 30, 0)));   // Result: "17:30:00"
	console.log(timeFromDate(new Date()));   // Result: will log the current time
 */
const timeFromDate = date => date.toTimeString().slice(0, 8);



/**
 * Convert string characters into HTML entities
 
 */
const HTMLize = str => str.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/&/g,"&amp;");

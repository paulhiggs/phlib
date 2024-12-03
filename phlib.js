/*
 * formatters
 */
//String.prototype.quote=function(using='"') {return using+this+using}
//String.prototype.elementize=function() {return '<'+this+'>'}
//String.prototype.attribute=function(elemName="") {return elemName+'@'+this}

Object.assign(String.prototype, {
	quote(using = '"') {
		return `${using}${this}${using}`;
	},
});
export var quote = (str) => str.quote();

Object.assign(String.prototype, {
	elementize() {
		return `<${this}>`;
	},
});
export var elementize = (str) => str.elementize();

Object.assign(String.prototype, {
	attribute(elemName = "") {
		return `${elemName}@${this}`;
	},
});
export var attribute = (attr, elem = "") => attr.attribute(elem);

/**
 * Convert Fahrenheit / Celsius
 
	// Examples
	celsiusToFahrenheit(15);    // 59
	celsiusToFahrenheit(0);     // 32
	celsiusToFahrenheit(-20);   // -4
	fahrenheitToCelsius(59);    // 15
	fahrenheitToCelsius(32);    // 0
 */
export var celsiusToFahrenheit = (celsius) => (celsius * 9) / 5 + 32;
export var fahrenheitToCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;

/**
 * Get average value of arguments
 
	// Examples
	average(1, 2, 3, 4);	// Result: 2.5
 */
export var average = (...args) => args.reduce((a, b) => a + b) / args.length;

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
export var toFixed = (n, fixed) => ~~(Math.pow(10, fixed) * n) / Math.pow(10, fixed);

/**
 * generate a random number within a designated range
 *
 * @param {Number} min - the lower bound for the random number
 * @param {Number} max - the upper bound for the random number
 * @returns {Number} a random number betwee min and max
 */
export var randomNumberInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

/**
  generate a random boolean - 50/50 chance of true/false
  *
  * @returns {Boolean} random true/false
 */
export var randomBoolean = () => Math.random() >= 0.5;

/**
  generate a random coin toss - 50/50 chance of heads/tails
 *
 * @returns {String} random 'heads' or 'tails'
 */
export var coinToss = () => (randomBoolean() ? "heads" : "tails");

/**
 * Check if the provided day is a weekday
 * @param {Date} date the date to check
 * @returns {Boolean} true if the date is Monday-Friday else false
 * @example console.log(isWeekday(new Date(2021, 0, 11)));  --> Result: true (Monday)
 * @example console.log(isWeekday(new Date(2021, 0, 10)));	--> Result: false (Sunday)
 */
export var isWeekday = (date) => date.getDay() % 6 !== 0;

/** 
 * Reverse a String
 
 // const reverseString = string => [...string].reverse().join('');
	// Example
 * @example	reverse('hello world');  --> Result: 'dlrow olleh'
 */
Object.assign(String.prototype, {
	reverse() {
		return this.split("").reverse().join("");
	},
});
export var reverse = (str) => str.reverse();

/**
 * Check if a number is even or odd
 
	// Examples
	console.log(isEven(2));	// Result: true
	console.log(isEven(3));	// Result: false
 */
export var isEven = (num) => num % 2 === 0;

/**
 * Get the time from a date
 
	// Examples
	console.log(timeFromDate(new Date(2021, 0, 10, 17, 30, 0)));   // Result: "17:30:00"
	console.log(timeFromDate(new Date()));   // Result: will log the current time
 */
export var timeFromDate = (date) => date.toTimeString().slice(0, 8);

/**
 * Returns the number of days betweeen two dates
 * @param {Date} dateA - the first date
 * @param {Date} dateB the second date
 * @returns {Integer} the number od calendar days between the two given dates
 */
export var daysBetweenDates = (dateA, dateB) => Math.floor(Math.abs(dateA.getTime() - dateB.getTime()) / (3600 * 24 * 1000));

/**
 * convert characters in the string to HTML entities
 *
 * @param {string} str String that should be displayed in HTML
 * @returns {string} A string with ENTITY representations of < and >
 */
export var HTMLize = (str) =>
	datatypeIs(str, "string") ? str.replace(/[&<>"'\-]/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "-": "&#8209;" }[m])) : str;

/**
 * calculate the factorial of a number
	// example
	// factorialOfNumber(4); --> 24
	// factorialOfNumber(8); --> 40320
 */
export var factorialOfNumber = (number) =>
	number < 0
		? (() => {
				throw new TypeError("No negative numbers please");
		  })()
		: number <= 1
		? 1
		: number * factorialOfNumber(number - 1);

/**
 * sum the numbers in an array
 // examples 
 // sumOfNumbers(5,6,7,8,9,10); --> 45
 // sumOfNumbers(...[1,2,3,4,5,6,7,8,9,10]); --> 50
 */
export var sumOfNumbers = (...array) => [...array].reduce((accumulator, currentValue) => accumulator + currentValue, 0);

/**
 * return the type of the argument passed
 * @param {any} arg the argument whose type we are interested in
 * @param {string} requiredType  the desired tyoe
 * @returns {boolean or string} the type of the argument or a boolean if the type matches the requiredType
 */
export function datatypeIs(arg, requiredType = null) {
	if (!arg)
		// ensure null is not identified as an object
		return undefined;
	if (Array.isArray(arg)) return requiredType ? requiredType == "array" : "array";
	let typ = typeof arg;
	return requiredType ? requiredType == typ : typ;
}

/**
 * Check if an object is empty
 * 
 * @param {*} objectName the object to check for member attributes 
 * @returns true if the object is empty
 */
export const isObjectEmpty = (objectName) => {
  return (
    objectName &&
    Object.keys(objectName).length === 0 &&
    objectName.constructor === Object
  );
};

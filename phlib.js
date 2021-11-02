
/*
 * formatters
 */
//String.prototype.quote=function(using='"') {return using+this+using}
//String.prototype.elementize=function() {return '<'+this+'>'}
//String.prototype.attribute=function(elemName="") {return elemName+'@'+this}


Object.assign(String.prototype, {
	quote(using='"') {
		return `${using}${this}${using}`;
	}
});
export function quote(str) { return str.quote(); }

Object.assign(String.prototype, {
	elementize() {
		return `<${this}>`;
	}
});
export function elementize(str) { return str.elementize(); }

Object.assign(String.prototype, {
	attribute(elemName="") {
		return `${elemName}@${this}`;
	}
});
export function attribute(attr, elem="") { return attr.attribute(elem); }


/**
 * Convert Fahrenheit / Celsius
 
	// Examples
	celsiusToFahrenheit(15);    // 59
	celsiusToFahrenheit(0);     // 32
	celsiusToFahrenheit(-20);   // -4
	fahrenheitToCelsius(59);    // 15
	fahrenheitToCelsius(32);    // 0
 */
export function celsiusToFahrenheit(celsius) { return celsius * 9/5 + 32; }
export function fahrenheitToCelsius(fahrenheit) { return (fahrenheit - 32) * 5/9; }


/**
 * Get average value of arguments
 
	// Examples
	average(1, 2, 3, 4);	// Result: 2.5
 */
export function average(...args) { return args.reduce((a, b) => a + b) / args.length; }


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
export function toFixed(n, fixed) { return ~~(Math.pow(10, fixed) * n) / Math.pow(10, fixed); }


/**
 * generate a random number within a designated range
 * 
 * @param {Number} min - the lower bound for the random number
 * @param {Number} max - the upper bound for the random number
 * @returns {Number} a random number betwee min and max
 */
export function randomNumberInRange(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }


/**
  generate a random boolean - 50/50 chance of true/false
  *
  * @returns {Boolean} random true/false
 */
export function randomBoolean() { return Math.random() >= 0.5; }


/**
  generate a random coin toss - 50/50 chance of heads/tails
 *
 * @returns {String} random 'heads' or 'tails'
 */
export function coinToss()  { return Math.random() >= 0.5 ? 'heads' : 'tails'; }


/**
 * Check if the provided day is a weekday
 * @param {Date} date the date to check
 * @returns {Boolean} true if the date is Monday-Friday else false
 * @example console.log(isWeekday(new Date(2021, 0, 11)));  --> Result: true (Monday)
 * @example console.log(isWeekday(new Date(2021, 0, 10)));	--> Result: false (Sunday)
 */
export function isWeekday(date) { return date.getDay() % 6 !== 0; }


/** 
 * Reverse a String
 
 // const reverseString = string => [...string].reverse().join('');
	// Example
 * @example	reverse('hello world');  --> Result: 'dlrow olleh'
 */
Object.assign(String.prototype, {
	reverse() {
		return this.split('').reverse().join('');
	}
});
export function reverse(str) { return str.reverse(); }


/**
 * Check if a number is even or odd
 
	// Examples
	console.log(isEven(2));	// Result: true
	console.log(isEven(3));	// Result: false
 */
export function isEven(num) { return num % 2 === 0; }
 

/**
 * Get the time from a date
 
	// Examples
	console.log(timeFromDate(new Date(2021, 0, 10, 17, 30, 0)));   // Result: "17:30:00"
	console.log(timeFromDate(new Date()));   // Result: will log the current time
 */
export function timeFromDate(date) { return date.toTimeString().slice(0, 8); }


/**
 * Returns the number of days betweeen two dates
 * @param {Date} dateA - the first date
 * @param {Date} dateB the second date
 * @returns {Integer} the number od calendar days between the two given dates
 */
export function daysBetweenDates(dateA, dateB) { return Math.floor(Math.abs(dateA.getTime() - dateB.getTime()) / (3600 * 24 * 1000)); }


/** 
 * convert characters in the string to HTML entities
 *
 * @param {string} str String that should be displayed in HTML
 * @returns {string} A string with ENTITY representations of < and >
 */
export function HTMLize (str) {
	if (!str) return '';
	if (typeof str != "string") return `${typeof str}`;
	return str.replace(/<|>|&|\-|"/g, function (matched) {
		switch (matched) {
			case '<':return '&lt;'; 
			case '>':return '&gt;'; 
			case '&':return '&amp;'; 
			case '-':return '&#8209;'; 
			case '"':return '&quot;';
		}
	});
}

/**
 * calculate the factorial of a number
	// example
	// factorialOfNumber(4); --> 24
	// factorialOfNumber(8); --> 40320
 */
export function factorialOfNumber (number) {
  return number < 0 ? (() => {
	  throw new TypeError('No negative numbers please');
      })() :
    number <= 1 ? 1 : number * factorialOfNumber(number-1);
}


/**
 * sum the numbers in an array
 
 // examples 
 // sumOfNumbers(5,6,7,8,9,10); --> 45
 // sumOfNumbers(...[1,2,3,4,5,6,7,8,9,10]); --> 50
 */
export function sumOfNumbers(...array) { return [...array].reduce((accumulator,currentValue) => accumulator + currentValue,0); }


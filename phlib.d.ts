/**
 * return the type of the argument passed
 * @param {any} arg the argument whose type we are interested in
 * @param {String} requiredType  the desired tyoe
 * @returns {boolean or string} the type of the argument or a boolean if the type matches the requiredType
 */
export function datatypeIs(arg: any, requiredType?: string): boolean | string;
export function quote(str: string): string;
export function elementize(str: string): string;
export function attribute(attr: string, elem?: string): string;
export function celsiusToFahrenheit(celsius: number): number;
export function fahrenheitToCelsius(fahrenheit: number): number;
export function average(...args: any[]): number;
export function toFixed(n: number, fixed: number): number;
export function randomNumberInRange(min: number, max: number): number;
export function randomBoolean(): boolean;
export function coinToss(): string;
export function isWeekday(date: Date): boolean;
export function reverse(str: string): string;
export function isEven(num: number): boolean;
export function timeFromDate(date: any): any;
export function daysBetweenDates(dateA: Date, dateB: Date): number;
export function HTMLize(str: string): string;
export function factorialOfNumber(number: number): number;
export function sumOfNumbers(...array: any[]): any;
export function isObjectEmpty(objectName: any): boolean;
//# sourceMappingURL=phlib.d.ts.map
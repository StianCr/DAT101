"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const x = 2 + 3 * (2-4) * 6;
printOut ("2 + 3(2 - 4) 6 =" + x.toString());
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
/* convert 25 metres and 34 centimeters to inches. An inch is 25.4 millimeters/inch */
/* 
  (25.4 / 1000) * 25.34m
  */ 
 const millInInch = 25.4; 
 const millInMeters = 1000;
const metres = 25.34;
const answer = (metres * millInMeters) / millInInch;

printOut("answer = " + answer.toFixed());

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
/* Convert 3 days, 12 hours, 14 minutes, and 45 seconds to minutes
*/ 
const secondsInMinutes = 60;
const minutesInHour = 60;
const hoursInDay = 24;
const part2_Answer = 
(3 * hoursInDay * minutesInHour) + 
(12 * minutesInHour) +
14 + 
(34 / secondsInMinutes);
printOut("part2_Answer = " + part2_Answer.toString());
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
/* Convert 6,322.52 minutes to days, hours, minutes, and seconds.
*/
const numberOfMinutes = 6322.52;
let part4_Calc = numberOfMinutes / (60*24);
const part4_days = Math.floor(part4_Calc);
printOut("Days = " + part4_days)

part4_Calc = part4_Calc - part4_days
part4_Calc = part4_Calc * hoursInDay;
const part4_Hours = Math.floor(part4_Calc);
printOut("hours =" + part4_Hours);

part4_Calc = part4_Calc - part4_Hours;
part4_Calc = part4_Calc * minutesInHour;
const part4_Minutes = Math.floor(part4_Calc);
printOut("Minutes = " + part4_Minutes);

part4_Calc = part4_Calc - part4_Minutes
part4_Calc = part4_Calc * secondsInMinutes;
const part4_Seconds = Math.floor(part4_Calc);
printOut("Seconds = " + part4_Seconds);
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
/* Convert 54 dollars to Norwegian kroner, and print the price for both:
NOK -> USD and USD -> NOK.
Use 76 NOK = 8.6 USD as the exchange rate.
The answer must be in whole "kroner" and "dollars"
*/
const NOK = 76 / 8.6;
const USD = 8.6 / 76;
let amountUSD = 54;
const amountNOK = Math.round(amountUSD * NOK);
printOut( amountUSD + "dollar is " +amountNOK + "kroner" );
amountUSD = amountNOK * USD;
printOut( amountNOK + " kroner is" + amountUSD + " dollars");


printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
/* Create a variable that contains the following text:
"There is much between heaven and earth that we do not understand."
*/
let text = "There is much between heaven and earth that we do not understand"
printOut(text.trim().length.toString());
printOut( text.charAt(19));
printOut(text.substring(35, 44));
printOut(text.indexOf("earth").toString());


printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let a = "a";
let b = "b";
printOut("is 5 greater than 3"); // true
printOut('True');
printOut("is 7 greater or equal to 7");
printOut("True");
printOut("is 'a' greater than 'b'");
if (a > b) {
  printOut("true");
} else {
  printOut("false");
}

printOut("is '1' less than 'a'?")
if (1>a){
  printOut("true");
}   else{
  printOut("false");
}
printOut("Is '2500' less than 'abcd'?")

let abcd = "abcd";

if (2500 < abcd) {
    printOut("true");
}   else{
    printOut("false");
}

printOut("'arne' is not equal to 'thomas'.")

let arne = "arne";
let thomas = "thomas";

if (arne = thomas) {
    printOut("true");
}   else{
    printOut("false");
}

printOut("(2 equals 5) is this statement true?");
printOut("false");
printOut("'abcd' is greater than 'bcd'?");

let bcd = "bcd";

if (abcd > bcd) {
    printOut("true");
}   else{
    printOut("false");
}


printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let numberAsText = "254";
let number_254 = parseInt(numberAsText, 10);
printOut(number_254.toString());

let _57_23 = "57.23";
let number_57_23 = parseFloat(_57_23, 10);
printOut(number_57_23.toString());

let _25_kroner = "25 kroner";
let number_25_kroner = parseInt(_25_kroner,10);
printOut(number_25_kroner.toString());

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let r = getRandomInt(1, 360);
printOut(r.toString());


printOut(newLine);


printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let totalDays = 131;

let weeks = Math.ceil(totalDays / 7);
let days = totalDays % 7;

printOut(`${totalDays} days is equal to ${weeks} weeks and ${days} days.`);


printOut(newLine);

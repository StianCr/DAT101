"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const x = 2 + 3 * (2-4) * 6;
printOut ("2 + 3(2 - 4) 6 =" + x.tostring);
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

printOut("answer = " + answer.toString());

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
let part4_Calc = numberOfMinutes / (60 * 24);
const part4_Hours = Math.floor(part4_Calc);
printOut ("Hours = " + part4_Hours);

part4_Calc = part4_Calc - part4_Hours;
printOut("part4_Calc = " + part4_Calc);

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
printOut("5 er større enn 3 (5 > 3)"); // true
printOut("7 er like stor som 7 ( 7 == 7");


printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let text1 = "254";
printOut(text1);

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let r = Math.floor(math.random()) * 360 + 1;
printOut(r);
printOut(newLine);


printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let totaldays = 131;
let weeks = math.floor(totaldays / 7);
let days = totaldays % 7;
printOut(`131 days is equal to ${weeks} weeks and ${days} days.`);

printOut(newLine);

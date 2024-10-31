"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/

let wakeUpTime = 7
let canCatchBus
const busTime = 8;

if (wakeUpTime >=busTime) {
  printOut("You woke up at " + wakeUpTime + " o'clock. You can't catch the bus!");
}
 if (wakeUpTime < busTime) {
  printOut("You woke up at " + wakeUpTime + " o'clock. You woke up early, you can catch the bus!");
}
 else if (wakeUpTime > busTime) { 
  printOut("you woke up at " +wakeUpTime + " o'clock. You woke up late, you can't catch the bus!");
}
if (wakeUpTime ===busTime) {
  printOut("you woke up at " + wakeupTime + " o' clock. You can't catch the bus!");
}

printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let number = -5;


if (number > 0) {
  printOut(number.toString() + " is Positive");
} else if (number < 0) {
  printOut(number.toString() + " is Negative");
} else 
{ 
  printOut(number.toString() + " is Zero");
}




printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let imageSize = Math.floor(Math.random() * 8) + 1;
printOut("Image size:", imageSize);
if (imageSize >= 4) {
  printOut("Thank you");
}
else {
  printOut("The image is too small");
}


printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
if (imageSize >= 6) {
  printOut ("The image is too large!");
}
else if (imageSize <4) {
printOut ("The image is too small");

}
else {
  printOut("Thank you");
  
}
printOut(newLine);

printOut("--- Part 8 - 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const monthList = ["January", "February", "Mars", "April", "Mai", "Jun", "Juli", "August", "September", "October", "November", "December"];
const noOfMonth = monthList.length;
const monthName = monthList[Math.floor(Math.random() * noOfMonth)];
const daysInMonth =[31, 28, 31, 30, 31, 31, 31, 30, 31, 30, 31];
const monthIndex = monthList.indexOf(monthName);
const days = daysInMonth[monthIndex];

printOut(`Selected month: ${monthName} has ${days} days`);
if (monthName.toLowerCase().includes("r")) {
  printOut("You must take vitamin D");
} else 
  printOut("You do not need to take vitamin D");

printOut("Replace this with you answer!");
printOut(newLine);



/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
if (monthName === "Mars" || monthName === "May") {
  printOut ("The gallery is closed");

} else if (monthIndex === 3) {
  printOut ("There is a temporary premises in the building next door");
} else {
  printOut ("The art gallery is open");
}

printOut(newLine);
"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function todaysDate(){
    const todaysDate = new Date();
    const day = todaysDate.getDay();
    const month= todaysDate.getMonth();
    const date = todaysDate.getDate();
    const year = todaysDate.getFullYear();

    const dayMonthValues = {
        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        months: ["January", "February", "Mars", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    }
          printOut(dayMonthValues.days[day] + ", " + dayMonthValues.months[month] + "" + date + ", " + year);
}

todaysDate()

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function todaysDate2(){

    const todaysDate = new Date();
    const day = todaysDate.getDay();
    const month= todaysDate.getMonth();
    const date = todaysDate.getDate();
    const year = todaysDate.getFullYear();

    const dayMonthValues = {
        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        months: ["January", "February", "Mars", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    }



 return{
    day: dayMonthValues.days[day],
    month: dayMonthValues.months[month],
    date: date,
    year: year
    
    }
}

     function countDown2(){
        const destination = new Date('May 14, 2025');
        const now = Date.now();
        
        const timeBetween = Math.ceil((destination.getTime() - now) / 1000 / 60 / 60 / 24);
        printOut(timeBetween);
        const event = todaysDate2();
        const todaysDate = [event.day, " " + event.month, " " + event.date, " " + event.year]
        printOut ('Todays date is ${todaysDate}, and there are ${timeBetween} days left untill the realease of 2XKO!')
     }


     todaysDate();
     countDown2();
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function circleInfo(){
    const pi = Math.PI;
    const radius = parseInt(prompt("Enter the radius of the circle in cm: "));
    const diameter = radius * 2;
    const circumference = (2 * pi * radius).toFixed(3);
    const area = (pi * radius **2).toFixed(3);

    printOut(radius);
    printOut(diameter);
    printOut(circumference);

    printOut('The diameter is ${diameter} cm, the circumference is ${circumference} cm and the area is ${area} cm.');
}
circleInfo();

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function rectangleInfo(){
    const width = parseint(prompt("Enter the width of the rectangle in cm: "));
    const height = parseInt(prompt("Enter the height of the rectangle in cm: "));
    const parimeter = 2 *(width + height)
    const area = (width * height).toFixed(3)

    printOut(width);
    printOut(height);
    printOut(parimeter);
    printOut(area);

    printOut('The parameter of the rectangle is ${parimeter} cm and the area is ${area} cm.')
}

rectangleInfo();

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function tempConvert(temperature, type){
    let C, F, K

    if (type == "C"){
        F = Math.floor((temperature * 9/5) + 32);
        K = Math.floor(temperature + 273.15);
        printOut(${temperature}°C is ${F}°F and ${K}K)
    } else if (type == "F"){
        C = Math.floor((temperature - 32) * 5/9);
        K = Math.floor((temperature - 32) * 5/9 + 273.15);
        printOut(${temperature}°F is ${C}°C and ${K}K);
    } else if (type == "K"){
        C = Math.floor(temperature - 273.15);
        F = Math.floor((temperature - 273.15) * 9/5 + 32);
        printOut(${temperature}K is ${C}°C and ${F}°F);
    } else {
        printOut(Invalid temperature type. Use 'C' for Celsius, 'F' for Fahrenheit, or 'K' for Kelvin.)
    }

    const temp = parseInt(prompt('Please enter the temperature: '));
    const tempId = (prompt('Please enter "C" for celsius, "F" for fahrenheit or "K" for kelvin: '));
tempConvert(temp, tempId);


printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function price(grossAmount, taxGroup){
    let vat = 0;

    if (taxGroup == "normal"){
        vat = 25;
        printOut(The net price is ${grossAmount} and the price after Tax is ${(100 * grossAmount) / (vat + 100)});
    } else if (taxGroup == "food"){
        vat = 15;
        printOut(The net price is ${grossAmount} and the price after Tax is ${(100 * grossAmount) / (vat + 100)});
    } else if (taxGroup == "hotel"  taxGroup == "transport"  taxGroup == "cinema"){
        vat = 10;
        printOut(The net price is ${grossAmount} and the price after Tax is ${(100 * grossAmount) / (vat + 100)});
    } else if (taxGroup == "goblins") {
        vat = NaN
        printOut(The net price is ${grossAmount} and the price after Tax is ${(100 * grossAmount) / (vat + 100)});
    } else {
        return "Unknown VAT group!"
    }

    return (100 * grossAmount) / (vat + 100);
}

const grossAmount = prompt("what is the gross amount? ")
const taxGroup = prompt("What is the tax group? ")

price(grossAmount, taxGroup);



printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

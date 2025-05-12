"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* 
Part 1: Array Creation and Traversal 
Create an array where you hard-code all the numbers from 1 to 20.
Use a for loop to "run through" the array and print all the elements in the array.  */
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
               11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
               for (let i = 0; i < numbers.length; i++) {
  printOut(numbers[i]);
}



printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!
Take the array from task 1 and use a built-in method found in the array object to print all the elements with
a custom defined character separating all the elements.
*/
printOut(numbers.join(", "));
printOut("");

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Create a constant that contains the text "Hei på deg, hvordan har du det?" (Hello there, how are you?)
Take this text and convert it into an array that contains all the words in the text, i.e., each element should
contain only one word from the text. Use a loop to traverse (run through) this array so that you can print
which word number, which index the word is at, and the word itself*/
const greeting = "Hei på deg, hvordan har du det?";
const words = greeting.split(" ");

for (let i = 0; i < words.length; i++) {
    printOut(`words ${i + 1} is at index ${i}: ${words[i]}`);
}


printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Create an array with these names: "Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid",
"Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth" and "Kristin".
Then create a function that will remove an element from an array. Let the function have two parameters.
Parameter number one is the array from which you will remove the element, parameter two is the text that
should be removed from the array. Check if the element exists in the array so that you can inform whether
the element exists or not in the array*/
const names = [
    "Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid",
    "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina",
    "Maria", "Elisabeth", "Kristin"
];
function removeNameFromArray(array, nameToRemove) {
    const index = array.indexOf(nameToRemove);

    if (index !== -1) {
        array.splice(index, 1);
        printOut(`"${nameToRemove}" was removed from the array.`);
    } else {
        printOut(`"${nameToRemove}" does not exist in the array.`);
    }
}

removeNameFromArray(names, "Inger");   
removeNameFromArray(names, "Lise");   

printOut(names);
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/*Create a new array with these names: "Jakob", "Lucas", "Emil", "Oskar", "Oliver", "William", "Filip", "Noah",
"Elias", "Isak", "Henrik", "Aksel", "Kasper", "Mathias", "Jonas", "Tobias", "Liam", "Håkon", "Theodor"and
"Magnus" Merge the arrays with girl names and boy names into a new array with all the names.*/
const boyNames = [
    "Jakob", "Lucas", "Emil", "Oskar", "Oliver", "William", "Filip", "Noah"
];

const girlNames = [
    "Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid"
];

const allNames = [...girlNames, ...boyNames];

printOut("All names: " + allNames.join(", "));

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
class TBook {
    constructor(aTitle, aAuthor, aISBN) {
        this._title = aTitle;
        this._author = aAuthor;
        this._isbn = aISBN;
    }

    toString() {
        return `Title: ${this._title}, Author: ${this._author}, ISBN: ${this._isbn}`;
    }
}
    /* Create an array that contains three instances of the TBook class from diffrent Authors*/
const books = [
    new TBook("The Great Gatsby", "F. Scott Fitzgerald", "9780743273565"),  
    new TBook("To Kill a Mockingbird", "Harper Lee", "9780061120084"),
    new TBook("1984", "George Orwell", "9780451524935")
];
books.forEach(printBook);
function printBook(book) {
    printOut(book.toString());
}

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const EWeekDays = {
    WeekDay1: { value: 0x01, name: "Mandag" },
    WeekDay2: { value: 0x02, name: "Tirsdag" },
    WeekDay3: { value: 0x04, name: "Onsdag" }, 
    WeekDay4: { value: 0x08, name: "Torsdag" },
    WeekDay5: { value: 0x10, name: "Fredag" },
    WeekDay6: { value: 0x20, name: "Lørdag" },
    WeekDay7: { value: 0x40, name: "Søndag", type: "Helligdag" },
    Workdays: { value: 0x01 + 0x02 + 0x04 + 0x08 + 0x10, name: "Arbeidsdager" },
    Holidays: { value: 0x20 + 0x40, name: "Helg" }
};

const keys = Object.keys(EWeekDays);
const values = Object.values(EWeekDays);
let valueKeys = Object.values(EWeekDays[keys[7]])    

printOut("Keys: " + keys.join(", "));
printOut("Values: " + values.join(", "));
printOut("ValueKeys: " + valueKeys.join(", "));

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Create an array that contains 35 random numbers from 1 to 20 (inclusive). Sort these arrays in ascending
and descending order. To get full credit for this task, it must be solved with "callback" functions that you
use in the .sort(...) method of this array.*/
const randomNumbers = Array.from({ length: 35 }, () => Math.floor(Math.random() * 20) + 1);
const ascendingOrder = [...randomNumbers].sort((a, b) => a - b);
const descendingOrder = [...randomNumbers].sort((a, b) => b - a);
printOut("Random Numbers: " + randomNumbers.join(", "));
printOut("Ascending Order: " + ascendingOrder.join(", "));
printOut("Descending Order: " + descendingOrder.join(", "));
printOut(newLine);

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Based on part 8, print out how many times the different numbers occur in the array. First, print the
numbers and their frequency, then print the frequencies and which numbers they correspond to. You must
print the most frequent ones first, and if there are multiple numbers where the frequency is the same, then
it should again be sorted from the smallest to the largest number */
const frequencyMap = randomNumbers.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
}, {});
const sortedFrequencies = Object.entries(frequencyMap)
    .sort((a, b) => b[1] - a[1] || a[0] - b[0]);
const sortedNumbers = Object.entries(frequencyMap)
    .sort((a, b) => a[0] - b[0])
    .reduce((acc, [num, freq]) => {
        acc[freq] = acc[freq] || [];
        acc[freq].push(num);
        return acc;
    }, {});
printOut("Number Frequencies:");
sortedFrequencies.forEach(([num, freq]) => {
    printOut(`Number ${num} occurs ${freq} times`);
});
printOut("Frequencies:");
Object.entries(sortedNumbers).forEach(([freq, nums]) => {
    printOut(`Frequency ${freq}: ${nums.join(", ")}`);
});
printOut(newLine);



/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/*create an array that contains rows and columns (2 dimensions, 5x9). Start with an empty array. Use "for"
loops to create rows and columns, respectively. In each "cell," create a text that shows which row and
column the "cell" is in. Then create two new sets of "for" loops to print the array itself */
const rows = 5;
const cols = 9;
const twoDArray = Array.from({ length: rows }, () => Array(cols).fill(null));
for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
        twoDArray[i][j] = `Row ${i + 1}, Col ${j + 1}`;
    }
}
printOut("2D Array:");
for (let i = 0; i < rows; i++) {
    let rowString = "";
    for (let j = 0; j < cols; j++) {
        rowString += twoDArray[i][j] + "\t";
    }
    printOut(rowString);
}
printOut(newLine);


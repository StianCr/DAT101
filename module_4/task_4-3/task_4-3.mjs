"use strict";

const carTypes = [
  { value: 1, caption: "Aston Martin" },
  { value: 2, caption: "Bentley" },
  { value: 3, caption: "Alfa Romeo" },
  { value: 4, caption: "Ferrari" },
  { value: 5, caption: "Subaru" },
  { value: 6, caption: "Porsche" },
  { value: 7, caption: "Tesla" },
  { value: 8, caption: "Toyota" },
  { value: 9, caption: "Renault" },
  { value: 10, caption: "Peugeot" },
  { value: 11, caption: "Suzuki" },
  { value: 12, caption: "Mitsubishi" },
  { value: 13, caption: "Nissan" },
];

const GirlsNames = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

const MovieGenre = [
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Film Noir",
  "History",
  "Horror",
  "Music",
  "Musical",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Short",
  "Sport",
  "Superhero",
  "Thriller",
  "War",
  "Western",
];

//--- Part 1 ----------------------------------------------------------------------------------------------
/* Create code in cmbTask1CalculateClick to calculate the perimeter and area of the given rectangle*/
function cmbTask1CalculateClick() {
  const length = parseFloat(document.getElementById("txtTask1Length").value);
  const width = parseFloat(document.getElementById("txtTask1Width").value);

  if (isNaN(length) || isNaN(width)) {
    alert("Please enter valid numbers for length and width.");
    return;
  }

  const perimeter = 2 * (length + width);
  const area = length * width;

  document.getElementById("txtTask1Perimeter").value = perimeter;
  document.getElementById("txtTask1Area").value = area;
}


//--- Part 2 ----------------------------------------------------------------------------------------------
/* Create an event function that is triggered if you press a key while txtTask2Word has keyboard focus.
Every time the user presses "return" or "enter", add the word to the task2Words array and print how
many words and all the words in txtTask2Output. Clear the input field every time the user presses
"enter" or "return".*/
const task2Words = [];

function txtTask2WordKeyPress(event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Prevent form submission if inside a form
    const word = document.getElementById("txtTask2Word").value.trim();
    if (word) {
      task2Words.push(word);
      document.getElementById("txtTask2Output").value =
        `Number of words = ${task2Words.length}\nWords: ${task2Words.join(", ")}`;
      document.getElementById("txtTask2Word").value = "";
    }
  }
}

//--- Part 3 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
const cmbTask3CheckAnswer = document.getElementById("cmbTask3CheckAnswer");
cmbTask3CheckAnswer.addEventListener("click", cmbTask3CheckAnswerClick);
const txtTask3Output = document.getElementById("txtTask3Output");

let text = ""; 
function cmbTask3CheckAnswerClick() {
  const chkTask3 = document.getElementsByName("chkTask3");
  for(let i = 0; i < chkTask3.length; i++) {
   
   const checkBox = chkTask3[i];
   if(checkBox.checked){
    const value = checkBox.value;
    if(value === "4"){
      text += "Du har valgt nummer " + value + ". Dette kan du ikke mene!!???<br />"

    }else{
      text += "Du har valgt nummer " + value + ".<br />"
    }
   }

  }
  txtTask3Output.innerHTML = text;
  text = ""; 
}

//--- Part 4 ----------------------------------------------------------------------------------------------
/* Use a for-loop to add "radio" buttons to the divTask4Cars element. Get the values from the CarTypes
array. Print the selected car in txtTask4Output.*/
const divTask4Cars = document.getElementById("divTask4Cars");
const txtTask4Output = document.getElementById("txtTask4Output");
const carCaptions = carTypes.map(car => car.caption);

for (let i = 0; i < carCaptions.length; i++) {
  const car = carCaptions[i];

  const radio = document.createElement("input");
  radio.type = "radio";
  radio.name = "carType";
  radio.value = car;
  radio.id = `carType${i}`;
  radio.addEventListener("change", () => {
    txtTask4Output.value = `Selected car: ${car}`;
  });

  const label = document.createElement("label");
  label.htmlFor = `carType${i}`;
  label.textContent = car;

  divTask4Cars.appendChild(radio);
  divTask4Cars.appendChild(label);
  divTask4Cars.appendChild(document.createElement("br")); // optional line break
}


//--- Part 5 ----------------------------------------------------------------------------------------------
/* Create an event function that occurs when the element selectTask5Animals changes value (change),
and print the user's selection in the txtTask5Output element.
*/
const selectTask5Animals = document.getElementById("selectTask5Animals");
const txtTask5Output = document.getElementById("txtTask5Output");


selectTask5Animals.addEventListener("change", function () {
  const selected = this.value;
  txtTask5Output.value = `You selected: ${selected}`;
});


//--- Part 6 ----------------------------------------------------------------------------------------------
/* Take all the names from the GirlsNames array and add them to the selectTask6Girls element.
Create an event function in the same way as in task 5 and print the name the user selects in
txtTask6Output*/
const selectTask6Girls = document.getElementById("selectTask6Girls");
const txtTask6Output = document.getElementById("txtTask6Output");

for (let i = 0; i < GirlsNames.length; i++) {
  const option = document.createElement("option");
  option.value = GirlsNames[i];
  option.textContent = GirlsNames[i];
  selectTask6Girls.appendChild(option);
}
selectTask6Girls.addEventListener("change", function () {
  const selected = this.value;
  txtTask6Output.value = `You selected: ${selected}`;
}
);


//--- Part 7 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

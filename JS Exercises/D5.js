/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"];

pets.forEach((e) => {
  console.log(e);
});

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

pets.sort();
console.log(pets);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

console.log(pets.reverse());

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
let firstElement = pets[0];
let last = pets[pets.length - 1];
pets.shift();
pets.pop();
pets.push(firstElement);
pets.unshift(last);
console.log(pets);
/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

cars.forEach((e) => {
  e.licencePlate = Math.floor(Math.random() * (500000 - 100000 + 1 + 100000));
});

console.log(cars);
/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

cars.push({
  brand: "Ferrari",
  model: "1",
  color: "red",
  trims: ["life", "allure", "style"],
  licencePlate: Math.floor(Math.random() * (500000 - 100000 + 1 + 100000)),
});

// cars.forEach((e) => {
// delete e.trims;
// });

console.log(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];
let element = "";
cars.forEach((e) => {
  element = e.trims[0];
  justTrims.push(element);
});

console.log(justTrims);
/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

cars.forEach((e) => {
  if (e.color.charAt(0) === "b") {
    console.log(`${e.brand} ==> Fizz`);
  } else {
    console.log(`${e.brand} ==> Buzz`);
  }
});

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];

let i = 0;
while (i < numericArray.length) {
  if (numericArray[i] !== 32) {
    console.log(numericArray[i]);
  } else break;
  i++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];

const newArray = charactersArray.map((e) => {
  switch (e) {
    case "a":
    case "A":
      return 1;
    case "b":
    case "B":
      return 2;
    case "c":
    case "C":
      return 3;
    case "d":
    case "D":
      return 4;
    case "e":
    case "E":
      return 5;
    case "f":
    case "F":
      return 6;
    case "g":
    case "G":
      return 7;
    case "h":
    case "H":
      return 8;
    case "i":
    case "I":
      return 9;
    case "j":
    case "J":
      return 10;
    case "k":
    case "K":
      return 11;
    case "l":
    case "L":
      return 12;
    case "m":
    case "M":
      return 13;
    case "n":
    case "N":
      return 14;
    case "o":
    case "O":
      return 15;
    case "p":
    case "P":
      return 16;
    case "q":
    case "Q":
      return 17;
    case "r":
    case "R":
      return 18;
    case "s":
    case "S":
      return 19;
    case "t":
    case "T":
      return 20;
    case "u":
    case "U":
      return 21;
    case "v":
    case "V":
      return 22;
    case "W":
    case "w":
      return 23;
    case "x":
    case "X":
      return 24;
    case "y":
    case "Y":
      return 25;
    case "z":
    case "Z":
      return 26;
    default:
      return "Not a Letter";
  }
});
console.log(newArray);

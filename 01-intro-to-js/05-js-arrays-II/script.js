const numbers = [5, 10, 15];

// --------- Funktionen schreiben und aufrufen ---------
const showNumber2 = function (number) {
  console.log(number); // Nacheinander: 5, 10, 15
};

for (const number of numbers) {
  showNumber2(number);
}

const addNumberOld = (number) => {
  return number + 3;
};

// Ohne geschweifte Klammern gibt die Arrow Function den Ausdruck direkt zurück.
// Die Kurzform geht nur bei einem einzigen Ausdruck. Für mehrere Anweisungen brauchen wir geschweifte Klammern. 
const addNumber = (number) => number + 3;
console.log(addNumberOld(10)); // 13
console.log(addNumber(10)); // 13

// --------- Mit forEach durch ein Array gehen ---------
// forEach übergibt bei jedem Aufruf das Element, seinen Index und das ganze Array.
const showNumber = (number, index, array) => {
  console.log(index + ':' + number); // Nacheinander: 0:5, 1:10, 2:15
  console.log(array); // Bei jedem Aufruf: [5, 10, 15]
  return number;
};

const result = numbers.forEach(showNumber);
// forEach ignoriert den Rückgabewert von showNumber.
console.log(result); // undefined

// Den Callback können wir auch direkt an forEach übergeben.
numbers.forEach((number, index) => {
  console.log(index + ':' + number); // Nacheinander: 0:5, 1:10, 2:15
});

numbers.forEach(function (number, index) {
  console.log(index + ':' + number); // Nacheinander: 0:5, 1:10, 2:15
});

// --------- Mit map Werte verdoppeln ---------
const doubledNumbers = numbers.map((number) => number * 2);
console.log(doubledNumbers); // [10, 20, 30]

// --------- Werte mit einer Schleife und mit reduce addieren ---------
let total = 0;

for (const number of numbers) {
  total = total + number;
}

console.log(total); // 30

// Hier beginnt die Summe bei 10. Nach jedem Schritt ist total die neue Zwischensumme.
const total2 = numbers.reduce((total, number) => total + number, 10);
console.log(total2); // 40

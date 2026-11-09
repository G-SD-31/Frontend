// --------- Argumente aus dem Terminal lesen ---------
// Beispielaufruf: node script.js 5 10
// Die ersten beiden Einträge sind die Pfade zu Node.js und zur Skriptdatei.
const cliArguments = process.argv.slice(2);
console.log(cliArguments); // Beim Beispielaufruf: [ '5', '10' ]

// Die ersten beiden Argumente landen der Reihe nach in diesen Variablen.
const [firstNumber, secondNumber] = cliArguments;

// --------- Zwei Zahlen addieren ---------
function sum(num1, num2) {
  if (!num1 || !num2) {
    return 'Please enter two numbers';
  }

  // Die Argumente sind Strings. Das Plus direkt vor jedem String wandelt ihn
  // wie Number() in eine Zahl um. Das Plus dazwischen addiert die Zahlen.
  return +num1 + +num2;
}

const result = sum(firstNumber, secondNumber);
console.log(result); // Beim Beispielaufruf: 15. Fehlt ein Argument: Please enter two numbers

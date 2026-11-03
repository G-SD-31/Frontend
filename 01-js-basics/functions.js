//--------------
/*
// Funktionen und Gültigkeitsbereich (Scope)
function calculateTotal(price, count) {
  const subtotal = price * count;
  return subtotal + 2;
}

const unitPrice = 5;
const quantity = 3;
// Die Argumente liefern ihre Werte an die Parameter:
// unitPrice (5) an price, quantity (3) an count.
const total = calculateTotal(unitPrice, quantity);
console.log(total); // 17
console.log(total > 10); // true
// subtotal ist nur innerhalb von calculateTotal verfügbar.
// console.log zeigt einen Wert an; return gibt ihn an die aufrufende Stelle zurück.
*/

//--------------
/*
// Standardwerte und Rest-Parameter
function calculateTotal(price, count = 1) {
  return price * count + 2;
}

// Der Standardwert greift bei einem fehlenden Argument oder bei undefined.
console.log(calculateTotal(5)); // 7
console.log(calculateTotal(5, 3)); // 17
console.log(calculateTotal(5, 0)); // 2: 0 wird nicht durch 1 ersetzt

// Der Rest-Parameter sammelt die Argumente in einem Array.
// Er muss der letzte Parameter sein.
function showProducts(...names) {
  console.log(names);
}

showProducts("Notizbuch", "Stift"); // ["Notizbuch", "Stift"]
showProducts("Mappe"); // ["Mappe"]
*/

//--------------
/*
// Fehlerbehandlung: absichtlicher Fehler zum Beobachten von try...catch
const unitPrice = 5;
console.log("Vor der Änderung");

try {
  unitPrice = 6; // Absichtlicher TypeError: const erlaubt keine neue Zuweisung.
  console.log("Änderung erfolgreich"); // Wird wegen des Fehlers nicht erreicht.
} catch (error) {
  console.log("Der Preis konnte nicht geändert werden.");
  console.log(error.name); // "TypeError"
}

console.log("Weiter nach try/catch");
console.log(unitPrice); // 5: catch hat die Zuweisung nicht repariert.
*/

//--------------
// Fertige Bestellung
const productName = 'Notizbuch';
const unitPrice = 5;
let quantity = 3;
const shippingCost = 2;

// Die Funktion bekommt Preis, Menge und Versandkosten über ihre Parameter.
// Fehlt das dritte Argument oder ist es undefined, gilt shipping = 2.
function calculateTotal(price, count, shipping = 2) {
  return price * count + shipping;
}

const firstTotal = calculateTotal(unitPrice, quantity, shippingCost);
console.log(productName); // "Notizbuch"
console.log(firstTotal); // 17

quantity = 4;
// Die neue Menge braucht eine neue Berechnung. firstTotal bleibt 17.
const updatedTotal = calculateTotal(unitPrice, quantity, shippingCost);
console.log(updatedTotal); // 22
console.log(updatedTotal > 20); // true

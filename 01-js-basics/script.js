//--------------
/*
// Erste Ausgaben und Syntax
console.log("Hello");
console.log(5 * 3); // 15
*/

//--------------
/*
// Variablen
const productName = "Notizbuch";
const unitPrice = 5;
let quantity = 3;

console.log(productName);
console.log(unitPrice * quantity); // 15

// let erlaubt eine neue Zuweisung an die vorhandene Variable.
quantity = 4;
console.log(unitPrice * quantity); // 20
// Eine neue Zuweisung an unitPrice wäre wegen const nicht erlaubt.
*/

//--------------
/*
// Datentypen
const productName = "Notizbuch";
const unitPrice = 5;
let quantity = 3;
const inStock = true;

console.log(typeof productName); // "string"
console.log(typeof unitPrice); // "number"
console.log(typeof quantity); // "number"
console.log(typeof inStock); // "boolean"

// Der Typ gehört zum Wert. "3" ist Text, 3 ist eine Zahl.
quantity = "3";
console.log(typeof quantity); // "string"
quantity = 3;
console.log(typeof quantity); // "number"

let deliveryNote;
const selectedCoupon = null;
console.log(deliveryNote); // undefined: noch kein Wert zugewiesen
console.log(selectedCoupon); // null: bewusst kein Gutschein ausgewählt
console.log(typeof deliveryNote); // "undefined"
console.log(typeof selectedCoupon); // "object": historische Besonderheit
// null ist trotzdem kein Objekt.

const order = { product: "Notizbuch", quantity: 3 };
const productNames = ["Notizbuch", "Stift"];
console.log(order.quantity); // 3
console.log(typeof order); // "object"
console.log(typeof productNames); // "object": Arrays sind besondere Objekte

// const verhindert eine neue Zuweisung an order.
// Eigenschaften des vorhandenen Objekts dürfen sich trotzdem ändern.
order.quantity = 4;
console.log(order.quantity); // 4
*/

//--------------
/*
// Rechnen mit Operatoren
const productName = "Notizbuch";
const unitPrice = 5;
let quantity = 3;
const shippingCost = 2;

const subtotal = unitPrice * quantity;
const total = subtotal + shippingCost;
console.log(productName);
console.log(subtotal); // 15
console.log(total); // 17

console.log(total - 2); // 15
console.log(subtotal / quantity); // 5
console.log(10 % 3); // 1: Rest der Division, kein Prozentwert

console.log(5 + 2 * 3); // 11: Multiplikation zuerst
console.log((5 + 2) * 3); // 21: Klammern zuerst

console.log("Gesamt: " + total); // "Gesamt: 17"
console.log("5" + 3); // "53": Text wird verbunden
console.log(5 + 3); // 8: Zahlen werden addiert

quantity++;
console.log(quantity); // 4
quantity--;
console.log(quantity); // 3

console.log(quantity++); // 3: bisherigen Wert benutzen, dann erhöhen
console.log(quantity); // 4
console.log(++quantity); // 5: zuerst erhöhen, dann neuen Wert benutzen

// Ein gespeichertes Ergebnis wird bei einer Mengenänderung nicht neu berechnet.
console.log(subtotal); // 15
console.log(unitPrice * quantity); // 25
*/

//--------------
// Vergleiche
const unitPrice = 5;
const quantity = 3;
const total = unitPrice * quantity;

console.log(total > 10); // true
console.log(total < 10); // false
console.log(total >= 15); // true
console.log(total <= 15); // true

//  === und !== vergleichen ohne Typumwandlung.
console.log(quantity === 3); // true
console.log(quantity !== 3); // false
console.log(quantity === '3'); // false

// == und != erlauben Typumwandlungen beim Vergleich.
console.log(3 == '3'); // true
console.log(3 != '3'); // false
console.log(3 === '3'); // false
console.log(3 !== '3'); // true

// --------- Array: Werte über ihre Position lesen ---------
const orderValues = ['Notizbuch', 5, 2, false];

// Spread erstellt hier eine neue Array-Kopie.
const array2 = [...orderValues];
console.log(array2); // ['Notizbuch', 5, 2, false]
console.log(array2 === orderValues); // false: zwei verschiedene Arrays

// Beim Array-Destructuring entscheidet die Position.
const [firstElement, secondElement] = orderValues;
console.log(firstElement, secondElement); // Notizbuch 5

// --------- Object Literal: Werte mit Namen speichern ---------
const order = {
  productName: 'Notizbuch',
  unitPrice: 5,
  quantity: 2,
  isPaid: false,

  // Eine Funktion als Eigenschaft eines Objekts nennen wir Methode.
  calculateTotal(price, quantity) {
    return price * quantity;
  },

  // Ein Objekt kann weitere Objekte und Arrays enthalten.
  address: {
    city: 'Berlin',
    postalCode: '10900',
  },
  categories: ['schule', 'büro'],
};

// --------- Destructuring: Eigenschaften in Variablen lesen ---------
// Kurzform für const productName = order.productName;
// und const quantity = order.quantity;
const { productName, quantity } = order;
console.log(productName, quantity); // Notizbuch 2

// const erlaubt Änderungen am Objekt, aber keine neue Zuweisung an order.
order.quantity = 4;
console.log(order.quantity); // 4
console.log(quantity); // 2: Die herausgelesene Zahl ändert sich nicht mit.

// --------- Verschachtelte Werte lesen ---------
console.log(order.address.city); // Berlin
console.log(order.categories[0]); // schule

// --------- Eine Methode aufrufen ---------
// 5 und 4 werden als Argumente an die Parameter price und quantity übergeben.
// Der Parameter quantity gehört zur Methode, nicht zur Variable oben.
const total = order.calculateTotal(order.unitPrice, order.quantity);
console.log(total); // 20

// --------- Spread: Ein Objekt flach kopieren ---------
const order2 = { ...order };
console.log(order2 === order); // false: zwei verschiedene Objekte

order.productName = 'Stift';
console.log(order.productName); // Stift
console.log(order2.productName); // Notizbuch

// Flache Kopie: Das innere Objekt und das Array werden weiterhin geteilt.
console.log(order2.address === order.address); // true
console.log(order2.categories === order.categories); // true

// --------- Dot Notation: Einen festen Eigenschaftsnamen benutzen ---------
console.log(order.quantity); // 4: oben bereits geändert
console.log(order.product); // undefined: Diese Eigenschaft gibt es nicht.

// --------- Bracket Notation: Den Namen aus einer Variable lesen ---------
let selectedProperty = 'unitPrice';
console.log(order[selectedProperty]); // 5

// --------- Eigenschaften ändern, hinzufügen und löschen ---------
order.quantity = 3;
console.log(order.quantity); // 3

order.note = 'Bitte klingeln';
console.log(order.note); // Bitte klingeln

delete order.note;
console.log(order.note); // undefined: Die Eigenschaft wurde gelöscht.

// --------- Math: Fertige Methoden benutzen ---------
console.log(Math.round(4.7)); // 5: zur nächsten ganzen Zahl runden
console.log(Math.floor(4.7)); // 4: nach unten runden
console.log(Math.ceil(4.7)); // 5: nach oben runden
console.log(Math.random()); // Zufallszahl ab 0 und kleiner als 1; Ausgabe variiert.

// --------- Date: Das aktuelle lokale Datum lesen ---------
const today = new Date();
console.log(today.getFullYear()); // Aktuelles Jahr, z. B. 2026
console.log(today.getMonth() + 1); // Aktueller Monat (1–12), z. B. 11
console.log(today.getDate()); // Aktueller Tag im Monat (1–31), z. B. 5
// getMonth() zählt ab 0. Deshalb addieren wir für die Monatszahl 1.
// Die Datumsausgaben hängen vom Zeitpunkt und der lokalen Zeitzone ab.

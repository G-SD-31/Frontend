// --------- Array: Mehrere Werte in einer Liste speichern ---------
const products = ['Notizbuch', 'Stift', 'Mappe'];
console.log(products); // ['Notizbuch', 'Stift', 'Mappe']

// --------- Index: Bei 0 anfangen ---------
console.log(products[0]); // Notizbuch: das erste Element
console.log(products[5]); // undefined: An diesem Index gibt es kein Element.

// --------- length: Die Elemente zählen ---------
console.log(products.length); // 3
console.log(products[products.length - 1]); // Mappe: das letzte Element

// --------- Ein Element ändern ---------
// const erlaubt Änderungen am Inhalt, aber keine neue Zuweisung an products.
products[1] = 'Bleistift';
console.log(products[1]); // Bleistift

// --------- push: Hinten hinzufügen ---------
const newLength = products.push('Tasche');
console.log(newLength); // 4: push gibt die neue Länge zurück.
console.log(products); // ['Notizbuch', 'Bleistift', 'Mappe', 'Tasche']

// --------- pop: Hinten entfernen ---------
const removedLast = products.pop();
console.log(removedLast); // Tasche: pop gibt das entfernte Element zurück.
console.log(products); // ['Notizbuch', 'Bleistift', 'Mappe']

// --------- unshift: Vorne hinzufügen ---------
const lengthAfterStart = products.unshift('Heft');
console.log(lengthAfterStart); // 4: unshift gibt die neue Länge zurück.
console.log(products); // ['Heft', 'Notizbuch', 'Bleistift', 'Mappe']

// --------- shift: Vorne entfernen ---------
const removedFirst = products.shift();
console.log(removedFirst); // Heft: shift gibt das entfernte Element zurück.
console.log(products); // ['Notizbuch', 'Bleistift', 'Mappe']

// --------- slice: Einen Ausschnitt als neues Array erhalten ---------
// Startindex 1 gehört dazu; Endindex 3 gehört nicht dazu.
const slicedCopy = products.slice(1, 3);
console.log(slicedCopy); // ['Bleistift', 'Mappe']
console.log(products); // ['Notizbuch', 'Bleistift', 'Mappe']: unverändert

// --------- join: Aus dem Array einen String machen ---------
const summary = slicedCopy.join(', ');
console.log(summary); // Bleistift, Mappe
console.log(typeof summary); // string

// --------- reverse: Die ursprüngliche Liste umdrehen ---------
const reversedProducts = products.reverse();
console.log(products); // ['Mappe', 'Bleistift', 'Notizbuch']

// --------- toReversed: Eine neue, umgedrehte Liste erhalten ---------
// products wurde oben bereits umgedreht. Diese Reihenfolge wird jetzt umgedreht.
const reversed = products.toReversed();
console.log(reversed); // ['Notizbuch', 'Bleistift', 'Mappe']
console.log(products); // ['Mappe', 'Bleistift', 'Notizbuch']: bleibt erhalten

// --------- for...of: Jeden Wert der Liste lesen ---------
for (const singleProduct of products) {
  console.log(singleProduct);
}

// --------- for: Mit dem Index auf jedes Element zugreifen ---------
// < statt <=: Bei Länge 3 sind nur die Indizes 0, 1 und 2 vorhanden.
for (let index = 0; index < products.length; index++) {
  console.log(index, products[index]);
}

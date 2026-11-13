// --------- Strict Mode ---------
// Aktiviert strengere Regeln für diese Script-Datei.
'use strict';

const readingGoal = 2;
const firstName = 'John';

// --------- Template Strings: Werte in einen Text einsetzen ---------
console.log('Reading Goal: ' + readingGoal); // Reading Goal: 2
// Template Strings stehen zwischen Backticks. In ${...} kann ein Ausdruck stehen.
console.log(`Hello ${firstName}, Reading Goal: ${5 + 5}`); // Hello John, Reading Goal: 10

// --------- Object Literal: Eine Methode mit this ---------
const firstBook = {
  title: 'Harry Potter',
  author: 'J K Rowling',
  pages: 300,
  isRead: false,
  summary() {
    // Beim Aufruf firstBook.summary() ist this das Objekt firstBook.
    return `${this.title} von ${this.author}`;
  },
  // Gegenbeispiel: Eine Arrow Function hat kein eigenes this.
  // this würde hier nicht auf das Buch zeigen. Deshalb bleibt sie auskommentiert.
  // summary: () => {
  //   return `${this.title} von ${this.author}`;
  // },
};

const secondBook = {
  title: 'Der Hobbit',
  author: 'Mr. Hobbit',
  pages: 350,
  isRead: false,
};

// Ohne () weisen wir die Funktion zu, ohne sie aufzurufen.
secondBook.summary = firstBook.summary;

console.log(firstBook.summary()); // Harry Potter von J K Rowling
// Dieselbe Funktion liest jetzt über this die Eigenschaften von secondBook.
console.log(secondBook.summary()); // Der Hobbit von Mr. Hobbit

// --------- Konstruktorfunktion: Ähnliche Objekte erzeugen ---------
function BookConstructor(title, author, pages, isRead) {
  // new erzeugt ein neues Objekt. this bezieht sich hier auf dieses Objekt.
  // Die Argumente beim Aufruf liefern die Werte für diese Parameter.
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

const constructedBook = new BookConstructor(
  'Harry Potter',
  'J K Rowling',
  300,
  false,
);
const constructedBook2 = new BookConstructor(
  'Det Hobbit',
  'Mr. Hobbit',
  350,
  false,
);

// --------- Prototyp: Eine gemeinsame Methode ---------
// Beide erzeugten Objekte können diese Methode über ihren Prototyp erreichen.
// Die Buchdaten liegen weiterhin auf dem jeweiligen Objekt.
BookConstructor.prototype.summary = function () {
  return `${this.title} von ${this.author}`;
};

console.log(constructedBook.summary()); // Harry Potter von J K Rowling
console.log(constructedBook2.summary()); // Det Hobbit von Mr. Hobbit

// --------- Klassen: Konstruktor und Methoden zusammen schreiben ---------
class Book {
  constructor(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }

  // Diese Methode liegt auf Book.prototype.
  summary() {
    return `${this.title} von ${this.author}`;
  }
}

// Mit new erzeugen wir eine Instanz der Klasse Book.
const book1 = new Book('Harry Potter', 'J K Rowling', 300, false);
console.log(book1.summary()); // Harry Potter von J K Rowling

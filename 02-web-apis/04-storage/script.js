// --------- Einzelne Werte speichern und lesen ---------
// Die abgeschlossenen Beispiele bleiben auskommentiert.
// Zum Ausprobieren jeweils den passenden Abschnitt aktivieren.

// localStorage.setItem('firstName', 'John');
// localStorage.setItem('age', 30);

// --------- Ein Array als JSON speichern ---------
// const sampleEntries = ['Brot', 'Milch'];
// const sampleEntriesJson = JSON.stringify(sampleEntries);
// localStorage.setItem('liste', sampleEntriesJson);

// const storedSampleJson = localStorage.getItem('liste');
// const restoredSampleEntries = JSON.parse(storedSampleJson);
// console.log(restoredSampleEntries); // ['Brot', 'Milch'], nach dem Speichern oben

// --------- Einen gespeicherten Wert entfernen ---------
// localStorage.removeItem('age');
// const storedAge = localStorage.getItem('age');
// console.log(storedAge); // null

// Achtung: clear() entfernt alle localStorage-Einträge dieser Origin.
// localStorage.clear();

// --------- Elemente auswählen und gespeicherte Einträge lesen ---------
// Ich habe einige Zeilen aus handleSubmit herausgezogen, damit die gespeicherte
// Liste auch direkt beim Laden der Website angezeigt wird.
const form = document.querySelector('form');
const entriesList = document.querySelector('#entries');

// localStorage liefert JSON-Text oder null, wenn der Schlüssel fehlt.
const storedEntriesJson = localStorage.getItem('list');
// Ohne gespeicherte Liste starten wir mit einem leeren Array.
const entries = JSON.parse(storedEntriesJson || '[]');

// --------- Einen Eintrag auf der Seite anzeigen ---------
const showEntry = (entryText) => {
  const listItem = document.createElement('li');
  listItem.textContent = entryText;
  entriesList.appendChild(listItem);
};

// --------- Neue Einträge speichern und anzeigen ---------
const handleSubmit = (event) => {
  event.preventDefault();
  const entryText = event.target.entry.value.trim();

  // Auch eine Eingabe nur aus Leerzeichen soll keinen Eintrag erzeugen.
  if (entryText === '') {
    return;
  }

  entries.push(entryText);
  // Wir speichern jedes Mal das gesamte aktuelle Array als JSON-Text.
  localStorage.setItem('list', JSON.stringify(entries));

  showEntry(entryText);
  form.reset();
};

form.addEventListener('submit', handleSubmit);

// --------- Gespeicherte Einträge beim Start anzeigen ---------
// Das Lesen allein erzeugt noch keine li-Elemente im DOM.
// Beim Anzeigen verändern oder speichern wir das Array nicht erneut.
entries.forEach(showEntry);
